window.addEventListener("load", function () {
    
   let second= setInterval(function () {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let seconds=document.getElementById("seconds").style.transform=`rotate(${s*6}deg)`
    
    
    }, 1000)
let minute=setInterval(function(){
    let today = new Date();
    let m = today.getMinutes();
    let minutes=document.getElementById("minute").style.transform=`rotate(${m*6}deg)`
}, 1000)
let hour=setInterval(function(){
    let today = new Date();
    let h = today.getHours();
    let hour=document.getElementById("hour").style.transform=`rotate(${h*30}deg)`

}, 1000)
});