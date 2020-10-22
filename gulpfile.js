//初始化项目

const { task } = require("gulp");
const { MongoClient } = require('mongodb')

task('default',()=>{
  //初始化创建数据库和集合
  const url = 'mongodb://127.0.0.1:27017/'
  return MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true},(err,db)=>{
    if(err){
      console.log(err)
    }
    const dbase = db.db('user')
    dbase.createCollection('count',(err,res)=>{
      if(err){
        console.log(err)
      }
      db.close
    })
  })
})