"use strict"

var express = require('express')
var app = express()

app.listen(3000)
console.log('Node.js Express server is running on part 3000...')

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response)
{
    response.json
    (
        {"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":278.05,"feels_like":278.05,"temp_min":276.45,"temp_max":279.76,"pressure":1032,"humidity":66},"visibility":10000,"wind":{"speed":0.45,"deg":113,"gust":0.89},"clouds":{"all":59},"dt":1642789417,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642779731,"sunset":1642813576},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200}
    )
}