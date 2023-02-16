const express = require("express");
const app = express();
const {validateZip} = require('./middleware/validateZip');
const getZoos = require('./utils/getZoos')







app.get("/zoos/all", (req, res, next) => {
  const title = req.query
  let names = getZoos()
  if(title.admin === 'true'){
    res.send(`All zoos: ${names.join('; ')}`)
  }else{
    res.send(`You do not have access to that route.`)
  }
});



app.get("/check/:zip",validateZip, (req, res, next) => {
 const zip = req.params.zip
 let names = getZoos(zip)
 if(names){
   res.send(`${zip} exists in our records.`)
 }else{
res.send(`${zip} does not exist in our records.`)
 }
});







app.get("/zoos/:zip",validateZip, (req, res, next) => {
const zip = req.params.zip
let names = getZoos(zip)
if(names.length < 1){
  res.send(`${zip} has no zoos.`)
}else{
  res.send(`${zip} zoos: ${names.join('; ')}`)
}
});











app.use((req, res, next) => {
    res.send(`That route could not be found!`)
  })


app.use((err,req,res,next) => {
    res.send(err)
})


 module.exports = app;