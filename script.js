const pages=document.querySelectorAll('.page');let current=0;
function show(i){pages.forEach(p=>p.classList.remove('active'));pages[i].classList.add('active')}
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>{if(current<pages.length-1){current++;show(current)}});
document.querySelectorAll('.back').forEach(b=>b.onclick=()=>{if(current>0){current--;show(current)}});

document.querySelector('.theme-toggle').onclick=()=>document.body.classList.toggle('dark');

const txt='I Am Sorry ❤️';let i=0;
(function type(){if(i<txt.length){document.getElementById('typing').innerHTML+=txt[i++];setTimeout(type,100)}})();

document.querySelector('.gift-box').onclick=()=>{
document.getElementById('giftMessage').style.display='block';
};

let slides=document.querySelectorAll('.slide'),s=0;
setInterval(()=>{slides[s].classList.remove('active');s=(s+1)%slides.length;slides[s].classList.add('active')},3000);

function heart(){let h=document.createElement('div');h.className='heart';h.innerHTML='💖';h.style.left=Math.random()*100+'vw';h.style.top='-20px';document.body.appendChild(h);
let y=0;let t=setInterval(()=>{y+=5;h.style.top=y+'px';if(y>window.innerHeight){clearInterval(t);h.remove();}},30);}
setInterval(heart,400);

function petal(){let p=document.createElement('div');p.className='petal';p.innerHTML='🌹';p.style.left=Math.random()*100+'vw';p.style.top='-20px';document.body.appendChild(p);
let y=0;let t=setInterval(()=>{y+=3;p.style.top=y+'px';if(y>window.innerHeight){clearInterval(t);p.remove();}},30);}
setInterval(petal,900);

document.getElementById('forgiveBtn').onclick=()=>{
confetti({particleCount:250,spread:180});
alert('Thank You ❤️');
};
