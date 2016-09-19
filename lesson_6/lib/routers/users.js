var router = require('express').Router();
    usersModel = require('../models/users');

router.route('/')
    .get(function(req,res,next){
        res.status(200).send(usersModel)
    });



router.route('/count/:sex')
    .get(function(req,res,next){
        var count = 0;
        for(var i = 0;i < usersModel.length;i++){
            if(usersModel[i].sex === req.params.sex){
                count++
            };
        };
        if(req.params.sex === "male" || req.params.sex === "female"){
            res.status(200).send((count++).toString());
        }else{
            res.status(404).send('Not Found');
        };
    });

router.route('/ageAvg')
    .get(function(req,res,next){
        var userage = new Array();
        for(var i = 0;i < usersModel.length;i++){
            userage.push(usersModel[i].age)
        };
        userage.reduce(function(x,y){
            return sum = x + y;
        });
        var avg = parseInt(sum) / parseInt(usersModel.length);
        res.status(200).send(avg.toString());
    });

router.route('/search')
    .get(function(req,res,next){
        var usercompany = new Array();
        for(var i = 0;i < usersModel.length;i++){
            if(usersModel[i].company.toLowerCase().indexOf(req.query.company.toLowerCase()) != -1){
                usercompany.push(usersModel[i]);
            };
        };
        if(usercompany.length > 0){
            res.status(200).send(usercompany);
        }else{
            res.status(404).send('Not Found');
        };
    });

router.route('/:id')
    .get(function(req,res,next){
        var id = parseInt(req.params.id) - 1;
            users = usersModel[id];
        if(users){
            res.status(200).send(users['firstName'] + ' ' + users['lastName']);
        }else{
            res.status(404).send('Not Found');
        };
    });

router.route('/:id')
    .put(function(req,res,next){
        var id = parseInt(req.params.id) - 1;
        users = usersModel[id];
        age = req.body.age;
        users.age = age;
        if(Math.round(age) === parseInt(age) && x>0){
            res.status(200).send(users);
        }else{
            res.status(404).send('Not Found');
        };
    });

module.exports = router;
