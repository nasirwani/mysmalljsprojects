mybutton=document.getElementById('len');
myoutput=document.getElementById('result');
mybutton.addEventListener('click',function(){
    mystrvalues=document.getElementById('word').value;
    myoutput.innerHTML=mystrvalues.length;
    
})