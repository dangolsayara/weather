var KEY='c877ccb1347640b7e6aa51af5c494da4'
var LOCATION='KATHMANDU'
var URL='http://api.openweathermap.org/data/2.5/weather?q='+LOCATION+' &appid='+KEY
var TO_DEGREE=273.15    
var locationOnDom=document.getElementById('location')
var temp = document.getElementById('temp')
var mood = document.getElementById('mood')
var desc =document.getElementById('desc')
var icon = document.getElementById('icon')

//fetch data
fetch(URL)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    locationOnDom.innerHTML = data.name
    var num = Math.round(data.main.temp - TO_DEGREE)  
    temp.innerHTML =num +'<sup>o</sup>'
   mood.innerHTML = data.weather[0].main
   desc.innerHTML = '"'+data.weather[0].description+'"'
   var currentIcon = data.weather[0].icon
    icon.src='http://openweathermap.org/img/wn/'+currentIcon+'@2x.png';


    //  if(data.weather[0].main===rain){
    //      wrapper.style.backgroundImage="rain.gif"

    //  }
    // if (num>0 && num<20) {
    //     location.style.color="#5e918ff"   
    //  }
    //  else if(num>20 && num<35){
    //     location.style.color="#e5f01d"
    //  }
    //  else(num>35) 
    //     location.style.color="#c91006"

});
