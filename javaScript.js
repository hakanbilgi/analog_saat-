 const sec = document.querySelector(".secs");
 const min = document.querySelector(".mins");
 const hours = document.querySelector(".hours");

 function tiktak (){
let seconds = new Date().getSeconds();
let minute = new Date().getMinutes();
let hour = new Date().getHours();

sec.style.transform = `rotade(${180}deg)`
min.style.transform = `rotade(${180}deg)`
hours.style.transform = `rotade(${180}deg)`








 }

 setInterval(tiktak,1000);