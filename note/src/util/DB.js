/**
 * Created by lzq on 2016/2/6.
 */
export default {
  /**
   * 获取数据路链接
   */
  getConnection() {
    return openDatabase("note", "1.0", "note", 6 * 1024 * 1024);
  },
  /**
   * 执行一个数据库更新
   * @param sql String
   * @param success Function
   */
  executeUpdate(sql, success) {
    this.getConnection().transaction(function (tx) {
      tx.executeSql(sql, [], function () {
        if(success) {
          success();
        }
      }, function () {
        console.log("1")
      }, function () {
        console.log("1")
      }, function () {
        console.log("1")
      });

      //tx.executeSql("insert into note (id,createTime,info,title) values(?,?,?,?)",["1","2016-02-06","你是个好人","你是个好人"], function(){
      //    console.log("1")
      //},function(){
      //    console.log("1")
      //},function(){
      //    console.log("1")
      //},function(){
      //    console.log("1")
      //});
    });
  },
  /**
   * 执行一个预更新
   * @param sql String
   * @param params Array
   * @param success Function
   */
  executePrepareUpdate(sql, parameter, success) {
    this.getConnection().transaction(function (tx) {
      tx.executeSql(sql, parameter || [], success || function () {
      });
    });
  },
  /**
   * 执行一个查询
   * @param sql
   * @param success
   */
  executeQuery(sql, success) {
    this.getConnection().transaction(function (tx) {
      tx.executeSql(sql, [], function (tx, result) {
        if (success) {
          success(result || []);
        }
      });
    });
  },
  /**
   * 执行一个预查询
   * @param sql
   * @param parameter
   * @param success
   */
  executePrepareQuery(sql, parameter, success) {
    this.getConnection().transaction(function (tx) {
      tx.executeSql(sql, parameter || [], function (tx, result) {
        if (success) {
          success(result || []);
        }
      });
    });
  }
};