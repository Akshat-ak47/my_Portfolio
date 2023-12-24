let words = document.querySelectorAll(".word");
words.forEach((word)=> {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeTest = ()=> {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(() =>{
            letter.className = "letter out";
    },i*80);
});
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340+i*80);
});
currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeTest();
setInterval(changeTest,3000)

// Circle skill 
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i=0; i< dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let j = 0; j < percent; j++) {
        pointsMarked[j].classList.add('marked');
        
    }
});

// Mix it up Portfolio section 
var mixer = mixitup('.portfolio-gallery');


// Active Menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll" , activeMenu);

// Sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// Parallax
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// READ MORE 
function toggleContent() {
    var hiddenContent = document.querySelector('.hidden-content');
    var buttonText = document.querySelector('.btn');

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        buttonText.innerText = 'Read Less';
    } else {
        hiddenContent.style.display = 'none';
        buttonText.innerText = 'Read More';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var buttonContainer = document.getElementById('readMoreButtonContainer');
    var readMoreButton = document.createElement('a');
    readMoreButton.href = '#';
    readMoreButton.classList.add('btn');
    readMoreButton.innerText = 'Read More';
    readMoreButton.onclick = toggleContent;

    buttonContainer.appendChild(readMoreButton);
});
