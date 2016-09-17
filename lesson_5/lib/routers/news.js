var router = require('express').Router();
    newsModel = require('../models/news');

router.route('/')
    .get(function(req,res,next){
        res.status(200).send(newsModel)
    });

router.route('/:a')
    .get(function(req,res,next){
        var y = parseInt(req.params.a) - 1;
            news = newsModel[y];
        if(news){
            res.status(200).send(news);
        }else{
            res.status(404).send('Not Found');
        }
    });

router.route('/:id')
    .delete(function(req,res,next){
        var id = parseInt(req.params.id) - 1;
        news = newsModel[id];
        if(news){
            newsModel.splice(id,1);
            console.log(newsModel);
            res.status(200).end();
        }else{
            res.status(404).send('Err');
        }
    });


module.exports = router;
