const addValue=document.getElementById('inc');
const removeValue=document.getElementById('dec');
const int=document.getElementById('number');
let myCurrentVal=0;

addValue.addEventListener('click',function(addValue){
    addValue.preventDefault();
    myCurrentVal+=1;
    int.innerHTML=myCurrentVal;


});
removeValue.addEventListener('click',function(removeValue){
    removeValue.preventDefault();
    myCurrentVal-=1;
    int.innerHTML=myCurrentVal;


});
