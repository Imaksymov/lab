
let URL1 = "https://api.openweathermap.org/data/2.5/weather?q=Kyiv,%20UA&APPID=6ed55aaa6af55f24b71d529588503993"

const text0 = document.getElementById("place10")
const text1 = document.getElementById("place11")
const text2 = document.getElementById("place12")
const text3 = document.getElementById("place13")
const text4 = document.getElementById("place14")

let res1

function minaty(){
    fetch(URL1)
        .then(response=> response.json())
        .then(r=>{
        res1 = r; 
        vstavka1(res1)
        
    })

    .catch(err=>console.log(err))

}
const vstavka1 = (response) =>{
    text0.textContent =`${Math.round(res1.main.temp-272.15)}°`;
    text1.textContent =`${Math.round(res1.main.temp_min-272.15)}°`;
    text2.textContent =`${Math.round(res1.main.temp_max-272.15)}°`;
    text3.textContent =`${Math.round(res1.main.feels_like-272.15)}°`;
    text4.textContent =`${res1.weather[0].description}`;

}

minaty()

const btnoform = document.querySelector('.knop');
btnoform.addEventListener('click', function () {

    const nom =document.querySelector('.phone').value
    URL1 = "https://api.openweathermap.org/data/2.5/weather?q="+nom+"&APPID=6ed55aaa6af55f24b71d529588503993"
    console.log(URL1)
    minaty()
 }) 

let res2;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json =>{ 
    res2=json;
    vstavka2(res2);

    })



    const place02 = document.getElementById("place20")
    const place12 = document.getElementById("place21")
    const place22 = document.getElementById("place22")

    const text02 = document.getElementById("text0")
    const text12 = document.getElementById("text1")
    const text22 = document.getElementById("text2")


const vstavka2 = (response) =>{

        place02.textContent =`${res2[0].title}`;
        place12.textContent =`${res2[1].title}`;
        place22.textContent =`${res2[2].title}`;

        text02.textContent =`${res2[0].body}`;
        text12.textContent =`${res2[1].body}`;
        text22.textContent =`${res2[2].body}`;
    
    }

let kudavst = document.querySelector('.taktak')
const URL3= "file.json"
let res3
let textVstfin=""
fetch(URL3)
    .then(res=> res.json())
    .then(r5=>{
        res3 = r5; 
        vstavka3(res3)
        
    })

    .catch(err=>console.log(err))

const vstavka3 = (response) =>{
    for (let i=0;i<3;i++){
        const textVstpoch = `<div id="flex${i}"><div>Name: ${res3[i].name} </div>
         <div>Price: ${res3[i].prise}</div>
         <div>Time:  ${res3[i].time}</div>
         <br> <div id="back${i}"></div>
         </div>`
         textVstfin+=textVstpoch
    }
    kudavst.innerHTML=textVstfin
}
