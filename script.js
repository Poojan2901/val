// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";

    // Start Slideshow after a short delay
    setTimeout(startSlideshow, 3000);
});

// Slideshow Logic
const slideshowContainer = document.getElementById("slideshow-container");
const slideImg = document.getElementById("slide-img");
const slideCaption = document.querySelector(".slide-caption");

// PLACEHOLDER IMAGES - User should replace these with real paths
const images = [
    "mommy3.webp", // Using existing asset as placeholder
    "mommy5.webp",  // Using existing asset as placeholder
    "mommy7.webp",  // Using existing asset as placeholder
];
let currentSlide = 0;

function startSlideshow() {
    // Hide final text and cat to make room
    finalText.style.display = "none";
    catImg.style.display = "none";
    title.textContent = "Here's a trip down memory lane...";

    slideshowContainer.style.display = "flex";
    showSlide(0);

    const slideInterval = setInterval(() => {
        currentSlide++;
        if (currentSlide < images.length) {
            showSlide(currentSlide);
        } else {
            clearInterval(slideInterval);
            setTimeout(startQuestions, 1000);
        }
    }, 2500); // Change slide every 2.5 seconds
}

function showSlide(index) {
    slideImg.src = images[index];
    // Reset animation
    slideImg.style.animation = 'none';
    slideImg.offsetHeight; /* trigger reflow */
    slideImg.style.animation = null;
}

// Questions Logic
const questionsContainer = document.getElementById("questions-container");
const questionText = document.getElementById("question-text");
const nextQuestionBtn = document.getElementById("next-question-btn");

const questions = [
    "What's your favorite memory of us?",
    "What do you love most about me? (Be honest! 😜)",
    "Where should we go for our next date?",
    "If we were a movie couple, who would we be?",
    "What's one thing you want us to do together this year?",
    "What's a song that reminds you of me?",
    "Review me as a half-boyfriend: ⭐⭐⭐⭐⭐?"
];
let currentQuestionIndex = 0;

function startQuestions() {
    slideshowContainer.style.display = "none";
    title.textContent = "Answer(Mail would be best way!!!)";
    questionsContainer.style.display = "flex";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex];
    } else {
        questionText.textContent = "That's all for now! I love you! ❤️";
        nextQuestionBtn.style.display = "none";
        // Bring back the cat just for fun
        catImg.src = "cat_dance.gif";
        catImg.style.display = "block";
    }
}

nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});