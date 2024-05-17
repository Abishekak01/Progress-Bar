// var progress=document.getElementById("prog")

// console.log(progress)


// var para=document.getElementById("para")

// bandwith=0;

// let fun=()=>{

//     bandwith++
//     progress.style.width=bandwith+"%"
//     para.textContent=bandwith+"%"
 
// }

// let interval=setInterval(()=>{
//     if(bandwith==100){

//         clearInterval(interval)
//     bandwith=0
//     }
    
//  else{
//     fun()
//  }


// },100)


// a=prompt("Enter the food")
// console.log(a)

// let food=setInterval(()=>{

// console.log("Your"+a+" is in progress")

// },1000)

// let timing=setInterval(()=>{


// console.log("Your food will be delivered in 10 mins")

// })


// let deliverperson=setInterval( ()=>{

// console.log("Your patner will be on the way");

// })

// let delivered=(()=>{
//     console.log("your"+a+"has been delivered")
// })

// food()

// timing()

// deliverperson()

// delivered()


let a = prompt("Enter the food");
console.log(a);

setTimeout(() => {
    let food = setInterval(() => {
        console.log("Your " + a + " is in progress");
    }, 1000);
}, 1000);

setTimeout(() => {
    let timing = setInterval(() => {
        console.log("Your food will be delivered in 10 mins");
    }, 1000);
}, 2000);

setTimeout(() => {
    let deliverperson = setInterval(() => {
        console.log("Your partner will be on the way");
    }, 1000);
}, 3000);

setTimeout(() => {
    let delivered = () => {
        console.log("Your " + a + " has been delivered");
    };
    delivered();
}, 4000);
