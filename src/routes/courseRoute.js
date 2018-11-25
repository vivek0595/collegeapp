const express = require('express');
const cour = express.Router();

function router(nav,course){

    cour.route('/')
    .get((req,res)=>{

    res.render('courses',{nav,course})
});

cour.route('/:id')

    .get((req,res) =>{
        const id=req.params.id;
        res.render('course',{course,
        nav,
        course:course[id]});
    });

return cour
};

module.exports=router
