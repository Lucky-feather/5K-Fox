console.log('bananas')

// Start of game: 

// Set Fox’s status:  

// >Energy(food), 

// >miles run,

// >rest

// >cookie


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

/*------------------------ Cached Element References ------------------------*/

const goRun = document.querySelector("#go-run")
const goFeed = document.querySelector("#go-feed")
const goRest = document.querySelector("#go-rest")
const resetBtn = document.querySelector(".reset")
const startBtn = document.querySelector("#start")
const weekStatus = document.querySelector("#week-status")
const foxChat = document.querySelector(".fox-chat")
/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', resetClick)
goRun.addEventListener('click', logRun)
//goFeed.addEventListener('click', increaseEnergy)
startBtn.addEventListener('click', startWeek)

/*-------------------------------- Functions --------------------------------*/

function init(){
runLog = 0
runGoal =0
restLog = 0
cookieTime = 0
weekNumber = 0
}

init()

function resetClick() {
init()
}

function startWeek() {
runLog = 0
restLog = 0
energy = 4
cookieTime = 0
weekNumber = 1
weekStatus.textContent =`Week ${weekNumber} of Training`
console.log(runLog)
console.log(energy)
}

//startWeek()

function logRun() {
if (energy < 2) { 
    foxChat.textContent = "I have no energy to run right now"
}
else {
    runLog = runLog + 2
    energy = energy - 2 
    console.log("miles run " + runLog)
    console.log("energy level " + energy)
} }
