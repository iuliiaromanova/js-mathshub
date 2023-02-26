const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() *(max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}


const spielElements = document.getElementById("meinSpiel").children
const titel = spielElements[0]
const userTask = spielElements[1]
const userAntwort = spielElements[2]
const btnGame = spielElements[3]

const gameState = {
    taskInProcess: false, 
    rightAnswer: null
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        titel.innerText = "Das Spiel ist angefangen"
        userAntwort.value = null
        userTask.innerText = getTask()
        userAntwort.hidden = false
    } else {
        const isRight = gameState.rightAnswer == userAntwort.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        titel.innerText = (isRight) ? "Super gut gemacht! Mach weiter so" : "Naja, Einen Versuch ist es immer wert ;)"
    }
    toggleGameState() 
        btnGame.innerText = (gameState.taskInProcess) ? "Prüfen die Antwort" : "Noch ein Mal"
}
btnGame.addEventListener("click", startGameFunc)


userAntwort.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAntwort.blur()

    }

})


const chooseElement = document.querySelectorAll(".choosed_block-container > div")
const counterElement = document.querySelector(".choosed_block span")
const choosedState = {
    countElements : 0,
}

const changeCount = (value) => {
    choosedState.countElements += value
    counterElement.innerText = choosedState.countElements
}

for (let i=0; i < chooseElement.length; i++) {
    chooseElement[i].addEventListener("click", (e) => {
        if (e.target.className === "") {
            e.target.className = "choosed_element"
            changeCount(1)
        } else {
            e.target.className = ""
            changeCount(-1)
        }
    })
}


// // ********** BEST PRACTICE
// const chooseElement = document.querySelectorAll(".choosed_block-container > div")
// const counterElement = document.querySelector(".choosed_block span")
// const choosedState2 = {
//     countElements : 0,
//     setCountValue (value) {
//         this.countElements += value
//         counterElement.innerText = this.countElements
//     }
// }

// for (let i=0; i < chooseElement.length; i++) {
//     chooseElement[i].addEventListener("click", (e) => {
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             choosedState2.setCountValue(1)
//         } else {
//             e.target.className = ""
//             choosedState2.setCountValue(-1)
//         }
//     })
// }
// // *********** ENDE Best practice



