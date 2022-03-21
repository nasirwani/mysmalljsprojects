
let finaltime=setInterval(function(){
let countDownDay=new Date('10 Apr,2022,10:00:00').getTime();
let currentTime=new Date().getTime();
let finalCountDown=countDownDay-currentTime;

let showTime=document.getElementById('p')
var days=Math.floor(finalCountDown/(1000*24*60*60));

let Hours=Math.floor(finalCountDown%(1000*60*60*24)/(1000*60*60));

let Minutes=Math.floor(finalCountDown%(1000*60*60)/(1000*60));

let Seconds=Math.floor(finalCountDown%(1000*60)/(1000));

showTime.innerHTML=days +'d: '+Hours+'h: '+Minutes+"m: "+Seconds+'s';
},1000);

