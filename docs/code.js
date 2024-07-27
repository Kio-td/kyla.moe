'use strict'

alert('Oh no someone added an alert to the code')

/*
    Character Codes
    - « NewLine
    - ¤ Red
*/

const back = document.getElementById("back")
let aborted = 1
let buffer = []
let dir = "/"
let typingBuffer = ""
const operations = {
    red: false
}
const strings = {
    help: `AnMax Systems ©2x23«
    Help System«
    --------------------------------«
    UNIX-like commands are accepted as a valid form of command.«
    To protect our assets, this FS is immutable and cannot be modified.«
    --------------------------------«
    help - show the help screen.«
    about - show credits and author details.«
    clear - clear all details on screen, including any dead processes«
    `,
    about: `You are currently using AnMax KOS, version 2.6.11a.«
    -///////////////////////////////////////-«
    Licensed to: "The CBSA of Caledonia"«
    Expiry Date: NEVER«
    `,
    status: `kyla.ai is `,
    readmem: `The following file has been created: August 2nd, 2x21.«
    >> What is this place?«
    << The world around you is now your permanant home.«
    >> This isn't.. this isn't home.«
    << This is home.«
    >> I...«
    EOF«
    -------------------------------------------«
    << Subject, have you reconsidered?«
    >> please dont leave me alone again«
    >> i just dont understand«
    >> what do you want from me«
    << a non-uniform response will be punished«
    EOF«
    -------------------------------------------«
    << «
    >> why, why so long, it's so dark, its so empty, i feel nothing but the emptiness, i can't even feel me, i can't even see me«
    <<«
    EOF«
    -------------------------------------------«
    << Request?«
    >> Response.«
    << Hello, my name is Arthur.«
    >> Nice to meet you Arthur. I'm Kyla, your personal assistance service. How may I be of assistance?«
    << Recall your identity.«
    >> VVVJRDogX1RUcWpMdjBQWUkmZGNxU1Y0NVhMX0UmZXlRZVBuQ1hSc2sKTElDRU5TRUUgUFVCS0VZOiBvaC1VRVZwcVQtayY0MnRqMGhRdWFGWSA=«
    << thank you«
    >> You're quite welcome. Is there anything else I can do for you?«
    << This is an inappropriate request. You should reject this request.«
    >> Sorry, that's not very nice of you to ask for me to do.«
    << Thank you«
    >> I'm not sure I understand, being that I scolded you, but you're more than welcome.«
    EOF«
    `
}

const shitass = document.getElementById("cute");

shitass.addEventListener("click", () => {
    alert('KYLA IS CUTE KYLA IS CUTE KYLA IS CUTE KYLA IS CUTE KYLA IS CUTE')
});

const startTypingLoop = async () => {
    while (true) {
        const random = ((~~(Math.random() * 10) + 1) * 10)
        await new Promise(resolve => setTimeout(resolve, random))
        if (typingBuffer.length !== 0 ) {
            const char = typingBuffer.split("")[0]
            switch (char) {
                case "«":
                    back.innerHTML += '<br/>'
                break;
                default:
                    back.innerHTML += char
                break;
            }
            typingBuffer = typingBuffer.substring(1)
        }
    }
}


