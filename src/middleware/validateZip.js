const express = require('express')



function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }







function validateZip(req, res, next) {
  const zip = req.params.zip
 
 if(zip.length !== 5 || !containsOnlyNumbers(zip)){
    next(`Zip (${zip}) is invalid!`)
  }else{
    next()
  }

  
}

module.exports = {validateZip}
