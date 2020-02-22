const express = require('express');
const path =  require('path');
const bodyParser = require('body-parser');
const port = 3000;
const compression =  require('compression');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler =  webpack(webpackConfig);

const app = express();


app.use(bodyParser.json({limit: '6mb'}));
app.use(compression());


app.use(webpackDevMiddleware(compiler, {
    noInfo:true,
    publicPath: webpackConfig.output.publicPath,
  }));

app.use(require('webpack-hot-middleware')(compiler));


app.listen(port,function(){
    console.log(`App is litening on port ${port}`);
});
