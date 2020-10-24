const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
// 使用工具来接收二进制数据  multer

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/upload"));
  }, // 你要将前端上传过来的文件保存在当前be项目中的哪里
  filename: function (req, file, cb) {
    const arr = file.originalname.split(".");
    const filename = file.fieldname + "-" + Date.now() + "." + arr[arr.length - 1];
    req.filename = "http://localhost:3000/upload/" + filename;
    cb(null, filename);
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.single('file'), (req, res, next) => {
  // 接收前端发送来的二进制数据
  console.log(path.join(__dirname, "../public/upload"))
  upload.single('file')
  console.log(req.file)
  req.body.filename = req.filename;
  console.log(req.body)
  res.send("文件上传成功");
});

module.exports = router;