const start = document.querySelector('.btn-start')
const rest = document.querySelector('.btn-rest')

let [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.querySelector('.displayTime')
let timer = null

function stopwatch(){
  seconds++
  if (seconds==60){
    seconds=0
    minutes++
    if(minutes==60){
      minutes=0
      hours++
    }
  }
  let h = hours < 10 ? '0' + hours : hours
  let m = minutes < 10 ? '0' + minutes : minutes
  let s = seconds < 10 ? '0' + seconds : seconds
  

  displayTime.innerHTML = h + ':' + m + ':' + s
}

function watchStart(){
  if(timer!== null){
    clearInterval(timer)
  }
 timer =  setInterval(stopwatch, 1000)
}

function watchStop(){
  clearInterval(timer)
}


function watchReset(){
  clearInterval(timer)
  
  displayTime.innerHTML = "00:00:00"
}



// function highAndLow(numbers){
//   let cur = '', min, max;
//   for (let i = 0; i <numbers.length; i++){
//     cur += numbers[i];
//       if (+numbers[i] && !+numbers[i+1]) {
//         if (typeof min !== 'number' || cur < +min) min = +cur;
//         if (typeof max !== 'number' || cur > +max) max = +cur;
//         cur = '';
//       }
//   }
//   return (max +' '+ min)
// }

// function highAndLow(numbers){
// let arr = numbers.split(' ')
// for (let i=0; i<arr.length; i++){
  
// }
// let min = 0
// let max = 0
// arr.forEach((i)=>{

// })
// console.log(arr)
// }


// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")