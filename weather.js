let inp=document.getElementById("inp1")
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let API_KEY="YOUR_API_KEY" // paste your api key here
    let limit=5
    let div=document.querySelector("#list")
    console.log(inp.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&limit=${limit}&appid=${API_KEY}&units=metric`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        console.log(data.sys)
        div.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
        <h3>Temparature: ${data.main.temp} &deg;C</h3>
        <h3>Weather: ${data.weather[0].description}</h3>
        <h3>Wind Speed: ${data.wind.speed}</h3>`
    })
    .catch(()=>{
        div.innerHTML=`<h3>City Not Found</h3>`
    })
    inp.value=""
})