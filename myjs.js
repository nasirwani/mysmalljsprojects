let myday=document.getElementById('day');
let myyear=document.getElementById('year');
//gives date 
let d= new Date();
//fetch day starts from 0;
let days=d.getDay();
//fetches month and current time
nw=d.toLocaleString();

switch(days){
    case 0:
        days='Sunday';
        break;
    case 1:
        days='Monday';
        break;
    case 2:
        days='Tuesday';
        break;
    case 3:
        days='Wednesday';
        break;
    case 4:
        days='Thursday';
        break;
    case 5:
        days='Friday';
        break;
    case 6:
        days='Saturday';
        break;
}
myday.innerHTML=days;
myyear.innerHTML=nw;
