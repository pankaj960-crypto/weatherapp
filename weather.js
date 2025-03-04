const inputBox = document.getElementById('input');
const btn = document.getElementById('btn');
const weatherimg = document.querySelector('.weatherimg');
const tempreture = document.querySelector('.tempreture');
const descreption = document.getElementById('pra');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('speed');

 async function checkweather (city){
  const api_Key = "ae899366df9a56fc6cf702b19790db80";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;
   const weather = await fetch(`${url}`).then(response => response.json());
   
   if(weather.cod === `404`){
    alert("No weather found you entered wrong city");
   return;
   }

   tempreture.innerHTML = `${Math.round(weather.main.temp - 271.15)}°C`;
   descreption.innerHTML = `${weather.weather[0].description}`;
   humidity.innerHTML = `${weather.main.humidity}%`;
   windspeed.innerHTML = `${weather.wind.speed}km/h`;

   switch(weather.weather[0].main){
    case 'Clouds':
        weatherimg.src = "weather02-1024.webp";
        break;
    case 'Borken Clouds':
        weatherimg.src = "full_cloudy-512.webp";
        break;
    case 'Clear':
        weatherimg.src = "clear.webp";
        break;
    case 'Rain':
        weatherimg.src = "rain2.webp";
        break;
    case 'Snow':
        weatherimg.src = "thunder.webp";
        break;
   }
   console.log(weather);
}


btn.addEventListener('click', ()=> {
    checkweather(input.value);
});