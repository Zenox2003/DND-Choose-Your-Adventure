console.log(`test`);

const prompts = [
    {
        id: 0,
        question: `You are met with the huge doors of a dungeon. Do you want to go left, right, or forward?`,
        options: [
            {text: `left`, navigateToIdx: 1},
            {text: `right`, navigateToIdx: 2},
            {text: `forward`, navigateToIdx: 3}
        ]
    },
    {
        id: 1,
        question: `You choose Left and have ventured deeper into the dungeon `,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 2,
        question: `You choose Right and have ventured deeper into the dungeon`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 3,
        question: `You choose forward and have ventured deeper into the dungeon`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 4,
        question: `You find yourself at a brimming chest of gold `,
        options: [
            {text: `left`, navigateToIdx: 7},
            {text: `right`, navigateToIdx: 8},
            {text: `forward`, navigateToIdx: 9}
        ]
    },
    {
        id: 5,
        question: `You have been ensnared in a trap! `,
        options: [
            {text: `left`, navigateToIdx: 7},
            {text: `right`, navigateToIdx: 8},
            {text: `forward`, navigateToIdx: 9}
        ]
    },
    {
        id: 6,
        question: `You come face to face with a pack of goblins!`,
        options: [
            {text: `left`, navigateToIdx: 7},
            {text: `right`, navigateToIdx: 8},
            {text: `forward`, navigateToIdx: 9}
        ]
    },
    {
        id: 7,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 8,
        question: `Do you want to go left, right, or forward?`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 9,
        question: `You choose Left `,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
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

function handleClickButtonA() {
    currPromptIdx = currPrompt.options[0].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
}

function handleClickButtonB() {
    currPromptIdx = currPrompt.options[1].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
}

function handleClickButtonC() {
    currPromptIdx = currPrompt.options[2].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
}