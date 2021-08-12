const fs = require('fs');
const p = require('path');

console.log("preload js loaded")

window.readMarkdownFile = function (path) {
  if (path.match(/\.md$/i)) {
    return fs.readFileSync(path, {
      encoding: "utf-8"
    });
  } else {
    return "";
  }
}

window.writeMarkdownFile = function (path, content) {
  if (fs.existsSync(path)) {
    if (path.match(/\.md$/i)) {
      fs.writeFileSync(path, content)
      return true;
    } else {
      return false;
    }
  } else {
    fs.writeFileSync(path, content)
    return true;
  }
}

window.getFileDirectory = function (path) {
  return p.dirname(path);
}