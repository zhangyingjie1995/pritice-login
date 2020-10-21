var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017/'

router.post('/',(req,res)=>{
  const {name,mail,password} = req.body
  res.setHeader('content-type','application/json')
  MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true},(err,db) => {
    if(err){
      console.log(err)
    }
    const dbase = db.db('test')
    //查询数据
    dbase.collection('count').find({name,mail,password}).toArray((err,result)=>{
      if(err){
        console.log(err)
      }
      if(result.length <= 0){
        //不存在重复的数据，插入到数据表
        dbase.collection('count').insertOne({name,mail,password},(err,res)=>{
          if(err){
            console.log(err)
          }
          console.log('done')
          res.send({
            state:1,
            msg:'注册成功'
          })
          db.close()
        })
      }else{
        res.send({
          state:0,
          msg:'用户已经存在'
        })
        db.close()
      }
    })
  })
})

module.exports = router