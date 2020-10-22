//! 封装下token的生成函数和验证函数
const fs = require("fs");
const path = require("path");
function pathHandler(url) {
  return path.join(__dirname, url);
}
const private_key = fs.readFileSync(pathHandler("../rsa/private_key.pem"));
const public_key = fs.readFileSync(pathHandler("../rsa/public_key.pem"));

const jwt = require("jsonwebtoken");

function createToken(username) {
  return jwt.sign(username,private_key); //生成token
}

function checkToken(token) {
  return new Promise((resovle, reject) => {
    jwt.verify(token, private_key, (err, data) => {
      if (err) {
        resovle({
            status: 0,
            msg: 'token验证失败'
        })
      }
      resovle({
        status: 1,
        msg: '验证成功',
        data
      });
    });
  });
}

module.exports = {
    createToken,checkToken
}