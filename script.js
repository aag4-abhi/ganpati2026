/* ======================================
   GANPATI WEBSITE 2026
   Gaikwad Family
====================================== */

// -----------------------------
// Loader
// -----------------------------
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// -----------------------------
// Music Button
// -----------------------------
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML = "⏸";

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵";

        }

    });

}

// -----------------------------
// Back To Top
// -----------------------------
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// -----------------------------
// Countdown
// -----------------------------

const targetDate = new Date("September 13, 2026 21:30:00").getTime();

function countdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000);

// -----------------------------
// Fade Animation
// -----------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.20

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// -----------------------------
// Gallery Zoom
// -----------------------------

const images = document.querySelectorAll(".photo img");

images.forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src);

    });

});

// -----------------------------
// Navbar Active Link
// -----------------------------

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// -----------------------------
// Console Message
// -----------------------------

console.log("🌺 Ganpati Bappa Morya 🌺");
console.log("Website Developed for Gaikwad Family");
