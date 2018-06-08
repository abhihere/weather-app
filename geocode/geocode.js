const request = require('request');

var geofun= (add, callback)=>{

  var encodedadd= encodeURIComponent(add);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedadd}`,
    json:true
  }, (error, response, body) => {
    console.log(body.status);
    if(error)
    {
      callback("Unable to connect to google servers");
    }
    else if(body.status === 'ZERO_RESULTS')
    {
      callback("Cannot find the address specified");
    }
    else if(body.status === 'OVER_QUERY_LIMIT')
    {
      callback("Accessed so many times");
    }
    else if(body.status === 'OK')
    {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
    else {
      {
        console.log("ooops..something went wrong");
      }
    }

  });
}

module.exports={
  geofun
};
