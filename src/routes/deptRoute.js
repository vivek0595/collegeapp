const express = require('express');
const department = express.Router();

function router(nav,course){


    department.route('/')
    .get((req,res)=>{

    res.render('departments',{nav,course})
});

department.route('/:id')

    .get((req,res) =>{
        const id=req.params.id;
        res.render('department',{course,
        nav,
        course:course[id]});
    });

return department
};

module.exports=router
