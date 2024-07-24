const prompts = [
    {
        id: 0,
        question: `You are met with the huge iron doors of a dungeon. Do you want to go left, right, or forward?`,
        options: [
            {text: `left`, navigateToIdx: 1},
            {text: `right`, navigateToIdx: 2},
            {text: `forward`, navigateToIdx: 3}
        ],
        imageSrc: `url(https://cdn1.epicgames.com/ue/product/Screenshot/Door6-1920x1080-53f0b84a2c5d0301a48a41ffca467dd2.png?resize=1&w=1920)`
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
        ],
        imageSrc: `url(../assets/images/image1.jpg)`
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
        question: `You find yourself gliding through a path with no troubles as you find a room gleaming with light, as you find a treasure room! What will you do now? `,
        options: [
            {text: `loot the chest`, navigateToIdx: 7},
            {text: `check for traps`, navigateToIdx: 8},
            {text: `leave it`, navigateToIdx: 9}
        ]
    },
    {
        id: 5,
        question: `You are faced with many makeshift spikes and traps. You have been ensnared in a trap! How will you escape? `,
        options: [
            {text: `Attempt to wiggle out`, navigateToIdx: 27},
            {text: `Attempt to cut yourself out`, navigateToIdx: 26},
            {text: `Wait for help`, navigateToIdx: 25}
        ],
        imageSrc: `url(../assets/images/image8.jpg)`
    },
    {
        id: 6,
        question: `You walk deeper into the dungeon soft sounds of pattering feet grow louder as you venture in as you come face to face with a pack of goblins! What do you do!?`,
        options: [
            {text: `fight`, navigateToIdx: 54},
            {text: `run`, navigateToIdx: 0},
            {text: `negotiate`, navigateToIdx: 55}
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
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 0}
        ]
    },
    {
        id: 12,
        question: `You are met with a wounded mage that has a bloodied cloth wrapped around their torso and a staff with a purple light ever so fading as time slowly crawls by. What will you do?`,
        options: [
            {text: `Help them with the few health potions you have`, navigateToIdx: 42},
            {text: `Take thier staff as they no longer need it`, navigateToIdx: 43},
            {text: `Leave them to bleed out as you venture forward`, navigateToIdx: 44}
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
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
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
        question: `You focus on trying to get your arcane power back but you start to get drowned in your own focus as you get snapped back to reality as the dragon unleashes a furious roar. You don't have time to focus! What will you do? `,
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
        question: `You have made it out of the dungeon! You win!`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 19},
            {text: ``, navigateToIdx: 19}
        ]
    },
    {
        id: 22,
        question: `You find countless legendary artifacts and mounds of gold that can last you a lifetime. You take as much as you can and head for the exit.`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: `take the exit`, navigateToIdx: 21},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 23,
        question: `You find enough scales to fill your bag to the brim along with an elemental sack that was contained inside the dragon's throat`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: `take the exit`, navigateToIdx: 21},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 24,
        question: `You try talking to the dragon, though unfortunately dragon's aren't ones to want to talk to those that infiltrate their homes. The dragon ready's its breath and unleashes it upon your body reducing it to ash. You Died`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 25,
        question: `As you wait for help to come the trap fully ensnares you and drains the energy from you as you wait until eventually you hear the soft patter of small feet and lots of them. As a hunting group of goblins come and stab you to death. You Died`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
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
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
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
            {text: `Barge in and start swinging`, navigateToIdx: 34},
            {text: `Try to talk`, navigateToIdx: 32},
            {text: `Go back`, navigateToIdx: 2}
        ]
    },
    {
        id: 31,
        question: `You grab one of your many knives and line up a throw, straight into the leaders throat. As the knife slices through the air and with a thump lands into his throat causing him to collapse and take his final breath. What will you do now?`,
        options: [
            {text: `Claim yourself as new tribe leader`, navigateToIdx: 33},
            {text: `Cull the rest of them`, navigateToIdx: 34},
            {text: `Sneak into the shadows`, navigateToIdx: 35}
        ]
    },
    {
        id: 32,
        question: `You approach and clear your throat causing the music to stop and chatter to silence, as you attempt to start to converse with goblins. Then a thought crosses your mind, they can't understand you and you can't understand them. As they ready themselves for a fight. What will you do now?`,
        options: [
            {text: `fight`, navigateToIdx: 34},
            {text: `target the leader`, navigateToIdx: 31},
            {text: `Try to escape`, navigateToIdx: 100}
        ]
    },
    {
        id: 33,
        question: `You come forward and proclaim yourself the new leader of the goblins as they keep watching you in fear as you have just killed thier strongest. They start to get on thier knees and respect that you are now their new leader. What will you do?`,
        options: [
            {text: `Command them to find the dragon`, navigateToIdx: 36},
            {text: `Slaughter the goblins`, navigateToIdx: 5},
            {text: `Inspect the camp`, navigateToIdx: 6}
        ]
    },
    {
        id: 34,
        question: `You ready your weapon and sprint in and start swinging with bravery and courage behind every swing. The blade singing and dripping with blood as you have killed the entire camp. Exhausted you take a while to rest and clean yourself up. You see two options for paths or you could take the gold and leave. What will you do now?`,
        options: [
            {text: `Go left `, navigateToIdx: 4},
            {text: `Go right`, navigateToIdx: 12},
            {text: `Loot and leave`, navigateToIdx: 21}
        ]
    },
    {
        id: 35,
        question: `You slip into the shadows faster than any goblin can spot you as you are now unseen and unheard. You watch as the goblins start to grow furious and while some others mourn the loss of thier leader. What will you do now?`,
        options: [
            {text: `Pick them off one by one`, navigateToIdx: 37},
            {text: `Fight them`, navigateToIdx: 34},
            {text: `Stay stealthed`, navigateToIdx: 38}
        ]
    },
    {
        id: 36,
        question: `You command the goblins to find the dragon, as they lead you to a secret passage that goes straight into the lair of the scaled beast. What will you do?`,
        options: [
            {text: `Command them to fight for you`, navigateToIdx: 39},
            {text: `Fight the dragon yourself`, navigateToIdx: 18},
            {text: `Fight with the goblins`, navigateToIdx: 41}
        ]
    },
    {
        id: 37,
        question: `You wait in the shadows and you watch them one by one pass by as each time they pass by you throw another knife killing them. As time passes their numbers dwindle to none. You search the room and find 2 paths and enough gold to call it a day. What will you do now?`,
        options: [
            {text: `Go left`, navigateToIdx: 4},
            {text: `Go right`, navigateToIdx: 12},
            {text: `Loot and leave`, navigateToIdx: 21}
        ]
    },
    {
        id: 38,
        question: `You keep completely silent as you watch the goblin camp roar to life as they march down the path where you came from leaving the camp empty. You enter the camp and find enough gold to retire for the day along with 2 paths. What will you do now?`,
        options: [
            {text: `Go left`, navigateToIdx: 4},
            {text: `Go right`, navigateToIdx: 12},
            {text: `Loot and leave`, navigateToIdx: 21}
        ]
    },
    {
        id: 39,
        question: `You command the goblins to fight the dragon, essentially sending them to their own demise they do as much damage as they can before all of them are slaughtered. What will you do now? `,
        options: [
            {text: `Finish the dragon`, navigateToIdx: 18},
            {text: `Heal the dragon`, navigateToIdx: 40},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 40,
        question: `You take out some potions and offer it to the dragon as if the goblins were the true aggressors and not you. The dragon weakened takes them and accepts your generosity and gestures that you take some treasure and leave. What will you do now?`,
        options: [
            {text: ``, navigateToIdx: 121},
            {text: `Take the treasure and leave`, navigateToIdx: 21},
            {text: ``, navigateToIdx: 121}
        ]
    },
    {
        id: 41,
        question: `You run in charging with the goblins but as you finally reach the dragon you notice it had reeled back and readied its breath attack and as it unleashes it. You and the goblins were burnt to ash. You Died`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 42,
        question: `You take out some potions and help the mage get back to a healthy condition. The mage then shows his gratitude and offers to help you finish the dungeon with what powers he has left. What will you do now? `,
        options: [
            {text: `Venture deeper into the dungeon together`, navigateToIdx: 47},
            {text: `Go alone`, navigateToIdx: 45},
            {text: `Tell the mage you only want his staff`, navigateToIdx: 46}
        ]
    },
    {
        id: 43,
        question: `You grab the staff from the mage that is weak and bleeding and easily rip it from his hands. What will you do now?`,
        options: [
            {text: `Go deeper into the dungeon`, navigateToIdx: 46},
            {text: `Help the mage`, navigateToIdx: 21},
            {text: ``, navigateToIdx: 21}
        ]
    },
    {
        id: 44,
        question: `You glare at the mage with a cold gaze and press forward knowing he will only slow you down when it comes down to killing the dragon. What will you do now?`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: `Go deeper into the dungeon`, navigateToIdx: 45},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 45,
        question: `You venture forward finding yourself deeper than you thought you would be and infront of you is a door made of obsidian. You open the door and before you is the mounds of treasure and gold as promised. Now it is time to face the dragon. What will you do now? `,
        options: [
            {text: `Fight the dragon head on`, navigateToIdx: 18},
            {text: `Talk to the dragon`, navigateToIdx: 24},
            {text: `Hide`, navigateToIdx: 17}
        ]
    },
    {
        id: 46,
        question: `You venture forward finding yourself deep in the dungeon and finally at the door to the dragon's hoard. You enter the room and once inside you ready yourself to fight the scaled beast. What will you do now?`,
        options: [
            {text: `Use the staff`, navigateToIdx: 48},
            {text: `Fight the dragon`, navigateToIdx: 18},
            {text: `Hide`, navigateToIdx: 17}
        ]
    },
    {
        id: 47,
        question: `As you and mage venture deeper he promises that this will be quick if you allow him to use his spell. The two of you find the obsidian door and go in to find the dragon's hoard. Once inside the fight is on. What will you do now?`,
        options: [
            {text: `Let the mage cast his spell`, navigateToIdx: 50},
            {text: `Fight the dragon together`, navigateToIdx: 49},
            {text: `Hide`, navigateToIdx: 17}
        ]
    },
    {
        id: 48,
        question: `You pull out the staff and whisper the incantation written upon the wooden staff, feeling a bit of your humanity leave your body, a purple ghasly orb appears and launches itself into the dragon. For a second the dragon comes charging towards you but then his body turn a deathly shade of violet. His body seizes up and convulses and his body lays limp. The incantation was a spell called death wish and you had slayed the dragon. What will you do now? `,
        options: [
            {text: `Loot the hoard`, navigateToIdx: 22},
            {text: `Loot the dragon`, navigateToIdx: 23},
            {text: `Leave`, navigateToIdx: 21}
        ]
    },
    {
        id: 49,
        question: `You rush forward bringing down your sword over and over again as the mage cast a spell that empowers you to finally crush and cut into the dragon's scales. The dragon after multiple hits from a sword reinforced by magic is killed and nothing but the dragon's treasures remain along with it's corpse. What will you do now?`,
        options: [
            {text: `Loot the hoard`, navigateToIdx: 22},
            {text: `Loot the dragon`, navigateToIdx: 23},
            {text: `Leave`, navigateToIdx: 21}
        ]
    },
    {
        id: 50,
        question: `You watch as the mage prepares his spell and with a whisper the dragon seems to fall dead. After a couple of seconds a strange purple sphere comes out of the dragon and engulfs the mage. The mage laughs like a true villian as he states that now his plan is in action. He absorbed the soul of the dragon and is now looking to absorbs your soul. What will you do now?`,
        options: [
            {text: `Fight the mage`, navigateToIdx: 51},
            {text: `Try to talk`, navigateToIdx: 52},
            {text: `Rush for the exit`, navigateToIdx: 21}
        ]
    },
    {
        id: 51,
        question: `The mage gets ready with his staff as he points it towards you while starting to whisper something. What will you do now? `,
        options: [
            {text: `Rush in with your sword`, navigateToIdx: 56},
            {text: `Try to throw a knife at his staff`, navigateToIdx: 53},
            {text: `Try to talk`, navigateToIdx: 52}
        ]
    },
    {
        id: 52,
        question: `You bring up that if it were not for you he would not be alive. The mage stops his incantation and ponders your words. He motions you to get the treasure and get out for no one will stop what he is planning. What will you do now?`,
        options: [
            {text: ``, navigateToIdx: 210},
            {text: `Take the treasure and leave`, navigateToIdx: 21},
            {text: ``, navigateToIdx: 210}
        ]
    },
    {
        id: 53,
        question: `You pull out a knife in a hurry and throw it at his staff but the mage reinforced by the dragon soul does not falter and finishes his spell. Your soul begins to spill out from you body and enter a purple sphere. You died`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
        ]
    },
    {
        id: 54,
        question: `You ready your sword and fight the goblins and after a couple of minutes you are the one standing victorious. After the fight you look around and see 3 paths What will you do now?`,
        options: [
            {text: `Go left`, navigateToIdx: 4},
            {text: `Go Right`, navigateToIdx: 5},
            {text: `Go forward`, navigateToIdx: 12}
        ]
    },
    {
        id: 55,
        question: `You try to negotiate with the goblins in a normal way by talking to them first but you slowly realize they do not speak the same language as you nor do they care what you have to say as they only care about self benefit. What will you do now? `,
        options: [
            {text: `Offer them gold`, navigateToIdx: 57},
            {text: `Offer them rations`, navigateToIdx: 57},
            {text: `fight`, navigateToIdx: 54}
        ]
    },
    {
        id: 56,
        question: `You try your best to close the distance between you and mage as you try to rush in with your sword. As you almost get a swing off the mage had finished his spell and your soul had started to leak out of your body into a purple like sphere. The mage had taken your soul and absorbed it. You died`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: ``, navigateToIdx: 0},
            {text: ``, navigateToIdx: 100}
        ],
        imageSrc: `assets/images/fantasy adventure start.jpg`
    },
    {
        id: 57,
        question: `You try to offer the goblins something thinking they would at least not try to fight you if you gave them something but instead they surrounded you in the time you took to grab an offering of sorts. You are surrounded! You have no other choice, fight!!`,
        options: [
            {text: ``, navigateToIdx: 100},
            {text: `Fight!!`, navigateToIdx: 54},
            {text: ``, navigateToIdx: 100}
        ]
    }
]
/*------------------------Cached Element References---------------------*/
const questionEl = document.querySelector(`#question`)
const buttonA = document.querySelector(`#option-a`)
const buttonB = document.querySelector(`#option-b`)
const buttonC = document.querySelector(`#option-c`)
const restartBu = document.querySelector(`#reset`)
const bodyEl = document.querySelector(`body`)

