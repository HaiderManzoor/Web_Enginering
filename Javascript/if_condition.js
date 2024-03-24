if(1+1==2){
    console.log("your guess works:)")
}
let random = Math.random()
if (random<0.5){
    console.log("your number is less than 0.5");
    console.log(random)
}
if (random>=0.5){
    console.log("your number is greater than 0.5")
    console.log(random)
}

function isEven(num){
    if(num%2==0){
        console.log("number is even")
    }
}
isEven(4)

let rating = 3
if (rating==3){
    console.log("you are supoerstar")
}else if(rating==4){
    console.log("you are not a super star")
}
const day = "MONDAY"
if (day=="monday"){
    console.log("yayyyyy its the right guess :))")
}else if (day=="MONDAY"){
    console.log("yayyyyy its the right guess WITH same match :))")
}
