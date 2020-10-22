const mongoose = require('mongoose')

const HOST = '127.0.0.1'
const DB_BASE = 'user'
const dburl = `mongodb:${HOST}:27017/${DB_BASE}`


mongoose.connect(dburl,{useNewUrlParser:true},(err)=>{
  if(err){
    console.log(err)
  }
  console.log('db con success')
})

const userSchema = new mongoose.Schema({
  name:String,
  password:String,
  mail:String,
})

const userModal = mongoose.model('user',userSchema)

module.exports = {
  user:{
    push:(data) => {
      return new Promise(async (resolve,reject) => {
        const userMd = new userModal(data)
        const result = await this.find()
        if(result.some((item => item.name === data.name))){
          resolve({
            state:0,
            msg:'用户已经存在，请重新输入'
          })
        }else{
          userMd.save()
          resolve({
            state:0,
            msg:'注册成功'
          })
        }
      })
    },
    find:() => {
      return new Promise((resolve,reject)=>{
        userModal.find({},(err,res) => {
          resolve(res)
        })
      })
    },
    login:(name,password) => {
      return new Promise( async (resolve,reject) => {
        const result = await this.find()
      })
    }
  }
}