const express= require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")
const app= express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const items=["Buy Food","Cook food","Eat food"];
const workItems=[];
app.get("/", function (req, res){

  const day=date();

res.render("list", {ListTitle : day,  itemLists : items });

});


app.post("/", function (req, res){
 const item = req.body.newItem;
 if(req.body.list ==="Work"){
   workItems.push(item);
    res.redirect("/work");

 }
 else {
   items.push(item);
   res.redirect("/");
 }

})

app.get("/work",function(req, res){
res.render("list", {ListTitle: "Work List" , itemLists: workItems});

})


app.post("/work",function(req, res){

  const item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");

})

app.listen(3000, function(){
console.log("The server is running on port 3000");
});
