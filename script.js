// ===========================
// GET ELEMENTS
// ===========================

const loadingScreen = document.getElementById("loading-screen");
const envelopeScreen = document.getElementById("envelope-screen");
const passwordScreen = document.getElementById("password-screen");

const envelope = document.getElementById("envelope");

const unlockBtn = document.getElementById("unlock");

const passwordInput = document.getElementById("password");

const wrongMessage = document.getElementById("wrong-message");

const questionScreen = document.getElementById("question-screen");
const wrongPasswordScreen = document.getElementById("wrong-password-screen");
const correctPasswordScreen = document.getElementById("correct-password-screen");
const birthdayScreen = document.getElementById("birthday-screen");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const giftBtn = document.getElementById("giftBtn");
const letterScreen = document.getElementById("letter-screen");

const typingText = document.getElementById("typingText");

const continueBtn = document.getElementById("continueBtn");
const memoriesScreen = document.getElementById("memories-screen");

const finalBtn = document.getElementById("finalBtn");
const giftScreen = document.getElementById("gift-screen");

const videoScreen = document.getElementById("video-screen");

const giftBox = document.getElementById("giftBox");
const motiName = document.getElementById("motiName");

const birthdayVideo = document.getElementById("birthdayVideo");
const bgMusic = document.getElementById("bgMusic");
const collageScreen = document.getElementById("collage-screen");
const magicOverlay = document.getElementById("magicOverlay");

const magicHeart = document.getElementById("magicHeart");

// Change the name automatically
motiName.innerHTML = CONFIG.boyfriendName;

// ===========================
// LOADING SCREEN
// ===========================

setTimeout(() => {

    loadingScreen.classList.remove("active");

    envelopeScreen.classList.add("active");

}, 4000);

// ===========================
// ENVELOPE CLICK
// ===========================

envelope.addEventListener("click", () => {

    envelope.style.transform = "scale(1.15) rotate(8deg)";

    setTimeout(() => {

        envelopeScreen.classList.remove("active");

        passwordScreen.classList.add("active");

    }, 500);

});

// ===========================
// PASSWORD CHECK
// ===========================

unlockBtn.addEventListener("click", () => {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === CONFIG.password) {

        wrongMessage.innerHTML = "";

        bgMusic.play().catch(() => {});

        passwordScreen.classList.remove("active");

        correctPasswordScreen.classList.add("active");

        setTimeout(() => {

            correctPasswordScreen.classList.remove("active");

            questionScreen.classList.add("active");

        }, 3000);

    } else {

        shakeCard();

        setTimeout(() => {

            passwordScreen.classList.remove("active");

            wrongPasswordScreen.classList.add("active");

            setTimeout(() => {

                wrongPasswordScreen.classList.remove("active");

                passwordScreen.classList.add("active");

                passwordInput.value = "";

                passwordInput.focus();

            }, 3000);

        }, 500);

    }

});

// ===========================
// SHAKE ANIMATION
// ===========================

function shakeCard(){

    const card = document.querySelector(".card");

    card.animate([

        {transform:"translateX(-8px)"},

        {transform:"translateX(8px)"},

        {transform:"translateX(-8px)"},

        {transform:"translateX(8px)"},

        {transform:"translateX(0px)"}

    ],{

        duration:400

    });

}

// ===========================
// ENTER KEY SUPPORT
// ===========================

passwordInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        unlockBtn.click();

    }

});

// ===========================
// FLOATING HEARTS
// ===========================

setInterval(createHeart,600);

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.animationDuration=(8+Math.random()*6)+"s";

    document.getElementById("floating-hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },14000);

}
// ======================================
// NO BUTTON RUNS AWAY
// ======================================

noBtn.addEventListener("mouseover", () => {

    const x = (Math.random() * 300) - 150;
    const y = (Math.random() * 150) - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});

// ======================================
// YES BUTTON
// ======================================

yesBtn.addEventListener("click", () => {

    questionScreen.classList.remove("active");

    birthdayScreen.classList.add("active");

    createConfetti();

});

// ======================================
// GIFT BUTTON
// ======================================

giftBtn.addEventListener("click", () => {

    birthdayScreen.classList.remove("active");

    letterScreen.classList.add("active");

    typeLetter();

});
// ======================================
// CONFETTI
// ======================================

