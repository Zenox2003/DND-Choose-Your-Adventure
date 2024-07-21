const prompts = [
    {
        id: 0,
        question: `You are met with the huge iron doors of a dungeon. Do you want to go left, right, or forward?`,
        options: [
            {text: `left`, navigateToIdx: 1},
            {text: `right`, navigateToIdx: 2},
            {text: `forward`, navigateToIdx: 3}
        ]
    },
    {
        id: 1,
        question: `You choose Left and have ventured deeper into the dungeon, which path shall you choose now? `,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 2,
        question: `You choose Right and have ventured deeper into the dungeon, which path shall you choose now?`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 3,
        question: `You choose forward and have ventured deeper into the dungeon, which path shall you choose now?`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 4,
        question: `You have chosen left and find yourself gliding through with no troubles as you find a room gleaming with light, as you find a treasure room! What will you do now? `,
        options: [
            {text: `loot the chest`, navigateToIdx: 7},
            {text: `check for traps`, navigateToIdx: 8},
            {text: `leave it`, navigateToIdx: 9}
        ]
    },
    {
        id: 5,
        question: `You have chosen right and are faced with many makeshift spikes and traps. You have been ensnared in a trap! How will you escape? `,
        options: [
            {text: `left`, navigateToIdx: 7},
            {text: `right`, navigateToIdx: 8},
            {text: `forward`, navigateToIdx: 9}
        ]
    },
    {
        id: 6,
        question: `You have chosen forward and as you walk deeper into the dungeon soft sounds of pattering feet grow louder as you venture in as you come face to face with a pack of goblins! What do you do!?`,
        options: [
            {text: `fight`, navigateToIdx: 7},
            {text: `run`, navigateToIdx: 8},
            {text: `negotiate`, navigateToIdx: 9}
        ]
    },
    {
        id: 7,
        question: `As you come closer to the chest nothing seems to be irregular and now your gold purse seems to burst with new found weight to it. What will you do now? `,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 8,
        question: `As you carefully inspect the chest for traps there are none to be found and with this new found knowledge you loot the chest with no worries and find yourself richer. What will you do now?`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 9,
        question: `You leave the chest behind as you are not interested in material gain, only the journey that lays before you. What will you do now? `,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 10,
        question: `You choose Right`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 11,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 12,
        question: `You have cleared the dungeon!`,
        options: [
            {text: `left`, navigateToIdx: 100},
            {text: `right`, navigateToIdx: 100},
            {text: `forward`, navigateToIdx: 100}
        ]
    }
]

const questionEl = document.querySelector(`#question`)
const buttonA = document.querySelector(`#option-a`)
const buttonB = document.querySelector(`#option-b`)
const buttonC = document.querySelector(`#option-c`)


buttonA.addEventListener(`click`, handleClickButtonA)
buttonB.addEventListener(`click`, handleClickButtonB)
buttonC.addEventListener(`click`, handleClickButtonC)

let currPromptIdx = 0
let currPrompt

function init() {
    currPromptIdx = 0
    currPrompt = prompts[currPromptIdx]
    render()
}

init()

function render() {
    questionEl.textContent = currPrompt.question
    buttonA.textContent = currPrompt.options[0].text
    buttonB.textContent = currPrompt.options[1].text
    buttonC.textContent = currPrompt.options[2].text
}

function checkForCompletion() {
    if (prompts.question = `You have cleared the dungeon!`) {
        return
    }
}

function handleClickButtonA() {
    currPromptIdx = currPrompt.options[0].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    checkForCompletion()
    render()
}

function handleClickButtonB() {
    currPromptIdx = currPrompt.options[1].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    checkForCompletion()
    render()
}

function handleClickButtonC() {
    currPromptIdx = currPrompt.options[2].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    checkForCompletion()
    render()
}