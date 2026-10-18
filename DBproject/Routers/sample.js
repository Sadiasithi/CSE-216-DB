const express = require('express');

const router=express.Router();

router.get('/sample', async(req,res)=>{
    res.render('sample');
});

module.exports = router;