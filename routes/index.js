'use strict';

const path = require("path"),
      componentRoute = '../public/app/',
      publicApp = 'index.html';

module.exports = (app) => {
   app.get('/',(req,res)=>{
       res.sendFile(path.join(__dirname, componentRoute, publicApp));
   });
}
