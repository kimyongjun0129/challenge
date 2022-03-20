const API_KEY = "beb7a188a0aca37167ac6a4c4589634b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather =document.querySelector("#weather span:first-child");
            const city =document.querySelector("#weather span:last-child"); 
            city.innerText = data.name;
           weather.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);