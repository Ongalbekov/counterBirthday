let day=document.querySelector('#day');
let hour=document.querySelector('#hour');
let minute=document.querySelector('#minute');
let second=document.querySelector('#second');

let inputDate=document.querySelector('#inputDate');

inputDate.addEventListener('change', (event)=>{
  let input=new Date(inputDate.value);
  getTime(input);
  
  let interval=setInterval(getTime, 1000, input);
  clearInterval(interval);
});

getTime=(input)=>{
  let dateNew= new Date();
  let diff= input - dateNew;

  day.innerHTML=Math.floor(new Date(diff)/(1000*60*60*24))
  hour.innerHTML=new Date(diff).getHours()- 2;
  minute.innerHTML=new Date(diff).getMinutes();
  second.innerHTML=new Date(diff).getSeconds();
}
console.log(getTime(inputi))