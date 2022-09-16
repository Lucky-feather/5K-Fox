const goRun = document.querySelector("#go-run")
const cookie = document.querySelector("#cookie")
const goRest = document.querySelector("#go-rest")
const resetBtn = document.querySelector(".reset")
const startBtn = document.querySelector("#start")
const weekStatus = document.querySelector("#week-status")
const foxChat = document.querySelector(".fox-chat")
const timerEl = document.querySelector("#timer")
const careBtns = document.querySelector("#button-box")
const weekGoal = document.querySelector("#week-goal")
const foxPic = document.querySelector("#fox-pic")
const favicon =document.querySelector("#favicon")
const hooray = new Audio("audio/game-win.mp3")


resetBtn.addEventListener('click', init)
goRun.addEventListener('click', logRun)
startBtn.addEventListener('click', startWeek)
cookie.addEventListener('click', eatCookie)
goRest.addEventListener('click', restTime)


function init() {
    runLog = 0
    runGoal = 4
    restLog = 2
    energy = 4
    cookieTime = 0
    weekNumber = 0
    distance = 1
    foxPic.src = "images/sitting-fox.jpg"
    resetBtn.style.display = 'none'
    careBtns.style.display = 'none'
    weekStatus.textContent = 'I want to run a 5k!'
    startBtn.style.display = 'block'
    startBtn.textContent = "Start"
    foxChat.innerHTML = "Hello!  I really want to run a 5k.  Can you help me train? <br> <br> I need to go for several runs during the week.  Sometimes I need to take a nap to get energy.  If I get grouchy, I need a cookie for motivation. <br> <br> You have 60 seconds to help me log a week's worth of runs, so take your time if you want.  Press the 'Start' button when you're ready" 
}

init()

function startWeek(){
    cookieTime = 0
    runLog = 0
    weekNumber = weekNumber + 1 
if (runGoal >= 6) {
    distance = distance + 0.5
}
startTimer()
    weekStatus.textContent =`Week ${weekNumber} of Training.`
    weekGoal.textContent = `Goal distance: ${runGoal} miles`
    goRun.textContent = ` Let's go for a ${distance} mile run`
    careBtns.style.display = 'block'
    startBtn.style.display = 'none'
    resetBtn.style.display = 'none'
    timerEl.style.display = 'block'
    foxChat.textContent = " "
    foxPic.src = "images/sitting-fox.jpg"
}

function startTimer() {
    let timeLeft = 30 
    let timer = setInterval(function() {
	timeLeft -= 1
    timerEl.textContent = timeLeft + ' seconds remaining'
if (timeLeft <= 0) {
    clearInterval(timer)
    endWeek()
}
}, 1000) 
}

function logRun() {
if (runLog >= runGoal){ return 
}
else if (restLog === 0) { 
    foxChat.textContent = "I'm too tired to run"
    foxPic.src = "images/sleeping-fox.jpg"
}
else if (runLog > runGoal - 3 && cookieTime === 0) {
    foxChat.textContent = "I'm grouchy, running is dumb. Can I have a cookie?"
    foxPic.src = "images/parking-lot-fox.jpg"
}
else {
    runLog = runLog + distance
    restLog = restLog - 1
    foxChat.textContent = `Miles run so far: ${runLog}`
}
if (runLog >= runGoal) { 
    foxChat.textContent =  "Hooray! I reached my goal for the week."
}}


function eatCookie() {
    if (runLog >= runGoal){ return 
} 
else if (cookieTime >= 1) {
    foxChat.textContent = "I don't need another cookie."
} else { cookieTime = cookieTime + 1
    foxChat.textContent = "Yum! Thanks, I'm not grouchy anymore"
    foxPic.src = "images/sitting-fox.jpg"
}
}

function restTime() {
if (runLog >= runGoal || restLog >= 4){ 
    return
} 
else 
    restLog = restLog + 2
    foxChat.textContent = " I feel rested. Can we run now?"
    foxPic.src = "images/sitting-fox.jpg"
}

function endWeek() {
    timerEl.style.display = 'none'
    startBtn.style.display = 'block'
    resetBtn.style.display = 'block'
if (runLog < runGoal) {
    foxChat.textContent = "Yikes, I didn't train enough this week"
    weekStatus.textContent =`Fox needs to try week ${weekNumber} again`
    weekNumber = weekNumber - 1
    startBtn.textContent = "Try Again"
} 
else if (weekNumber === 5) {
    foxPic.src = "images/happy-fox.jpg"
    weekStatus.textContent ="You did it!  Fox is ready to run a 5K!"
    foxChat.textContent = "Hooray! we did it!"
    confetti.start(2000)
    hooray.volume = .10
    hooray.play()
    startBtn.style.display = 'none'
}
else {
    foxPic.src = "images/happy-fox.jpg"
    weekStatus.textContent =`Week ${weekNumber} of training completed!`
    foxChat.textContent = "This is awesome, let's keep going!"
    startBtn.textContent = "continue to next week"
    runGoal = runGoal + 2}
}
