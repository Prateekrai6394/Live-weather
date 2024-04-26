let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "ff5f329e41441aa1f61d1a72bf1c37ed"

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`)
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);



   if(jsonData.cod==400){
    alert("please enter your location")
    image.src= ".vscode/error1.png"
    city.innerHTML=""
    type.innerHTML=""
    temp.innerHTML=""
   }

   if(jsonData.cod==404){
    alert("please enter write location")
    image.src= ".vscode/error2.png"
    city.innerHTML="search"
    type.innerHTML=""
    temp.innerHTML=""
   }

   
    city.innerHTML=search;
    type.innerHTML=jsonData.weather[0].main;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";

    if(type.innerHTML== "Clouds"){
        image.src= ".vscode/74fc346aeef86e573869fa50546d715b.jpg"
    }else if(type.innerHTML== "Clear"){
        image.src= ".vscode/Untitled.png"
    }
    else if(type.innerHTML== "Rain"){
        image.src= ".vscode/Untitled.jpg"
    }
    else if(type.innerHTML== "Snow"){
        image.src= ".vscode/snow.jpg"
    }
    else if(type.innerHTML== "Haze"){
        image.src= ".vscode/haze.png"
    }
    else if(type.innerHTML== "Storm"){
        image.src= ".vscode/storm.jpg"
    }
    else if(type.innerHTML== "Smoke"){
        image.src= ".vscode/smoke.jpg"
    }
    input.value=""
}

function myFun(){
    search=input.value;
    data(search)
}

