var express = require('express');
var router = express.Router();

const db = require('../db')

router.post('/',(req,res)=>{
  db.user.find(req.body)
  .then((data)=>{
    res.json(data)
  })
})

module.exports = router