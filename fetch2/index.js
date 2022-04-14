//const url = "https://api.openweathermap.org/data/2.5/weather?q=nasik&appid=df284e0668d9dfb0fee4012722d82483";
//df284e0668d9dfb0fee4012722d82483
//api key
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// const container = document.getElementById("container");

//let res;
//let x = fetch(url);
//console.log("x", x);

// fetch(url).then(function (res) {
//     //console.log("res", res);
//     //res local
//     return res.json();
// })
//     .then(function (res) {
//         console.log("res", res.main.temp);
//         //appendData(res.data);
//         //appendData(res);
//     })
//     .catch(function (err) {
//         console.log("err", err);
//     });





function getData() {

    let city = document.getElementById("city").value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df284e0668d9dfb0fee4012722d82483`;

    fetch(url).then(function (res) {
        //console.log("res", res);
        //res local
        return res.json();
    })
        .then(function (res) {
            console.log("res", res);
            //append(res.data);
            append(res);
        })
        .catch(function (err) {
            console.log("err", err);
        });




}





function getDataLocation(lat, lon) {

    let city = document.getElementById("city").value;


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=df284e0668d9dfb0fee4012722d82483`;

    fetch(url).then(function (res) {
        //console.log("res", res);
        //res local
        return res.json();
    })
        .then(function (res) {
            console.log("res", res);
            //append(res.data);
            append(res);
        })
        .catch(function (err) {
            console.log("err", err);
        });




}




//append(res);


function append(data) {

    let conatiner = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    //src = https://maps.google.com/maps?q=nashik&t=&z=13&ie=UTF8&iwloc=&output=embed
    conatiner.innerHTML = null;


    let city = document.createElement("p");
    city.innerText = `City: ${data.name}`;

    let min = document.createElement("p");
    min.innerText = `Min Temp: ${data.main.temp_min}`;

    let max = document.createElement("p");
    max.innerText = `Max Temp: ${data.main.temp_max}`;

    let curr = document.createElement("p");
    curr.innerText = `Current Temp: ${data.main.temp}`;

    let humi = document.createElement("p");
    humi.innerText = `Humidity: ${data.main.humidity}`;


    conatiner.append(city, min, max, curr, humi);

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}




function getWeather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(pos) {
        let crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`)


        getDataLocation(crd.latitude, crd.longitude)
    }

}






//apending
//appendData(res);

// function appendData(data) {

//     data.forEach(function (el) {
//         let div = document.createElement("div")

//         let Title = document.createElement("p");
//         Title.innerText = el.Title;

//         let Year = document.createElement("p");
//         Year.innerText = el.Year;

//         let Rated = document.createElement("img")
//         Rated.src = el.Rated;

//         let Runtime = document.createElement("p");
//         Runtime.innerText = el.Runtime;

//         let Genre = document.createElement("p");
//         Genre.innerText = el.Genre;



//         div.append(Title, Year, Rated, Runtime, Genre);

//         container.append(div);

//     });


//}