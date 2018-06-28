const express = require('express')
const router = express.Router({mergeParams: true})
// const mongoose = require('mongoose')
const Manga = require('../db/schema')
 
/*GET ALL THE PICS*/
router.get('/', function (req, res,next){
    Manga.find(function(err, products) {
        if (err) return next (err)
        res.json(products)
    })
})

/*GET SINGLE PIC*/
router.get('/:id', function (req, res,next){
    Manga.findById (req.params.id, function(err, post) {
        if (err) return next (err)
        res.json(post)
    })
})
 
/*SAVE PIC*/
router.post('/', function (req, res,next){
    Manga.create(req.body, function(err, products) {
        if (err) return next (err)
        res.json(post)
    })
})
 
/*UPDATE PIC*/
router.put('/:id', function (req, res, next){
    Manga.findByIdAndUpdate (req.params.id, req.body, function (err, post){
        if (err) return next (err);
        res.json(post)
    })
})

 /*DELETE PIC*/
router.delete('/:id', function (req, res, next){
    Manga.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) return next (err);
        res.json(post)
    })
})

module.exports = router
