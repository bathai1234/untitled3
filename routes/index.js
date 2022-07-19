var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , name : 'ba thai'});
});

router.get('/new',function (req,res){
    var name = 'ba thai'
    var  tuoi = 20;
    var  mang =[1,2,2,1,12,4];
    var ten1=['thai','minh','tuyen'];
   res.render('new', {
       ten : name,
       year : tuoi,
       arr1 : mang,
       arr2 : ten1
   });
})



module.exports = router;
