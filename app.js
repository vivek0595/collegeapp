const express = require('express');
const app = new express;
const path = require('path');

nav = [ {link:'/',title:'Home'},
        {link:'/courses',title:'Courses'},
        {link:'/dept',title:'Department'},
        {link:'/about',title:'About'}];

course = [{link:'/cse',title:'Computer Science'},
          {link:'/ec',title:'Electronics'},
          {link:'/ee',title:'Electrical'},
          {link:'/mec',title:'Mechanical'}];

app.use(express.static(path.join(__dirname,'/public')));

const aboutRoute = require('./src/routes/aboutRoute')(nav);
app.use('/about',aboutRoute);

const courseRoute = require('./src/routes/courseRoute')(nav,course);
app.use('/courses',courseRoute);

const deptRoute = require('./src/routes/deptRoute')(nav,course);
app.use('/dept',deptRoute)

app.get('/',function(req,res){
    res.render('index',{nav,course});
});

app.set('views','./src/views');
app.set('view engine','ejs');
app.listen(3000,function(){console.log('Listening on port 3000...')});