var router = require('express').Router();
    userModel = require('../models/user.js');

router.route('/')
    .get(function(req,res,next){
        res.status(200).send({
            msg: 'api is OK.'
        })
    });

router.route('/user')
    .get(function(req,res,next){
        res.status(200).send(userModel);
    });

router.route('/user/:key')
    .get(function(req,res,next){
        var x = req.params.key;
        if(userModel[x]){
            res.status(200).send(userModel[x]);
        }else{
            res.status(404).send('数据不存在');
        }
    });


module.exports = router;
