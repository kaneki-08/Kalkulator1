let qiymat=document.getElementById('input');
function addInput(raqam){
    qiymat.value+=raqam
}
function calculate(){
    qiymat.value=eval(qiymat.value)
}




function clearDisplay(){
    input.value = input.value.slice(0, input.value.length - 1);
}