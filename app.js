
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
.options(
  {
    a: {
      demand: true,
      alias: 'address',
      description: 'address to fetch weather from',
      string: true
    }
  }
)
.help()
.alias('help','h')
.argv;

geocode.geofun(argv.a, (errormsg , result)=> {
  if(errormsg)
  {
    console.log(errormsg);
  }
  else {
    console.log(result.address);
    weather.getweather(result.latitude, result.longitude, (errormsg, result)=> {
      if(errormsg)
      {
        console.log(errormsg);
      }
      else {
        console.log(result);
      }
    });
  }
});
