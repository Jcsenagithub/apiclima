let k = 273.15;

let p = 13550 /*kg / m3(densidad del mercurio)*/
let g = 9.81 /*m / s2*/
let h = 0.76 /*m(altura de la columna de mercurio)*/
let saturacion=4.8;

function consultaClima() {
    let ciudad = document.getElementById("ciudad").value;

    const options = {
        method: "GET"
    };

    // Petición HTTP
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
        .then(response => { return response.text() })
        .then(data => {
            //convertimos formato json cadena en objeto de javascript
            let infoClima = JSON.parse(data);
            document.getElementById("resultado").innerHTML = (infoClima.main.temp - k).toFixed(2) + ("°C");
            document.getElementById("resultado1").innerHTML = infoClima.main.pressure + ("HR");
            document.getElementById("resultado2").innerHTML = infoClima.main.pressure + (" /Pa");
            document.getElementById("resultado3").innerHTML = infoClima.main.humidity + (" /M3");
            document.getElementById("resultado4").innerHTML = (infoClima.main.feels_like-k).toFixed (1) + (" /°C");
            document.getElementById("resultado5").innerHTML = infoClima.main.temp_min + (" /°C");
        }).catch((err) => { console.log("Info error: ", err); })
}