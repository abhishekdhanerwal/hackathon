const express = require('express');
const dashboardRouter = express.Router();
const request =  require("request");


const httpRequest = function(_url, _headers, _req, isIllustration) {
  return new Promise(function(resolve, reject){
      let reqObjects = null;
      if(_headers){
      }else {
          reqObjects = {
              url:_url,
              headers : {
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(_req)
          }
      }
      request.post(reqObjects, function (err, response, body) {
          if(err)
              reject(err);
          else {
              resolve(body);
          }
      })
  });
}


function router() {
  dashboardRouter.route('/')
    .get((req, res) => {
      res.render();
    });

  dashboardRouter.route('/single')
    .post(async(req, res) => {
         res.status(400).send({ message: 'Wrong username or password' });
    });

  dashboardRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.send(`hello single book ${id}`);
    });

  return dashboardRouter;
}
module.exports = router;