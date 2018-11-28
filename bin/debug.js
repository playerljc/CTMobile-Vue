const fs = require('fs');
const {spawn} = require('child_process');
const path = require('path');

console.log('hello debug');

const realPath = path.normalize(__dirname + '\\..');
const srcPath = `${realPath}\\src`;
const targetPaths = [
  `${realPath}\\demo\\src\\ctmobile-vue`,
  `${realPath}\\note\\src\\ctmobile-vue`
];

function initTargetDir(targetPath) {
  return new Promise((resolve, reject) => {
    fs.open(targetPath, 'r', (err, fd) => {
      if (err) {
        // 不存在,创建目录
        fs.mkdir(targetPath, {recursive: true}, (err) => {
          if (err) {
            reject(`创建${targetPaths}目录失败!`);
          } else {
            resolve(`创建${targetPaths}目录成功!`);
          }
        });
      } else {
        reject();
      }
    });
  });
}

function copy(targetPath) {
  let cmd, params;
  if (process.platform === 'win32') {
    cmd = 'xcopy';
    params = [srcPath, '/s', targetPath];
  } else {
    cmd = 'cp';
    params = ['-ri', srcPath, targetPath];
  }
  const install = spawn(cmd, params, {
    cwd: realPath,
    encoding: 'utf-8',
  });

  install.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  install.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  install.on('close', (code) => {
    console.log(`子进程退出码：${code}`);
    process.exit();
  });
}

let loop = true;
let index = 0;
while (loop && index < targetPaths.length) {
  const targetPath = targetPaths[index++];
  initTargetDir(targetPath).then((msg) => {
    console.log(msg);
    copy(targetPath);
  }).catch((msg) => {
    loop = false;
    console.log(msg);
  });
}



