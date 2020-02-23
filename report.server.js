const express = require('express');
const reportRouter = express.Router();
const request =  require("request");

const ReportModel = require('./models/tasks.models');
// const CpuModel = require('./models/cpu.model');

var os = require('os');

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
  reportRouter.route('/getReports')
    .get(async (req, res) => {
      const list = await ReportModel.find().exec();
      console.log(list);
      res.status(200).json(list);
    });

  reportRouter.route('/getTaskGraphData')
    .get(async (req, res) => {
      const list = await ReportModel.find().exec();
      console.log(list);
      res.status(200).json(list);
    });

    reportRouter.route('/cpu')
    .get(async (req, res) => {
      const Cpu = new CpuModel({
        timeStamp:new Date().getTime(),
        total: os.totalmem(),
        free: os.freemem()
      });
      await Cpu.save();
      const list = await CpuModel.find().exec();
      res.status(200).json(list);
    });

  reportRouter.route('/single')
    .post(async(req, res) => {
         res.status(400).send({ message: 'Wrong username or password' });
    });

  reportRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.send(`hello single book ${id}`);
    });

  return reportRouter;
}
module.exports = router;