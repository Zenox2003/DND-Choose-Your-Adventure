console.log(`test`);

const prompts = [
    {
        id: 0,
        question: `Do you want to go left, right, or forward?`,
        options: [
            {text: `left`, navigateToIdx: 1},
            {text: `right`, navigateToIdx: 2},
            {text: `forward`, navigateToIdx: 3}
        ]
    },
    {
        id: 1,
        question: `You choose Left `,
        options: [
            {text: `Opt A`, navigateToIdx: 1},
            {text: `Opt B`, navigateToIdx: 2},
            {text: `Opt C`, navigateToIdx: 3}
        ]
    },
    {
        id: 2,
        question: `You choose Right`,
        options: [
            {text: `Opt A`, navigateToIdx: 1},
            {text: `Opt B`, navigateToIdx: 2},
            {text: `Opt C`, navigateToIdx: 3}
        ]
    },
    {
        id: 3,
        question: `You choose forward`,
        options: [
            {text: `Opt A`, navigateToIdx: 1},
            {text: `Opt B`, navigateToIdx: 2},
            {text: `Opt C`, navigateToIdx: 3}
        ]
    }
]

const questionEl = document.querySelector(`#question`)
const buttonA = document.querySelector(`#option-a`)
const buttonB = document.querySelector(`#option-b`)
const buttonC = document.querySelector(`#option-c`)

buttonA.addEventListener(`click`, handleClickButton)

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

function handleClickButton() {
    currPromptIdx = currPrompt.options[0].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
}