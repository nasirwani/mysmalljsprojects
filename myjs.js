let mymeter=document.getElementById('meter');
let myfeet=document.getElementById('feet');
let myoutput=document.getElementById('output')
mymeter.addEventListener('click',function(){
    let myHeightInMeters=document.getElementById('len').value
    console.log(myHeightInMeters)
    myoutput.innerHTML=myHeightInMeters/3.21+' '+'Meters';
})
myfeet.addEventListener('click',function(){
    myHeightInFeets=document.getElementById('len').value;
    myoutput.innerHTML=myHeightInFeets*3.21+" "+ 'Feets';
})