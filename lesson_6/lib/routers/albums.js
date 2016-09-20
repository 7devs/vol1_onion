var router = require('express').Router();
    albumsModle = require('../models/albums');

router.route('/')
    .get(function(req,res,next){
        res.status(200).send(albumsModle);
    });

router.route('/longerSong')
    .get(function(req,res,next){
        var album = new Array();
        for(var i = 0;i < albumsModle.length;i++){
            if(parseInt(albumsModle[i].length) > 180){
                album.push(albumsModle[i]);
            };
        };
        if(album){
            res.status(200).send(album);
        };
    });

router.route('/singer/:name')
    .get(function(req,res,next){
        var album = new Array();
        for(var i = 0;i < albumsModle.length;i++){
            if(req.params.name === albumsModle[i].singer){
                album.push(albumsModle[i]);
            };
        };
        if(album.length > 0){
            res.status(200).send(album);
        }else{
            res.status(404).send('Not Found');
        };
    });

router.route('/search')
    .get(function(req,res,next){
        var album = new Array();
        for(var i = 0;i < albumsModle.length;i++ ){
            if(req.query.type === albumsModle[i].type){
                album.push(albumsModle[i]);
            };
        };
        if(album.length > 0){
            res.status(200).send(album);
        }else{
            res.status(404).send('Not Found');
        };
    })

router.route('/:id')
    .get(function(req,res,next){
        var index = req.params.id - 1;
        song = albumsModle[index];
        if(song){
            res.status(200).send(song);
        }else{
            res.status(404).send('Not Found');
        };
    });

router.route('/:id')
    .put(function(req,res,nex){
        var index = parseInt(req.params.id) - 1;
        song = albumsModle[index];
        song.length = req.body.length;
        song.title = req.body.title;
        if(index >= 0 && index < albumsModle.length){
            res.status(200).send(song);
        }else{
            res.status(404).send('Not Found');
        };
    });






module.exports = router;
