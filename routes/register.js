const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
mongoose.connect('mongodb:127.0.0.1:27017/test')
router.post('/',(req,res) => {
  //注册
  //获取注册表单的数据
  const {name,password,mail,file} = req.body
  //验证邮箱和账户名称
  
  
})

module.exports = router