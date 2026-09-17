/* =========================================================
   AL-GENIUS
   COMPLETE JAVASCRIPT
   THEME + LANGUAGE + ANIMATIONS + WHATSAPP + MENU
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================================
       THEME
       DARK / LIGHT
    ========================================================= */

    const savedTheme =
        localStorage.getItem("algenius-theme");


    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }


    const themeButtons =
        document.querySelectorAll(
            ".theme-toggle, .theme-toggle-btn"
        );


    const updateThemeButtons = () => {

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        themeButtons.forEach(button => {

            button.textContent =
                isLight
                    ? "☀ Light"
                    : "☾ Dark";


            button.setAttribute(
                "aria-label",
                "تغيير المظهر"
            );


            button.setAttribute(
                "title",
                "تغيير المظهر"
            );

        });

    };


    const toggleTheme = () => {

        document.body.classList.toggle(
            "light-mode"
        );


        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        localStorage.setItem(
            "algenius-theme",
            isLight
                ? "light"
                : "dark"
        );


        updateThemeButtons();

    };


    themeButtons.forEach(button => {

        button.addEventListener(
            "click",
            toggleTheme
        );

    });


    updateThemeButtons();



    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(
            ".scroll-reveal, .reveal, .card, .service-card, .project-card, .price-item, .about-stat, .value-box, .process-step"
        );


    revealElements.forEach(
        (element, index) => {

            if (
                !element.classList.contains(
                    "scroll-reveal"
                ) &&
                !element.classList.contains(
                    "reveal"
                )
            ) {

                element.classList.add(
                    "scroll-reveal"
                );


                element.classList.add(
                    index % 3 === 0
                        ? "from-right"
                        : index % 3 === 1
                            ? "from-left"
                            : "from-bottom"
                );

            }

        }
    );



    /* =========================================================
       INTERSECTION OBSERVER
    ========================================================= */

    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            entry.target.classList.toggle(
                                "visible",
                                entry.isIntersecting
                            );


                            entry.target.classList.toggle(
                                "show",
                                entry.isIntersecting
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -5% 0px"
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible",
                    "show"
                );

            }
        );

    }



    /* =========================================================
       CONTACT FORM → WHATSAPP
    ========================================================= */

    const form =
        document.getElementById(
            "contactForm"
        );


    if (form) {

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const getValue = id => {

                    return (
                        document
                            .getElementById(id)
                            ?.value
                            .trim()
                        || ""
                    );

                };


                const name =
                    getValue("name");


                const phone =
                    getValue("phone");


                const message =
                    getValue("message");


                const projectElement =
                    document.getElementById(
                        "project"
                    );


                const project =
                    projectElement?.value ||
                    "غير محدد";


                const currentLanguage =
                    localStorage.getItem(
                        "algenius-language"
                    ) || "ar";


                const isEnglish =
                    currentLanguage === "en";


                const projectText =
                    isEnglish
                        ? translateText(project)
                        : project;


                let whatsappMessage;


                if (isEnglish) {

                    whatsappMessage =
                        `Hello Al-Genius 👋\n\n` +
                        `I would like to ask about a project.\n\n` +
                        `Name: ${name}\n` +
                        `Phone Number: ${phone}\n` +
                        `Project Type: ${projectText}\n\n` +
                        `Project Details:\n${message}`;

                } else {

                    whatsappMessage =
                        `مرحبًا Al-Genius 👋\n\n` +
                        `أريد الاستفسار عن مشروع.\n\n` +
                        `الاسم: ${name}\n` +
                        `رقم الهاتف: ${phone}\n` +
                        `نوع المشروع: ${project}\n\n` +
                        `تفاصيل المشروع:\n${message}`;

                }


                window.open(
                    "https://wa.me/201012747531?text=" +
                    encodeURIComponent(
                        whatsappMessage
                    ),
                    "_blank",
                    "noopener"
                );

            }
        );

    }



    /* =========================================================
       BACK TO TOP
    ========================================================= */

    const backToTop =
        document.querySelector(
            ".back-to-top, #backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 500
                ) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }



    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuToggle =
        document.querySelector(
            ".menu-toggle, #menuToggle"
        );


    const mobileMenu =
        document.querySelector(
            ".mobile-menu, #mobileMenu"
        );


    if (
        menuToggle &&
        mobileMenu
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle(
                    "active"
                );


                menuToggle.classList.toggle(
                    "active"
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "active"
                        );


                        menuToggle.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }



    /* =========================================================
       DISABLE EMPTY LINKS
    ========================================================= */

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                }
            );

        });



    /* =========================================================
       ACTIVE NAVIGATION
    ========================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(".nav a")
        .forEach(link => {

            const linkPage =
                link
                    .getAttribute("href")
                    ?.split("/")
                    .pop()
                    .toLowerCase();


            if (
                linkPage &&
                linkPage === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        });



    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]:not([href="#"])'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });



    /* =========================================================
       IMAGE LOADING
    ========================================================= */

    document
        .querySelectorAll("img")
        .forEach(image => {

            if (image.complete) {

                image.classList.add(
                    "loaded"
                );

            } else {

                image.addEventListener(
                    "load",
                    () => {

                        image.classList.add(
                            "loaded"
                        );

                    }
                );

            }

        });



    /* =========================================================
       FINISHED
    ========================================================= */

    console.log(
        "AL-GENIUS DIGITAL — JavaScript Loaded Successfully"
    );

});