var express = require('express');
var router = express.Router();

const db = require('../db')

router.post('/',(req,res)=>{
  console.log(req.body)
  db.user.push(req.body)
  .then((data)=>{
    console.log(data)
    res.json(data)
  })
})

module.exports = router