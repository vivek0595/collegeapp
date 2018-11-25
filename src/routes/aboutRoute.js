const express = require('express');
const about = express.Router();

function router(nav){

    about.route('/')
    .get((req,res)=>{

    res.render('about',{nav})
});


return about   
};

module.exports=router
