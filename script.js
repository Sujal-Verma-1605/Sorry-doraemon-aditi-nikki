// ==========================
// PAGE NAVIGATION
// ==========================

const pages = document.querySelectorAll(".page");
let current = 0;

function show(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

}

document.querySelectorAll(".next").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(current < pages.length-1){

            current++;

            show(current);

            burstHearts();

        }

    });

});

document.querySelectorAll(".back").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(current > 0){

            current--;

            show(current);

        }

    });

});

// ==========================
// DARK MODE
// ==========================

const themeBtn =
document.querySelector(".theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

    }else{

        themeBtn.innerHTML = "🌙";

    }

});

// ==========================
// TYPEWRITER
// ==========================

const text =
"I Am Sorry ❤️";

let letter = 0;

const typingTarget =
document.getElementById("typing");

function typeWriter(){

    if(letter < text.length){

        typingTarget.innerHTML +=
        text.charAt(letter);

        letter++;

        setTimeout(typeWriter,100);
    }

}

typeWriter();

// ==========================
// GIFT BOX
// ==========================

const giftBox =
document.querySelector(".gift-box");

if(giftBox){

giftBox.addEventListener("click",()=>{

document.getElementById("giftMessage")
.style.display="block";

burstHearts();

confetti({

particleCount:150,
spread:120

});

});

}

// ==========================
// AUTO IMAGE SLIDER
// ==========================

const slides =
document.querySelectorAll(".slide");

let slideIndex = 0;

function autoSlide(){

    slides[slideIndex]
    .classList.remove("active");

    slideIndex++;

    if(slideIndex >= slides.length){

        slideIndex = 0;

    }

    slides[slideIndex]
    .classList.add("active");

}

setInterval(autoSlide,3000);

// ==========================
// HEART RAIN
// ==========================

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    Math.random()*20+20+"px";

    document.body.appendChild(heart);

    let topPos = -50;

    const fall = setInterval(()=>{

        topPos += 4;

        heart.style.top =
        topPos+"px";

        if(topPos >
        window.innerHeight){

            clearInterval(fall);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,500);

// ==========================
// HEART BURST
// ==========================

function burstHearts(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            createHeart();

        },i*80);

    }

}

// ==========================
// ROSE PETALS
// ==========================

function createPetal(){

    const petal =
    document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left =
    Math.random()*100+"vw";

    petal.style.fontSize =
    Math.random()*15+20+"px";

    document.body.appendChild(petal);

    let topPos = -50;

    const fall = setInterval(()=>{

        topPos += 2;

        petal.style.top =
        topPos+"px";

        petal.style.transform =
        `rotate(${topPos}deg)`;

        if(topPos >
        window.innerHeight){

            clearInterval(fall);

            petal.remove();

        }

    },20);

}

setInterval(createPetal,900);

// ==========================
// CLICK HEARTS
// ==========================

document.addEventListener("click",(e)=>{

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="25px";

    heart.style.pointerEvents="none";

    document.body.appendChild(heart);

    let pos=e.clientY;

    const animate=setInterval(()=>{

        pos-=3;

        heart.style.top=pos+"px";

        heart.style.opacity-=0.03;

        if(pos<e.clientY-100){

            clearInterval(animate);

            heart.remove();

        }

    },20);

});

// ==========================
// FORGIVE BUTTON
// ==========================

const forgiveBtn =
document.getElementById("forgiveBtn");

if(forgiveBtn){

forgiveBtn.addEventListener("click",()=>{

    confetti({

        particleCount:300,
        spread:180,
        origin:{y:0.6}

    });

    burstHearts();

    setTimeout(()=>{

        document.querySelector(".phone")
        .innerHTML = `

        <div style="
        text-align:center;
        padding-top:120px;">

            <h1 style="
            color:#ff4d88;
            font-size:45px;">
            ❤️ Thank You ❤️
            </h1>

            <p style="
            margin-top:20px;
            font-size:20px;">
            You made my day.
            I promise to cherish you forever.
            </p>

        </div>

        `;

    },1000);

});

}
