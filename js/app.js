
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let runLog
let runGoal
let restLog 
let cookieTime 
let weekNumber
let energy
//let timeLeft = 10

/*------------------------ Cached Element References ------------------------*/

const goRun = document.querySelector("#go-run")
const goFeed = document.querySelector("#go-feed")
const foodBox = document.querySelector(".food")
const cookie = document.querySelector("#cookie")
const sandwich = document.querySelector("#sandwich")
const goRest = document.querySelector("#go-rest")
const resetBtn = document.querySelector(".reset")
const startBtn = document.querySelector("#start")
const weekStatus = document.querySelector("#week-status")
const foxChat = document.querySelector(".fox-chat")

/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', resetClick)
goRun.addEventListener('click', logRun)
goFeed.addEventListener('click', feedFox)
startBtn.addEventListener('click', startWeek)
cookie.addEventListener('click', eatCookie)
sandwich.addEventListener('click', eatSandwich)
goRest.addEventListener('click', restTime)
/*-------------------------------- Functions --------------------------------*/


function init() {
runLog = 0
runGoal = 1
restLog = runGoal - 1
energy = 8
cookieTime = 0
weekNumber = 0
distance = 1
foodBox.style.display = 'none'
weekStatus.textContent = 'I want to run a 5k!'
}

init()


function resetClick() {
init()
}

function startWeek(){
    runGoal = runGoal + 2
    cookieTime = 0
    runLog = 0
    weekNumber = weekNumber + 1 
    console.log("miles run " + runLog)
    console.log("energy level " + energy)
    console.log("has had " + restLog + " rest")
    console.log("run goal: " + runGoal)
    startTimer()
    weekStatus.textContent =`Week ${weekNumber} of Training.
    Goal distance: ${runGoal} miles`
    goRun.textContent = ` let's go for a ${distance} mile run`
    startBtn.style.display = 'none'
    }

function startTimer() {
let timeLeft = 10 
let timer = setInterval(function() {
	timeLeft -= 1
console.log(timeLeft)

if (timeLeft <= 0) {
    clearInterval(timer)
    endWeek()
}
}, 10000) 

}

function logRun() {

if (runLog >= runGoal) { foxChat.textContent = "looks like I reached my goal for the week"
    return
} else if (energy < 2 || restLog === 0) { 
    foxChat.textContent = "I have no energy right now"
}
else if (runLog > runGoal - 2 && cookieTime === 0) {
    foxChat.textContent = "I'm grouchy, running is dumb. Can I have a cookie?"
    console.log(cookieTime)
}
else {
    runLog = runLog + distance
    energy = energy - 2 
    restLog = restLog - 1
    foxChat.textContent = `I've run ${runLog} miles so far`
}
}
function feedFox() {
    foxChat.textContent = " "
    console.log("food time")
    foodBox.style.display= 'block'
}

function eatCookie() {
    if (cookieTime >= 1) {
foxChat.textContent = "I don't need another cookie."
console.log("cookies " + cookieTime)
    } else { cookieTime = cookieTime + 1
    console.log("cookies " + cookieTime)
    foxChat.textContent = "Yum! Thanks, I'm not grouchy anymore"
}

foodBox.style.display = 'none'
}

function eatSandwich() {
    foodBox.style.display = 'none'
if (energy > 6) {
    foxChat.textContent = "I'm not hungry"
} else {
    energy = energy + 2
    console.log("energy level raised to " + energy)
}
}

function restTime() {
restLog = restLog + 1
console.log("rest" + restLog)
}


function endWeek() {
    startBtn.style.display = 'block'
if (runLog < runGoal) 
{
    foxChat.textContent = "Yikes, I didn't train enough this week"
    weekStatus.textContent =`Fox needs to try week ${weekNumber} again`
    weekNumber = weekNumber - 1
    distance = distance - 1
    startBtn.textContent = "Try Again"
} 
else if (weekNumber === 5) {weekStatus.textContent ="You did it!  Fox is ready to run a 5K!"
startBtn.textContent = "Play Again"
}
else {
    console.log("New training week")
    foxChat.textContent = "This is awesome, let's keep going!"
    startBtn.textContent = "continue to next week"
    distance = distance + 1
    weekStatus.textContent =`Week ${weekNumber} of training completed!`
    
}}

