const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {

  let ip = req.headers['host'].slice(0, req.headers['host'].indexOf(':'))
  let os = req.headers['user-agent'].slice(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')'))
  let lang = req.headers['accept-language'].split(',')[0]
  
  res.send({
    ipaddress: ip,
    language: lang,
    software: os
  })
})

module.exports = router