/*-----------------------event listeners------------------*/
buttonA.addEventListener(`click`, handleClickButtonA)
buttonB.addEventListener(`click`, handleClickButtonB)
buttonC.addEventListener(`click`, handleClickButtonC)
restartBu.addEventListener(`click`, init)

/*-----------------------Variables-------------------*/
let currPromptIdx = 0
let currPrompt
let winner = false
const winId = 21
/*----------------------functions---------------*/

function init() {
    currPromptIdx = 0
    currPrompt = prompts[currPromptIdx]
    renderBackground()
    renderQuestions()
}

init()

function checkForWinner() {
    if (currPrompt.id === winId) {
        winner = true
    }
}

function renderBackground() {
    if (prompts[currPromptIdx].imageSrc != undefined) {
        bodyEl.style.backgroundImage = prompts[currPromptIdx].imageSrc
    }
}

function renderQuestions() {
    questionEl.textContent = currPrompt.question
    if (currPrompt.options[0].text === "") {
        buttonA.style.visibility = "hidden"
    } else {
        buttonA.textContent = currPrompt.options[0].text
        buttonA.style.visibility = "visible"  
    }
    if (currPrompt.options[1].text === "") {
        buttonB.style.visibility = "hidden"
    } else {
        buttonB.textContent = currPrompt.options[1].text
        buttonB.style.visibility = "visible"  
    }
    if (currPrompt.options[2].text === "") {
        buttonC.style.visibility = "hidden"
    } else {
        buttonC.textContent = currPrompt.options[2].text
        buttonC.style.visibility = "visible"  
    }
}

function handleClickButtonA() {
    currPromptIdx = currPrompt.options[0].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    checkForWinner()
    renderBackground()
    renderQuestions()
}

function handleClickButtonB() {
    currPromptIdx = currPrompt.options[1].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    checkForWinner()
    renderBackground()
    renderQuestions()
}

function handleClickButtonC() {
    currPromptIdx = currPrompt.options[2].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    checkForWinner()
    renderBackground()
    renderQuestions()
}