function createConfetti(){

    const colors = [
        "#ff5c8a",
        "#ffd166",
        "#7bdff2",
        "#b2f7ef",
        "#f7aef8"
    ];

    for(let i = 0; i < 120; i++){

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay = Math.random() + "s";

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 4000);

    }

}

// ===============================
// TYPEWRITER EFFECT
// ===============================

function typeLetter() {

    typingText.innerHTML = "";

    let i = 0;

    const message = CONFIG.loveLetter;

    const timer = setInterval(() => {

        typingText.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(timer);

        }

    }, 40);

}

continueBtn.addEventListener("click", () => {

    letterScreen.classList.remove("active");

    memoriesScreen.classList.add("active");

});
// ======================================
// GO TO GIFT SCREEN
// ======================================

finalBtn.addEventListener("click", () => {

    memoriesScreen.classList.remove("active");

    giftScreen.classList.add("active");

});
// ======================================
// OPEN GIFT
// ======================================

giftBox.addEventListener("click", () => {

    giftBox.style.pointerEvents = "none";

    giftBox.classList.add("opening");

    createGiftHearts();

    setTimeout(() => {

        magicOverlay.classList.add("show");

        createSparkles();

    }, 1200);

    setTimeout(() => {

        magicHeart.classList.add("show");

    }, 2200);

    setTimeout(() => {

        magicOverlay.classList.remove("show");

        giftScreen.classList.remove("active");

        videoScreen.classList.add("active");

        revealVideoMessage();

    }, 4200);

});
// ======================================
// HEART EXPLOSION
// ======================================

function createGiftHearts(){

    for(let i = 0; i < 35; i++){

        const heart = document.createElement("div");

        heart.className = "gift-heart";

        heart.innerHTML = "❤️";

        heart.style.left = "50%";

        heart.style.top = "55%";

        heart.style.setProperty("--x",(Math.random()*500-250)+"px");

        heart.style.setProperty("--y",(-300-Math.random()*250)+"px");

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}
function revealVideoMessage(){

    const intro = document.getElementById("videoIntro");
    const video = document.getElementById("birthdayVideo");

    const message =
`Every memory with you has been my favourite gift...

Now it's my turn to give you one. ❤️`;

    let i = 0;

    intro.innerHTML = "";

    const timer = setInterval(() => {

        intro.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(timer);

            setTimeout(() => {

                video.style.display = "block";
                bgMusic.pause();

                setTimeout(() => {

                    video.style.opacity = "1";

                },100);

                
            },1800);

        }

    },40);

}
function createSparkles(){

    const icons = ["✨","⭐","💖","🌸"];

    for(let i = 0; i < 45; i++){

        const s = document.createElement("div");

        s.className = "sparkle";

        s.innerHTML = icons[Math.floor(Math.random() * icons.length)];

        s.style.left = Math.random() * 100 + "vw";

        s.style.bottom = "-20px";

        s.style.setProperty("--x",(Math.random() * 250 - 125) + "px");

        s.style.animationDelay = Math.random() + "s";

        document.body.appendChild(s);

        setTimeout(() => {

            s.remove();

        },3500);
    

    }

}
// ======================================
// VIDEO FINISHED
// ======================================

birthdayVideo.addEventListener("ended", () => {

    birthdayVideo.style.opacity = "0";

    setTimeout(() => {

        videoScreen.classList.remove("active");

        collageScreen.classList.add("active");
        bgMusic.play().catch(() => {});

        animateCollage();

    },1000);

});
// ======================================
// COLLAGE ANIMATION
// ======================================

function animateCollage(){

    const collage = document.getElementById("finalCollage");
    const message = document.getElementById("finalMessage");
    const bubu = document.getElementById("finalBubu");

    // Reset animation every time
    collage.style.opacity = "0";
    collage.style.transform = "scale(.9)";
    message.classList.remove("show");
    bubu.classList.remove("show");

    // Animate collage
    setTimeout(() => {

        collage.style.opacity = "1";
        collage.style.transform = "scale(1)";

    },300);

    // Animate message
    setTimeout(() => {

        message.classList.add("show");

    },1500);

    // Animate Bubu & Dudu
    setTimeout(() => {

        bubu.classList.add("show");

    },2800);

}
// ======================================
// CURSOR FOLLOWER
// ======================================

const cursorFollower = document.getElementById("cursorFollower");

document.addEventListener("mousemove", (e) => {

    cursorFollower.style.left = e.clientX + "px";

    cursorFollower.style.top = e.clientY + "px";

});