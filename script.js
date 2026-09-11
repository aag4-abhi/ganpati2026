/* ======================================
   GANPATI WEBSITE 2026
   Gaikwad Family
====================================== */


/* ======================================
   LOADER
====================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1200);

    }

});


/* ======================================
   MUSIC
====================================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {

    musicBtn.addEventListener("click", function () {

        if (music.paused) {

            music.play();
            musicBtn.innerHTML = "⏸";

        } else {

            music.pause();
            musicBtn.innerHTML = "🎵";

        }

    });

}


/* ======================================
   BACK TO TOP
====================================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ======================================
   TEST COUNTDOWN
   TEMPORARY
====================================== */

const targetDate =
    new Date("September 13, 2026 23:00:00").getTime();

let countdownFinished = false;


/* ======================================
   COUNTDOWN COMPLETE MESSAGE
====================================== */

function showBappaArrivalMessage() {

    const countdownSection =
        document.getElementById("countdown");

    if (!countdownSection) {
        return;
    }

    countdownSection.innerHTML = `

        <div class="container bappa-arrived">

            <h1 class="arrival-title">
                🙏 आपल्या लाडक्या बाप्पाचे मंगलमय आगमन झाले आहे! 🙏
            </h1>

            <h2 class="arrival-heading">
              🌺 आता कसली वाट बघताय ? या मग आपल्या लाडक्या बाप्पाच्या दर्शनाला! 🌺  
            </h2>

            <p class="morya-text">
                ✨ गणपती बाप्पा मोरया! मंगलमूर्ती मोरया! ✨
            </p>

        </div>

    `;

}


/* ======================================
   SHOW 2026 BAPPA PHOTO IN GALLERY
====================================== */

function show2026BappaPhoto() {

    const coming2026 =
        document.getElementById("coming2026");

    if (!coming2026) {
        return;
    }

    coming2026.outerHTML = `
        <img
            src="images/bappa-2026.jpeg"
            alt="Ganpati 2026"
        >
    `;

}


/* ======================================
   COUNTDOWN FUNCTION
====================================== */

function countdown() {

    const now = new Date().getTime();

    const distance =
        targetDate - now;


    /* COUNTDOWN FINISHED */

    if (distance <= 0) {

        if (!countdownFinished) {

            countdownFinished = true;

            showBappaArrivalMessage();

            show2026BappaPhoto();

        }

        return;

    }


    /* TIME CALCULATION */

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

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


    /* ELEMENTS */

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    /* DISPLAY */

    if (daysElement) {

        daysElement.textContent =
            String(days).padStart(2, "0");

    }

    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");

    }

    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

    }

    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }

}


/* ======================================
   START COUNTDOWN
====================================== */

countdown();

setInterval(countdown, 1000);


/* ======================================
   GALLERY IMAGE CLICK
====================================== */

document.addEventListener("click", function (event) {

    if (event.target.matches(".photo img")) {

        window.open(
            event.target.src,
            "_blank"
        );

    }

});


/* ======================================
   FADE ANIMATION
====================================== */

const sections =
    document.querySelectorAll("section");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0px)";

                    }

                });

            },

            {
                threshold: 0.20
            }

        );


    sections.forEach(function (section) {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(60px)";

        section.style.transition =
            "1s";

        observer.observe(section);

    });

}


/* ======================================
   CONSOLE
====================================== */

console.log("🌺 Ganpati Bappa Morya 🌺");