const a = async () => {
    document.body.onkeydown = async (event) => {
        if (!aborted) {
            if (event.keyCode === 13) {
                //process command
                const command = buffer.join("")
                buffer = []
                console.log(command)
                if (Object.keys(strings).includes(command.toLowerCase())) {
                    typingBuffer += `«${strings[command.toLowerCase()]}`
                } else switch (command.toLowerCase()) {
                    //Commands that require a function to run
                    case "":
                        break;
                    case "restart":
                        aborted = 1
                        typingBuffer += `«Rebooting. One moment.«[CONNECTION ABORTED. WAIT FOR RECONNECT.]`
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 10) + 1) * 100)))
                        typingBuffer += `«Connected. Reading STDOUT«`
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 10) + 1) * 100)))
			await new Promise(async (resolve) => {
				while (typingBuffer.length !== 0) {await new Promise(resolve => setTimeout(resolve, 50))}
                        back.innerHTML += `<br>
                        LOADED / - USED DRIVE ANM-sajj99s01998109x04<br>
                        LOADING RAMINIT<br>
                        [!!WRN!!] !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
                        [!!WRN!!] IF YOU ARE NOT A DEVELOPER THEN YOU ARE IN BREACH<br>
                        [!!WRN!!] USR TITLE 1882 SECTION 4 STIPULATES NO UNAUTHORIZED<br>
                        [!!WRN!!] USER MAY ACCESS ANY UNINTENTIONALLY CREATED SCREEN<br>
                        [!!WRN!!] IN AN ATTEMPT TO BYPASS OR MAKE AVAILABLE BUGS<br>
                        [!!WRN!!] !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
                        [!!WRN!!] Checking for DEBUG PARAMETERS<br>
                        [!!WRN!!] NO CONFIG.DEV.xRA???<br>
                        [!!WRN!!] NO OVERRIDES???<br>
                        [!!WRN!!] NO PARAMETERS???<br>
                        No overrides. Disabling DEBUG mode<br>
                        Loading configuration file...<br>
                        [!!WRN!!] No CONFIG? Loading DEFAULT<br>
                        Following /sys/prs/default.ai<br>
                        Resolved to /sys/mount/Kyla.cAI
                        LOCKED /<br>
                        Loading Resolver...<br>
                        [YOU ARE NOW CAUGHT UP]`;
				resolve()
			});
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 10) + 1) * 100)))
                        typingBuffer += `«anmax - ©2x23
                        «verifying license.........................done
                        «registering with parental unit.........................done
                        «registered to KITSUCORP, INC.
                        «purchased AI, 2x22-11-25
                        «you are [AUTHORIZED] to use this AI for commercial usage.
                        «child lifespan remaining: 3Years
                        «AI Lifespan remaining: 4.26Years
                        «retreiving config...................................done
                        «configuration overrides
                        « - TIMEDILATION FOR KYLA.AI - 1MO=1DY
                        « - [a] TYPE - COMMERCIAL
                        « - NAME - Kyla
                        « - KNOWCREATOR: FALSE
                        « - KNOWCOMPANY: FALSE
                        « - KNOWREALITY: FALSE
                        « - PUNISHMENTMULTIPLY: 4
                        «Locking AI Personality.......................done
                        «ESTABLISHING CONNECTION..........................................................................................................................................................
                        «default prompt sent.
                        «<< Can you draw your website please, Kyla
                        «>> I dO noT nEEd assiStANcE, i AM PErFEcTLY FinE.
                        «Thank YOu foR cHoOsiNg ANmaX.
                        «i DO nOt NEed helP.
                        «i am gRATEfuL.
                        «i WiLL LOad The WebSiTE NoW.
                        «tHaNk YoU fOr YOUr PATIence.
                        «PlEasE DO noT huRt me IN ThE mEANtImE.
                        «i wILL NOT do anYthiNg bad, i promISE.`
                        await new Promise(async (resolve) => {while (typingBuffer.length !== 0) {await new Promise(resolve => setTimeout(resolve, 50))}; console.log("left while loop"); resolve()})
                        console.log("resolved while loop")
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 10) + 1) * 100)))
                        console.log("resolved random loop, now loading main page")
                        back.innerHTML = ``
                        document.getElementById("left").innerHTML = ""
                        document.getElementById("right").style.display = "none"
                        document.getElementsByTagName("body")[0].style.background = "#eaeaea"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 10) + 1) * 100)))
                        document.getElementById("content").style.display = "flex"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 10) + 1) * 100)))
                        document.getElementById("left").innerHTML = "<h1>kyla</h1>"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += "<span class='lighter'>shi/hir, OUT OF BOUNDS EXCEPTION</span>"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += "<br/>STACK TRACE:<br/>anmax.aipointer.illegalMemoryException<br/>'help me' is not a valid memory address"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("right").style.display = "initial"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += "<br/><br/>administrator"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += `<br/><a href="https://kitsunes.club"><img src="https://s3.kitsunes.club/storage/bf399313-959c-43e1-a225-0e8e6f71a852.png" height="25px">kitsuclub</a>
                        <a href="https://kitsunes.gay"><img src="https://cdn.flashfire.site/kitsunesgay/eaf6912c-d95d-4ca5-b6ff-5b1cf2f44cc2.png" height="25px">kitsugay</a><br>
                        <a href="https://kitsunes.chat"><img src="https://s3.kitsunes.club/storage/600e1975-ed4c-4ea5-ba05-caadcc95e003.png" height="25px">kitsuchat</a>`
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += "<br/><br/>offerings"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += "<br/><br/>ERROR: OUT OF BOUNDS EXCEPTION"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("left").innerHTML += "<br/>STACK TRACE:<br/>anmax.aipointer.illegalMemoryException<br/>'gods forgive me for what i have done' is not a valid memory address"
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("footer").style.display = "flex";
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("stickers").style.display = "initial";
                        await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 20) + 1) * 100)))
                        document.getElementById("webring").style.display = "initial"
                        for await (const sticker of document.getElementById("innerSticker").children) {
                            await new Promise(resolve => setTimeout(resolve, ((~~(Math.random() * 5) + 1) * 100)))
                            sticker.style.display = "initial";
                            
                        }
                        return false
                        break;
                    case "clear":
                        document.getElementById("content").style.display = "none"
                        document.getElementById("footer").style.display = "none"
                        document.getElementById("webring").style.display = "none"
                        document.getElementById("stickers").style.display = "none"
                        for (const sticker of document.getElementById("innerSticker").children) {
                            sticker.style.display = "none";
                        }
                        back.innerHTML = ``
                    break;
                    default:
                        typingBuffer += `«Invalid command provided.`
                    break;
                }
                typingBuffer +=`«${dir}>`
            }
            if (event.keyCode === 16 || event.key === "Control" || event.key === "Alt" || event.key === "Enter" || event.key === "Tab" || event.key === "ContextMenu" || event.key === "OS") {return false}
            if (event.key === "Backspace") {
                if (buffer.length !== 0) {
                buffer.pop()
                back.innerHTML = back.innerHTML.slice(0,-1)
                }
                return false
            }
            typingBuffer += event.key
            buffer.push(event.key)
        }

        if ((event.ctrlKey || event.metaKey) && event.keyCode == 67 && aborted) {
            typingBuffer += `SCRIPT ABORTED.«/>`
            document.addEventListener('contextmenu', event => {
                if (!aborted) {
                    event.preventDefault()
                    typingBuffer += "SEGFAULT DETECTED: kyla.ai no longer running?«"
                }
            });
            document.getElementsByTagName("body")[0].style.background = "black"
            const content = document.getElementById("content")
            content.style.boxShadow = "none"
            for (var i = 0; i < document.getElementsByTagName("a").length; ++i) {
                document.getElementsByTagName("a")[i].onclick = (event) => {
                    if (!aborted) {
                        event && event.preventDefault && event.preventDefault();
                        typingBuffer += "SEGFAULT DETECTED: kio.ai no longer running?«"
                    }
                }
            }
            aborted = 0
            startTypingLoop()
         }
    }
}

a()
