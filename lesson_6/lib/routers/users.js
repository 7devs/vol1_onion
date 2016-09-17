var router = require('express').Router();
    usersModel = require('../models/users');

router.route('/')
    .get(function(req,res,next){
        res.status(200).send(usersModel)
    });

router.route('/:id')
    .get(function(req,res,next){
        var id = parseInt(req.params.id) - 1;
            users = usersModel[id];
        if(users){
            res.status(200).send(users['firstName'] + ' ' + users['lastName']);
        }else{
            res.status(404).send('Not Found');
        }
    });

router.route('/:id')
    .put(function(req,res,next){
        var id = parseInt(req.params.id) - 1;
        users = usersModel[id];
        x = req.body.age;
        users.age = x;
        if(Math.round(x)===parseInt(x) && x>0){
            res.status(200).send(users);
        }else{
            res.status(404).send('Not Found');
        }
    });

router.route('/count/:sex')
    .get(function(req,res,next){
        var users = 
    })

module.exports = router;
