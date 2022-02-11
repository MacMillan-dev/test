const daysEl=document.getElementById("days")
const minutesEl=document.getElementById("minutes")
const hoursEl=document.getElementById("hours")
const secondsEl=document.getElementById("seconds")



const birthday="1 Aug 2022"

function countdown(){
    const newBirthday=new Date(birthday)
    const currentDate=new Date()

    const totalSeconds=(newBirthday-currentDate)/1000
    const days=Math.floor(totalSeconds/3600/24)
    const hours=Math.floor(totalSeconds/3600)%24
    const minutes=Math.floor(totalSeconds/60)%60
    const seconds=Math.floor(totalSeconds)%60

    daysEl.innerHTML=days
    minutesEl.innerHTML=minutes
    secondsEl.innerHTML=seconds
    hoursEl.innerHTML=hours

    console.log(days,hours,minutes,seconds)
}

countdown()

setInterval(countdown,1000)
// let person={
//     name:"Millan",
//     age:20,
//     country:"Kenya"
// }
// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// logData()
// let age=5
// if(age<6){
//     console.log("free")
// }else if(age<18){
//     console.log("child discount")
// }else if(age<27){
//     console.log("student discount")
// }else if(age<66){
//     console.log("Full price")
// }else{
//     console.log("Senior citizen discount")
// }