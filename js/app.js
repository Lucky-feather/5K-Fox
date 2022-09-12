console.log('bananas')


// Set a daily mileage quota (ie 2 miles).  (Each day mileage quota will increase +1)

// Set “Run” button = .25 miles, value of button will increase by .25 every day.

// Set a daily rest quota - //this may or may not change daily, i haven’t decided//

// ————————

// Food and rest increase Fox’s energy

// Establish 2 types of food: sandwich and cookie. Sandwich increases energy. Cookie increases energy less than sandwich, but Fox still must eat one every day.


// >When fox eats sandwich: energy level increases +2

// >When fox eats cookie: energy level increases + 1, AND cookie quota has been met


// Max energy level is 5. Fox won’t eat if energy is at max, or if the energy value of a food would make Fox’s energy level exceed 5.


// When Fox runs, energy level decreases by 2 for every 1 mile

// If energy is below 2 when the “run” button is pressed, Fox won’t run.


// Use timer to establish end of “day”

// at end of day assess fox’s status:

// >If the mileage quota is not met OR the rest quota is not met, OR they did not get a cookie, 

// Fox cannot progress to the next day. 

// Timer is reset with the day’s same distance and rest quotas.

// >If mileage, rest, and cookie quotas are met 

// Timer is reset

// Fox’s mileage quota will increase

// Value of “run” button will increase

// >if quotas are met at the end of day 5, Fox is ready for a 5k and you win!


// Will need these buttons:

// Run

// Food

// Rest

/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let runLog
let runGoal
let restLog 
let cookieTime 
let weekNumber
let energy

/*------------------------ Cached Element References ------------------------*/

const goRun = document.querySelector("#go-run")
const goFeed = document.querySelector("#go-feed")
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
goFeed.addEventListener('click', endWeek)
startBtn.addEventListener('click', startWeek)
cookie.addEventListener('click', eatCookie)
sandwich.addEventListener('click', eatSandwich)
goRest.addEventListener('click', restTime)
/*-------------------------------- Functions --------------------------------*/

function init(){
runLog = 0
runGoal =0
restLog = 2
cookieTime = 0
weekNumber = 0
}

init()

function resetClick() {
init()
}

function startWeek() {
runLog = 0
runGoal = 6
restLog = runGoal - 1
energy = 4
cookieTime = 0
weekNumber = 1
weekStatus.textContent =`Week ${weekNumber} of Training`
console.log(runLog)
console.log(energy)
console.log (restLog)
}

//startWeek()

function logRun() {
if (energy < 2 || restLog === 0) { 
    foxChat.textContent = "I have no energy to run right now"
}
else if (runLog === runGoal - 2 && cookieTime === 0) {
    foxChat.textContent = "I'm grouchy, running is dumb"
    console.log(cookieTime)
}
else if (runLog === runGoal) { foxChat.textContent = "looks like I reached my goal for the week!  Can I have a cookie and take a nap?"
} else {
    runLog = runLog + 2
    energy = energy - 2 
    restLog = restLog - 1
    console.log("miles run " + runLog)
    console.log("energy level " + energy)
    console.log("has had " + restLog + " rest")
    console.log("run goal: " + runGoal)
    foxChat.textContent = " "
}
}

function increaseEnergy() {
//pick what to feed fox

}

function eatCookie() {
    cookieTime = cookieTime + 1
    console.log("cookies " + cookieTime)
}

function eatSandwich() {
if (energy > 4) {
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
//let gtg = false
if (runLog < runGoal) {
    //gtg = false
    foxChat.textContent = "Yikes, I didn't train enough this week"
}

// if (gtg = false){ 
//     console.log("restart same training week")}

else {
    console.log("New training week")
}}


function newWeek(){

    runGoal = runGoal + 1
    cookieTime = 0
    weekNumber = weekNumber + 1 
    weekStatus.textContent =`Week ${weekNumber} of Training`
    console.log("miles run " + runLog)
    console.log("energy level " + energy)
    console.log("has had " + restLog + " rest")
    console.log("run goal: " + runGoal)
    }


///end of Week
//has run goal been met?
//has rest been met?
// add +1 to rungoal
//add +1 to weekNumber