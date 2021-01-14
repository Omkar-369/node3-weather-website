const request=require('request')

const forecast=(latitude,longitude,callback)=>{

 const url='http://api.weatherapi.com/v1/forecast.json?key=f0ef656701304ea8b66123630200912&q='+ latitude +',' + longitude
 
 request({url:url,json:true},(error,response)=>{
 
  if(error){
   callback('Network issue , failed to connect',undefined)
   }
   else if(response.body.error){
  callback(response.body.error.message,undefined)
   }
   else{

    const temperature=response.body.current.temp_f
 
   const condition=response.body.forecast.forecastday[0].day.condition.text
 
   const daily_rain=response.body.forecast.forecastday[0].day.daily_chance_of_rain


   const weather_info=condition + '.It is currently '+ temperature + ' degress out .' + 'There is a '+ daily_rain + '% chance of daily rain.'

   callback(undefined,weather_info)
   }
 })
 }

 module.exports=forecast