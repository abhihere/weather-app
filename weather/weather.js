const request = require('request');

var getweather=(lat, lng , callback)=> {
  request({
    url: `https://api.darksky.net/forecast/df107844457dcf91a894463f355ea9e9/${lat},${lng}`,
    json: true
  },(error, response, body)=> {
    if(error)
    {
      callback("unable to connect to forecast.io server");
    }
    else if(body.code === 400)
    {
      callback("something went wrong");
    }
    else {
      var temp =body.currently.temperature;
      callback(undefined, `It is ${temp} here but it feels like ${temp+6}`);
    }
  });
};

module.exports={
  getweather
};
