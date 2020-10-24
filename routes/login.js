const express = require('express')
const router = express.Router()
const db = require('../db')
router.post('/',async (req,res,next) => {
  // req.body
  console.log(req.body)
  const {status,msg,phone,email,token,avatar} = await db.user.login(req.body.name,req.body.password)
  res.json({
    status,
    msg,
    phone,
    email,
    token,
    avatar
  })
})

module.exports = router