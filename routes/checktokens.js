const express = require('express')
const router = express.Router()
const {checkToken} = require('../utils/token')
router.get('/checktoken',async (req,res,next) => {
    // get请求发送过的      req.query  {token}
    const {status,msg,data} = await checkToken(req.query.token)
    res.json({
        status,
        msg,
        data
    })
})

module.exports = router 