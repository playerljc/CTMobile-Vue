import DB from './DB';

export default {
  getListData() {
    return new Promise((resolve, reject) => {
      DB.executeQuery('select * from note order by createTime desc', (result) => {
        resolve(result);
      });
    });
  },
  count() {
    return new Promise((resolve, reject) => {
      DB.executeQuery('select count(id) as count from note', (result) => {
        resolve(result);
      });
    });
  },
  save({id, createTime, info, title}) {
    return new Promise((resolve, reject) => {
      DB.executePrepareQuery('insert into note (id,createTime,info,title) values(?,?,?,?)', [
        id, createTime, info, title
      ], () => {
        resolve();
      });
    });
  },
  update({id, createTime, info, title}) {
    return new Promise((resolve, reject) => {
      DB.executePrepareQuery('update note set createTime = ?,info = ?,title = ? where id = ?', [
        createTime, info, title, id
      ], () => {
        resolve();
      });
    })
  },
  get (id) {
    return new Promise((resolve, reject) => {
      DB.executePrepareQuery('select * from note where id = ?', [id], (result) => {
        resolve(result);
      });
    });
  }
};