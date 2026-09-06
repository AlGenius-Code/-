/* =====================================================
   CREATIVA - JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 700);

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.querySelector(".theme-btn");

    if (!button) return;

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️ الوضع الفاتح";

        localStorage.setItem(
            "creativaTheme",
            "dark"
        );

    } else {

        button.innerHTML = "🌙 الوضع الداكن";

        localStorage.setItem(
            "creativaTheme",
            "light"
        );

    }

}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme =
        localStorage.getItem("creativaTheme");

    const button =
        document.querySelector(".theme-btn");

    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add("dark");

        if (button) {
            button.innerHTML =
                "☀️ الوضع الفاتح";
        }

    }

});


/* =====================================================
   GALLERY FILTER
===================================================== */

function filterGallery(category, button) {

    document
        .querySelectorAll(".filter")
        .forEach(function (item) {

            item.classList.remove("active");

        });


    if (button) {
        button.classList.add("active");
    }


    document
        .querySelectorAll(".gallery-item")
        .forEach(function (item) {

            if (
                category === "all" ||
                item.classList.contains(category)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

}


/* =====================================================
   FAQ
===================================================== */

function toggleFAQ(button) {

    const item =
        button.parentElement;

    item.classList.toggle("open");


    const icon =
        button.querySelector("b");

    if (!icon) return;


    if (
        item.classList.contains("open")
    ) {

        icon.textContent = "−";

    } else {

        icon.textContent = "＋";

    }

}


/* =====================================================
   WHATSAPP ORDER
===================================================== */

function sendOrder(event) {

    event.preventDefault();


    const name =
        document
        .getElementById("name")
        .value
        .trim();


    const service =
        document
        .getElementById("service")
        .value;


    const details =
        document
        .getElementById("details")
        .value
        .trim();


    if (!name || !details) {

        alert(
            "من فضلك اكتب الاسم وتفاصيل المشروع."
        );

        return;

    }


    const message =

        "مرحبًا Creativa 👋\n\n" +

        "الاسم: " +
        name +

        "\nالخدمة: " +
        service +

        "\nتفاصيل المشروع: " +
        details +

        "\n\nPrepared By: YousseF AhmeD";


    const whatsappURL =

        "https://wa.me/201012747531?text=" +

        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(
        function (element) {

            observer.observe(element);

        }
    );


/* =====================================================
   BACK TO TOP
===================================================== */

window.addEventListener(
    "scroll",
    function () {

        const button =
            document.getElementById(
                "topBtn"
            );


        if (!button) return;


        if (
            window.scrollY > 500
        ) {

            button.style.display =
                "block";

        } else {

            button.style.display =
                "none";

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

function mobileMenu() {

    const nav =
        document.querySelector(".nav");


    if (!nav) return;


    if (
        nav.style.display === "flex"
    ) {

        nav.style.display =
            "none";

    } else {

        nav.style.display =
            "flex";

        nav.style.flexDirection =
            "column";

        nav.style.position =
            "absolute";

        nav.style.top =
            "78px";

        nav.style.right =
            "0";

        nav.style.left =
            "0";

        nav.style.padding =
            "25px";

        nav.style.background =
            "var(--white)";

        nav.style.borderBottom =
            "1px solid var(--border)";

        nav.style.zIndex =
            "9999";

    }

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

document
    .querySelectorAll(
        '.nav a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 1100
                    ) {

                        const nav =
                            document.querySelector(
                                ".nav"
                            );

                        if (nav) {
                            nav.style.display =
                                "none";
                        }

                    }

                }
            );

        }
    );


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        this.getAttribute("href");


                    if (
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "Creativa website is working successfully!"
);

console.log(
    "Prepared By: Youssef Ahmed"
);
