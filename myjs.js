let mybtn=document.getElementById('btn');
myoutput=document.getElementById('output');
let number=Math.floor(Math.random()*100);
mytext=document.getElementById('num');
let mycount=0;
mybtn.addEventListener('click',function(){
    let myinput=mytext.value;
    if(myinput==number){
        myoutput.innerHTML=`you guessed the right number,and you guessed it in ${mycount} attempts`;
        mycount+=1;
    }
    else if(myinput<number){
        myoutput.innerHTML=`your number is too low`;
        mycount+=1
        
    }
    else if(myinput>number){
        myoutput.innerHTML=`your number is too high`
        mycount+=1;
    }
    mytext.value=' ';
  
});