// http://api.weatherapi.com/v1/current.json?key=59a22ba866744356b4a65322222912&q=Hyderabad&aqi=no

// let target = '';

const temperature = document.querySelector(".temp");
const time_location = document.querySelector(".time_location p");
const time_date = document.querySelector(".time_location span");
//const dateTime = document.querySelector(".condition");
const but  = document.querySelector("button");
const condition = document.querySelector(".condition");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');
console.log(but);

form.addEventListener('submit',searchforTemp)


const fetchResult = async (targetLocation)=>{
let url = `http://api.weatherapi.com/v1/current.json?key=59a22ba866744356b4a65322222912&q=${targetLocation}&aqi=no`;
const res = await fetch(url);
const data =  await res.json();
const locationName = data.location.name;
const temp = data.current.temp_c;
const dattime = data.location.localtime;
const con= data.current.condition.text;
console.log('temp==>'+temp);
console.log('1',dattime);
console.log('2',locationName);
console.log('3',data);
updateTemp(temp,locationName,dattime,con);
}


function updateTemp(temp,locationName,dattime,con){

    let splitDate = dattime.split(' ')[0]
    let splitTime = dattime.split(' ')[1]
    let currentDay =  getDayName(new Date(splitDate).getDay())


    temperature.innerText = temp 
    time_location.innerText = locationName
    time_date.innerText = `${splitDate} ${currentDay} ${splitTime}`
    condition.innerText = con

}

function getDayName(number){
 switch(number){
    case 0:
    return 'Sunday';
case 0:
return 'Sunday';
case 1:
return 'Monday';
case 2:
return 'Tuesday';
case 3:
return 'Wednesday';
case 4:
return 'Thursday';
case 5:
return 'Friday';
case 6:
return 'Saturday';
}
 

}

function searchforTemp(e){
     e.preventDefault()
    let target = searchField.value
    fetchResult(target)
    console.log('target:'+target)
}
