const express = require('express')
const router = express.Router()
const db = require('../db')
router.post('/',async (req,res,next) => {
  // req.body
  console.log(req.body.name)
  const {state,msg} = await db.user.login(req.body.name,req.body.password)
  console.log({state,msg})
  res.json({
    state,
    msg
  })
})

module.exports = router