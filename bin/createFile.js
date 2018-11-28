const fs = require('fs');
const {spawn} = require('child_process');
const path = require('path');
const _ = require('lodash');
const realPath = path.normalize(__dirname + '\\..');

const paths = [
  `${realPath}\\demo\\src\\pages\\startmode`,
  `${realPath}\\demo\\src\\pages\\transition`,
];

const fileContent =
  '<template>' +
  '  <div>' +
  '    <header>' +
  '      <ctmobile-back class="ct-back-icon"/>' +
  '      <p class="ct-header-title"><%=title%></p>' +
  '    </header>' +
  '    <div class="ct-content" style="top:3rem;bottom:0;">' +
  '      <ul>' +
  '        <li>' +
  '          <ctmobile-link class="link" pageId="<%=title%>"><%=title%></ctmobile-link>' +
  '        </li>' +
  '      </ul>' +
  '    </div>' +
  '  </div>' +
  '</template>' +
  '<script src="./<%=file%>.js"></script>';

const template = _.template(fileContent);

const vueContent =
'export default {'+
'  props: {'+
'    _pDom: {'+
'      type: HTMLDivElement,'+
'      require: true,'+
'    },'+
'    pageId: {'+
'      type: String,'+
'      require: true,'+
'      value:"" '+
'    }'+
'  },'+
'  data: () => {'+
'    return {};'+
'  },'+
'  created() {'+
''+
'  },'+
'  mounted() {'+
''+
'  },'+
'  methods: {'+
'    pageCreate() {'+
'      console.log(`${this.$parent.getId()}:pageCreate`);'+
'    },'+
''+
'    /***'+
'     * 页面显示之前'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageBeforeShow(e) {'+
'      console.log(`${this.$parent.getId()}:pageBeforeShow`);'+
'    },'+
''+
'    /***'+
'     * 页面显示'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageShow(e) {'+
'      console.log(`${this.$parent.getId()}:pageShow`);'+
'    },'+
''+
'    /***'+
'     *  页面显示之后'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageAfterShow(e) {'+
'      console.log(`${this.$parent.getId()}:pageAfterShow`);'+
'    },'+
''+
'    /***'+
'     * 页面暂停之前'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageBeforePause(e) {'+
'      console.log(`${this.$parent.getId()}:pageBeforePause`);'+
'    },'+
''+
'    /***'+
'     * 页面暂停之后'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageAfterPause(e) {'+
'      console.log(`${this.$parent.getId()}:pageAfterPause`);'+
'    },'+
''+
'    /***'+
'     * 页面恢复之前'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageBeforeRestore(e) {'+
'      console.log(`${this.$parent.getId()}:pageBeforeRestore`);'+
'    },'+
''+
'    /***'+
'     * 页面恢复'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageRestore(e) {'+
'      console.log(`${this.$parent.getId()}:pageRestore`);'+
'    },'+
''+
'    /***'+
'     * 页面恢复之后'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageAfterRestore(e) {'+
'      console.log(`${this.$parent.getId()}:pageAfterRestore`);'+
'    },'+
''+
'    /***'+
'     * 页面DOM销毁之前'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e'+
'     */'+
'    pageBeforeDestroy(e) {'+
'      console.log(`${this.$parent.getId()}:pageBeforeDestroy`);'+
'    },'+
''+
'    /***'+
'     * pageResult'+
'     * @callback'+
'     * @override'+
'     * @param {Object} e - jQuery的event'+
'     * @param {string} resultCode - 返回的code'+
'     * @param {Object} bundle - 返回的参数'+
'     */'+
'    pageResult(e, resultCode, bundle) {'+
'      console.log(`${this.$parent.getId()}:pageResult`);'+
'    },'+
''+
'    /***'+
'     * 如果添加了ct-data-intentfilter-action属性，满足条件后触发'+
'     * @callback'+
'     * @override'+
'     * @param {Object} bundle'+
'     * @param {Object} functions'+
'     */'+
'    pageReceiver(bundle, functions) {'+
'      console.log(`${this.$parent.getId()}:pageReceiver`);'+
'    }'+
'  }'+
'};';


for (let i = 0; i < paths.length; i++) {
  const tPath = paths[i];
  fs.readdir(tPath, (err, files) => {
    for (let j = 0; j < files.length; j++) {
      const fileName = files[j].substring(0, files[j].lastIndexOf('.'));

      fs.writeFile(`${tPath}\\${fileName}.vue`, template({title: fileName, info: fileName, file: fileName}), (err) => {
      });


      fs.readFile(`${tPath}\\${fileName}.js`,(err,data) => {
        if(err) return false;
        const srcContent = `${data}\r\n\r\n\r\n\r\n${vueContent}`;
        fs.writeFile(`${tPath}\\${fileName}.js`,srcContent,(err) => {

        })
      });


    }
  });
}