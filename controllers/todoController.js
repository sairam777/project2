var bodyParser = require('body-parser');
var data = [{item: 'get milk'},{item:'walk dog'},{item:'innominds ltd '}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports= function(app){

app.get('/todo',function(req,res){
res.render('todo', {todos:data});
});

app.post('/todo',urlencodedParser,function(req,res){
console.log(req.body);
data.push(req.body);
res.json(data);
});

app.delete('/todo/:item',function(req,res){
   for (var i=0;i<data.length;i++){
      if(data[i].item.replace(/ /g, "") == req.params.item.replace(/ /g, "")){
          data.splice(i,1);
      }

   }
   console.log(data)
  // data=data.filter(function(todo){
  //   //console.log(todo);
  //   return todo.item.replace(/ /g, '-') !== req.params.item;
  // });
  //console.log(data);
res.json('');


});

};
