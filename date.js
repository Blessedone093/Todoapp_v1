


module.exports=function(){
const today=new Date();
const options= {
  weekday:"long",
  day:"numeric",
  month:"long"
};
return  today.toLocaleDateString("en-us", options);

};
