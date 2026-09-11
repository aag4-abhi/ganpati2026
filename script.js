/* ======================================
   GANPATI WEBSITE 2026
   Gaikwad Family
====================================== */


/* ======================================
   LOADER
====================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1200);

    }

});


/* ======================================
   MUSIC BUTTON
====================================== */

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");


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


/* ======================================
   BACK TO TOP
====================================== */

const topBtn =
    document.getElementById("topBtn");


if (topBtn) {

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

}


/* ======================================
   COUNTDOWN
   13 September 2026
   11:00 PM
====================================== */

const targetDate =
    new Date("September 13, 2026 23:00:00").getTime();


let countdownFinished = false;


function countdown() {

    const now =
        new Date().getTime();

    const distance =
        targetDate - now;


    /* =================================
       COUNTDOWN FINISHED
    ================================= */

    if (distance <= 0) {

        if (!countdownFinished) {

            countdownFinished = true;

            showBappaArrivalMessage();

            show2026BappaPhoto();

        }

        return;

    }


    /* =================================
       CALCULATE TIME
    ================================= */

    const days = Math.floor(

        distance /
        (1000 * 60 * 60 * 24)

    );


    const hours = Math.floor(

        (distance %
        (1000 * 60 * 60 * 24)) /

        (1000 * 60 * 60)

    );


    const minutes = Math.floor(

        (distance %
        (1000 * 60 * 60)) /

        (1000 * 60)

    );


    const seconds = Math.floor(

        (distance %
        (1000 * 60)) /

        1000

    );


    /* =================================
       DISPLAY TIME
    ================================= */

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {

        daysElement.innerHTML =
            String(days).padStart(2, "0");

    }


    if (hoursElement) {

        hoursElement.innerHTML =
            String(hours).padStart(2, "0");

    }


    if (minutesElement) {

        minutesElement.innerHTML =
            String(minutes).padStart(2, "0");

    }


    if (secondsElement) {

        secondsElement.innerHTML =
            String(seconds).padStart(2, "0");

    }

}


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

            <h2 class="arrival-title">

                🌺 आता कसली वाट बघताय?
                मग या बाप्पाच्या दर्शनाला! 🌺

            </h2>


            <h1 class="arrival-heading">

                🙏 आपल्या लाडक्या बाप्पाचे
                मंगलमय आगमन झाले आहे! 🙏

            </h1>


            <p class="morya-text">

                ✨ गणपती बाप्पा मोरया!
                मंगलमूर्ती मोरया! ✨

            </p>

        </div>

    `;

}


/* ======================================
   2026 GALLERY PHOTO
====================================== */

function show2026BappaPhoto() {

    const coming2026 =
        document.getElementById("coming2026");


    if (!coming2026) {
        return;
    }


    coming2026.outerHTML = `

        <img
            src="images/bappa-2026.jpg"
            alt="Ganpati 2026"
        >

    `;

}


/* ======================================
   START COUNTDOWN
====================================== */

countdown();


setInterval(

    countdown,

    1000

);


/* ======================================
   FADE ANIMATION
====================================== */

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

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


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(60px)";

    section.style.transition =
        "1s";

    observer.observe(section);

});


/* ======================================
   GALLERY ZOOM
====================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.matches(
                ".photo img"
            )
        ) {

            window.open(
                event.target.src,
                "_blank"
            );

        }

    }
);


/* ======================================
   NAVBAR ACTIVE LINK
====================================== */

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;


        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ======================================
   CONSOLE MESSAGE
====================================== */

console.log("🌺 Ganpati Bappa Morya 🌺");

console.log("Website Developed for Gaikwad Family");
