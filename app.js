const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 9999;
var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

hbs.registerHelper('year', ()=>{
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('welcome.hbs', {
    title: 'welcome Page',

    welcomeMessage: 'hellow thanks fpr visiting our website'
  });
});

app.get('/public/test.html', (req, res) => {

});
app.get('/bad', (req,res)=>{
  res.send({
    errorMessage: 'we couldnot find your request',
    Thnaks: 'please visit us again'
  });
});

app.listen(port);
