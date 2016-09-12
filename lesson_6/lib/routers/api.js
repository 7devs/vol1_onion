var router = require('express').Router()
    userModel = require('../models/user.js');

router.route('/')
    .get(function(req,res,next){
        res.status(200).send({
            msg: 'api is OK'
        })
    });

router.route('/user/:key')
    .get(function(req,res,next){
        var key = req.params.key;
        if(userModel[key]){
            res.status(200).send(userModel[key]);
        }else{
            res.status(404).send('数据不存在');
        }
    })

router.route('/user/:name')
    .get(function(req,res,next){

    })
module.exports = router;
