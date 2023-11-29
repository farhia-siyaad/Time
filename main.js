const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")

const dayNames= ["Var Date : DateConstructure /", "Sunday","Monday" ,"Tuesday","Wednesday",
"Thursday", "Friday", "Saturday" ]
const monthNames= ["Jan","Feb", "Mar","Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function clock() {
     const dateTime = new Date()
day.innerHTML = monthNames[dateTime.getMonth()]
month.innerHTML = dateTime.getDate()
year.innerHTML = dateTime.getFullYear()
//putting data into hours elements
const hour = document.querySelector("#hrs")
const mins= document.querySelector("#mins")
const secs = document.querySelector("#secs")
const MOrA = document.querySelector("#morningorafternoon")
 if (dateTime.getHours()>12) {
     MOrA.innerHTML = "PM"
 }
 else{
     MOrA.innerHTML= "AM"
 }
if (dateTime.getHours() < 10) {
     hour.innerHTML = `0${dateTime.getHours()}:`
}
else {
     hour.innerHTML = dateTime.getHours() + ":"
}
     mins.innerHTML = dateTime.getMinutes() +":"


     secs.innerHTML = dateTime.getSeconds() 
}
setInterval(clock)