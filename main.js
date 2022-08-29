function func(){
var date=new Date()

var sechand=document.getElementById("sechand")
var sec=date.getSeconds()
var secpstn=(sec*6)+90
sechand.style.transform=`rotate(${secpstn}deg)`

var minhand=document.getElementById("minhand")
var min=date.getMinutes()
var minpstn=(min*6)+90
minhand.style.transform=`rotate(${minpstn}deg)`

var hrhand=document.getElementById("hrhand")
var hour=date.getHours()
hourpstn=(hour*30)+90
hrhand.style.transform=`rotate(${hourpstn}deg)`

}
func()
setInterval(func,1000)