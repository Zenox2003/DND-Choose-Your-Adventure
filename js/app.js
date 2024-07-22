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
            {text: `Attempt to wiggle out`, navigateToIdx: 27},
            {text: `Attempt to cut yourself out`, navigateToIdx: 26},
            {text: `Wait for help`, navigateToIdx: 25}
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
            {text: `Inspect the room`, navigateToIdx: 10},
            {text: `Go right`, navigateToIdx: 11},
            {text: `Go forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 8,
        question: `As you carefully inspect the chest for traps there are none to be found. What will you do now?`,
        options: [
            {text: `Loot the chest`, navigateToIdx: 7},
            {text: `Go right`, navigateToIdx: 11},
            {text: `Go forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 9,
        question: `You leave the chest behind as you are not interested in material gain, only the journey that lays before you. What will you do now? `,
        options: [
            {text: `Inspect the room`, navigateToIdx: 10},
            {text: `Go right`, navigateToIdx: 11},
            {text: `Go forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 10,
        question: `You scan the room and not only was there a chest but a sword pulsing with arcane energy almost as if it crackles with the power to wield lightning from the heaviest of storms, just what you need to fend off foes! With closer inspection you also notice in the room that there are only 2 paths to take.`,
        options: [
            {text: `Attune to the sword`, navigateToIdx: 13},
            {text: `Go right`, navigateToIdx: 11},
            {text: `Go forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 11,
        question: `As you open the door you notice something fast with a glint coming towards you as you walk. A axe trap awaited you and hit directly into your heart. You Died`,
        options: [
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0}
        ]
    },
    {
        id: 12,
        question: `You are met with a wounded mage that has a bloodied cloth wrapped around their torso and a staff with a purple light ever so fading as time slowly crawls by. What will you do?`,
        options: [
            {text: `Help them with the few health potions you have`, navigateToIdx: 100},
            {text: `Take thier staff as they no longer need it`, navigateToIdx: 100},
            {text: `Leave them to bleed out as you venture forward`, navigateToIdx: 100}
        ]
    },
    {
        id: 13,
        question: `As you take the time to make this sword your own you gain the power to cast lightning from the sword! With the energy from the sword a secret path opens up on the left side of the room that was not there before.`,
        options: [
            {text: `Take the secret path`, navigateToIdx: 14},
            {text: `Go right`, navigateToIdx: 11},
            {text: `Go forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 14,
        question: `The secret path has lead you straight to dragon's lair! Once stepping into it, the scaly beast awakens with a furious roar, what will you do now!`,
        options: [
            {text: `Use your newfound lightning`, navigateToIdx: 15},
            {text: `Run and swing with your sword`, navigateToIdx: 16},
            {text: `Hide`, navigateToIdx: 17}
        ]
    },
    {
        id: 15,
        question: `As you concentrate on the newfound powers bestowed to you by this magical sword, a heavy and thunderous crack of lightning emits from the sword and cuts into the dragon's throat. With a cry and a gurgled roar the dragon grows in anger but seems to be extremely wounded by this. The sword now exhausted seems to lose it's crackling arcane energy. What will you do!`,
        options: [
            {text: `Fight`, navigateToIdx: 18},
            {text: `Attempt to regain your arcane energy`, navigateToIdx: 19},
            {text: `Wind up your arm and throw the sword`, navigateToIdx: 20}
        ]
    },
    {
        id: 16,
        question: `You leave the chest behind as you are not interested in material gain, only the journey that lays before you. What will you do now? `,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 17,
        question: `As you try to hide from the scaly beast within his own domain you find yourself barely able to breathe. The tense air causes your heartbeat to rise as the beast ever approaches where you hide. In a moment faster than you can blink the dragon brings its maw down onto your body. You Died`,
        options: [
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0}
        ]
    },
    {
        id: 18,
        question: `You sprint forward with your legs feeling the heaviest they ever have as you clench and raise your arms up high as you bring down your sword with all your might. The scales cracking with the force behind your mighty swing and finally the sword cuts clean into the dragon's neck, finally making dragon take it's last breath as the head of the beast collapses to the ground causing a big shake`,
        options: [
            {text: `Leave the dungeon`, navigateToIdx: 21},
            {text: `Loot the dragon's hoard`, navigateToIdx: 22},
            {text: `Loot the dragon`, navigateToIdx: 23}
        ]
    },
    {
        id: 19,
        question: `You focus on trying to get your arcane power back but as you start to get drowned in your own focus as you get snapped back to reality as the dragon unleashes a furious roar. You don't have time to focus! What will you do? `,
        options: [
            {text: `Hide`, navigateToIdx: 17},
            {text: `Fight`, navigateToIdx: 18},
            {text: `Talk to the dragon`, navigateToIdx: 24}
        ]
    },
    {
        id: 20,
        question: `As you throw your sword with all your might it gets lodged right into the dragon's throat and with one last roar it falls down lifeless into the countless piles of gold. You have killed the dungeon boss! What will you do now?`,
        options: [
            {text: `Leave the dungeon`, navigateToIdx: 21},
            {text: `Loot the dragon's hoard`, navigateToIdx: 22},
            {text: `Loot the dragon`, navigateToIdx: 23}
        ]
    },
    {
        id: 21,
        question: `You have cleared the dungeon!`,
        options: [
            {text: `left`, navigateToIdx: 21},
            {text: `right`, navigateToIdx: 21},
            {text: `forward`, navigateToIdx: 21}
        ]
    },
    {
        id: 22,
        question: `You find countless legendary artifacts and mounds of gold that can last you a lifetime. You take as much as you can and head for the exit.`,
        options: [
            {text: `take the exit`, navigateToIdx: 21},
            {text: `take the exit`, navigateToIdx: 21},
            {text: `take the exit`, navigateToIdx: 21}
        ]
    },
    {
        id: 23,
        question: `You find enough scales to fill your bag to the brim along with an elemental sack that was contained inside the dragon's throat`,
        options: [
            {text: `take the exit`, navigateToIdx: 21},
            {text: `take the exit`, navigateToIdx: 21},
            {text: `take the exit`, navigateToIdx: 21}
        ]
    },
    {
        id: 24,
        question: `You try talking to the dragon, though unfortunately dragon's aren't ones to want to talk to those that infiltrate their homes. The dragon ready's its breath and unleashes it upon your body reducing it to ash. You Died`,
        options: [
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0}
        ]
    },
    {
        id: 25,
        question: `As you wait for help to come the trap fully ensnares you and drains the energy from you as you wait until eventually you hear the soft patter of small feet and lots of them. As a hunting group of goblins come and stab you to death. You Died`,
        options: [
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0}
        ]
    },
    {
        id: 26,
        question: `You quickly realize that this trap could be your death, in a flash you grab your skinning knife and slash away at the rope and vines that ensare you before they could get any tighter as you free yourself. What will you do?`,
        options: [
            {text: `Explore`, navigateToIdx: 28},
            {text: `Go back`, navigateToIdx: 2},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 27,
        question: `You try to wiggle out but as you do so the trap fully ensnares you and you are now unable to move at all. As you hear the soft patter of small feet and lots of them. As a hunting group of goblins come and stab you to death. You Died  `,
        options: [
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0},
            {text: `Reset`, navigateToIdx: 0}
        ]
    },
    {
        id: 28,
        question: `You explore the path as you venture deeper into the right, hearing sounds of hideous laughter and small instruments being played along with the smell of cooking flesh. What will you do?`,
        options: [
            {text: `Investigate`, navigateToIdx: 30},
            {text: `Sneak`, navigateToIdx: 29},
            {text: `Go back`, navigateToIdx: 2}
        ]
    },
    {
        id: 29,
        question: `You sneak up on the newfound sounds and smells by silencing your steps the best you can. As you approach you find yourself in a small camp composed of goblins and thier tribe leader feasting on something you can't make out. What will you do?`,
        options: [
            {text: `Attempt to assasinate the leader`, navigateToIdx: 31},
            {text: `Try to talk`, navigateToIdx: 32},
            {text: `Go back`, navigateToIdx: 2}
        ]
    },
    {
        id: 30,
        question: `As you start to gather intelligence about the sounds you quickly come to realize that it is a pack of goblins within a camp they made in the dungeon. They are celebrating thier newest catch, a fellow adventurer. As their tribe leader takes the first bite of the newly cooked catch. What will you do?`,
        options: [
            {text: `Barge in and start swinging`, navigateToIdx: 100},
            {text: `Try to talk`, navigateToIdx: 32},
            {text: `Go back`, navigateToIdx: 2}
        ]
    },
    {
        id: 31,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 32,
        question: `You have cleared the dungeon!`,
        options: [
            {text: `left`, navigateToIdx: 100},
            {text: `right`, navigateToIdx: 100},
            {text: `forward`, navigateToIdx: 100}
        ]
    },
    {
        id: 33,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 34,
        question: `You have cleared the dungeon!`,
        options: [
            {text: `left`, navigateToIdx: 100},
            {text: `right`, navigateToIdx: 100},
            {text: `forward`, navigateToIdx: 100}
        ]
    },
    {
        id: 35,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 36,
        question: `You have cleared the dungeon!`,
        options: [
            {text: `left`, navigateToIdx: 100},
            {text: `right`, navigateToIdx: 100},
            {text: `forward`, navigateToIdx: 100}
        ]
    },
    {
        id: 37,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 38,
        question: `You have cleared the dungeon!`,
        options: [
            {text: `left`, navigateToIdx: 100},
            {text: `right`, navigateToIdx: 100},
            {text: `forward`, navigateToIdx: 100}
        ]
    },
    {
        id: 39,
        question: `You choose forward`,
        options: [
            {text: `left`, navigateToIdx: 4},
            {text: `right`, navigateToIdx: 5},
            {text: `forward`, navigateToIdx: 6}
        ]
    },
    {
        id: 40,
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