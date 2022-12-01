const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');
const button0 = document.querySelector('.button0');
const buttonAC = document.querySelector('.buttonAC');
const plus= document.querySelector('.plus');
const ravno= document.querySelector('.ravno');
const minus= document.querySelector('.minus');
const umn= document.querySelector('.umn');
const razdel= document.querySelector('.razdel');
const pole= document.querySelector('.pole');
const otvet= document.querySelector('.otvet');

let regexp=/[A-Za-zA-Яф-яЁё!@#$%^&*()_]/g;
pole.addEventListener('input', function(){
    pole.value=pole.value.replace(regexp,'')
})

button1.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'1';
});
button2.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'2'
});
button3.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'3'
});
button4.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'4'
});
button5.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'5'
});
button6.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'6'
});
button7.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'7'
});
button8.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'8'
});
button9.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'9'
});
button0.addEventListener('click', function() {
    document.querySelector('input').value=document.querySelector('input').value +'0'
});
buttonAC.addEventListener('click', function() {
    document.querySelector('input').value='';
    otvet.value='';
});

plus.addEventListener('click',function (){
window.A = Number(pole.value);
pole.value='';
window.plus=1;
otvet.value=window.A + '+';
})

minus.addEventListener('click',function(){
window.A = Number(pole.value);
pole.value='';
window.minus=1;
otvet.value=window.A + '-';
})

umn.addEventListener('click',function(){
window.A = Number(pole.value);
pole.value='';
window.umn=1;
otvet.value=window.A + '*';
})

razdel.addEventListener('click',function(){
window.A = Number(pole.value);
pole.value='';
window.razdel=1;
otvet.value=window.A + '/';
})

ravno.addEventListener('click',function(){
window.B=Number(pole.value);
otvet.value=otvet.value+window.B+'=';
if (window.plus===1) {
pole.value= window.A+window.B;
window.plus===0}
if (window.minus===1) {
    pole.value= window.A-window.B;
    window.minus===0}
    if (window.umn===1) {
        pole.value= window.A*window.B;
        window.minus===0
    }
        if (window.razdel===1) {
            pole.value= window.A/window.B;
            window.razdel===0} 
})
