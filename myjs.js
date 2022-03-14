//colors array
const colors=['red','blue','white','yellow','green','black'];
//get button by id
let mybtn=document.getElementById('btn');
//adding eventlistener on button
mybtn.addEventListener('click',function(){
    //accessing array
    var randomcolor=colors[Math.floor(Math.random()*colors.length)];
    //getting body
    const body=document.body;
    //applyng style
    body.style.background=randomcolor;
})