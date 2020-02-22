const express = require('express');
const dashboardRouter = express.Router();
const request =  require("request");

const UserModel = require('./models/events.model');

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
  dashboardRouter.route('/counts')
    .get(async (req, res) => {
      const list = await UserModel.find().exec();
      console.log(list);
      res.status(200).json({
        total:12000,
        pass:2300,
        failed:200,
        pending:230
      });
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