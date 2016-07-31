var clone = require('git-clone');
var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;
var rimraf = require('rimraf');

var reduxTmpPath = path.resolve(__dirname, './../../goodsense_modules/tmpgsredux');
var reduxSrcTmpPath = path.resolve(__dirname, './../../goodsense_modules/tmpgsredux/gsredux');
var modulesPath = path.resolve(__dirname, './../../goodsense_modules');
var reduxModulesPath = path.resolve(__dirname, './../../goodsense_modules/gsredux');

function clean(cleanPath, cb) {
  rimraf(cleanPath, cb);
}

function copySource(srcPath, targetPath, cb) {
  ncp.limit = 16;
   
  ncp(srcPath, targetPath, function (err) {
    if (err) {
     return console.error(err);
    }
    if(cb) cb();
  });
}

function cloneRedux(targetPath, cb) {
  const repo = process.env.MODULES_REDUX_REPO || 'git@github.com:goodsensejp/redux-modules';

  // Go fetch redux from github
  clone(repo, targetPath, function (err) {
    if(err) {
      console.error(err);
    } else if(cb) {
      cb();
    }
  });
}

function createDirectory(dir, cb) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  if(cb) cb();
}

clean(modulesPath, function() {
  createDirectory(modulesPath, function() {
    cloneRedux(reduxTmpPath, function() {
      copySource(reduxSrcTmpPath, reduxModulesPath, function() {
        clean(reduxTmpPath, function() {
          console.log("Goodsense Redux Modules installed successfully!");
        })
      })
    })
  });
});
