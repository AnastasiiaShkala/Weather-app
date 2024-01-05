const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "dbad0cce30d28fc7caa63b09f38e3141"
}
const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e){
    if (e.key === "Enter") {
        getInfo(input.value);
    }
   
}
async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}
function displayResult(result){
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°C</span>`;

    let feelslike = document.querySelector('#feelslike');
    feelslike.innerHTML = `${Math.round(result.main.feels_like)}<span>°C</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°C</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°C</span>`;
   
}
function getOurDate(){
    const d = new Date();

    const year = new Date();
    year.getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];

    const number = new Date();
    number.getDate();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];

    let date = document.querySelector('#date');
    date.textContent = `${days[d.getDay()]}` + ", " +`${number.getDate()}` + " " + `${month}` + ", " +`${year.getFullYear()}`;
   

}