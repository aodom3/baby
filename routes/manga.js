const express = require('express');
const router = express.Router({mergeParams: true})
// const mongoose = require('mongoose')
const Manga = require('../db/schema')
 
/*GET ALL THE MANGAS*/
router.get('/')

/*GET SINGLE MANGA*/
router.get()
 
/*SAVE MANGA*/
router.post()
 
/*UPDATE MANGA*/
router.put()

 /*DELETE MANGA*/
router.delete()

module.exports = router;
