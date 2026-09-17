/* =========================================================
   AL-GENIUS — AR / EN LANGUAGE SYSTEM
   Single language system. Works on every page.
========================================================= */

const translations = {
    "الرئيسية":"Home", "الخدمات":"Services", "الأعمال":"Portfolio", "الأسعار":"Prices", "عن الشركة":"About Us", "تواصل معنا":"Contact Us",
    "مرحبًا بك في":"Welcome to", "حلول رقمية":"Digital Solutions", "احترافية":"Professional", "نحوّل أفكارك إلى واقع رقمي":"We Turn Your Ideas Into Digital Reality",
    "نصمم ونطور حلولًا رقمية":"We Design and Develop Digital Solutions", "ابدأ مشروعك الآن":"Start Your Project Now", "اكتشف خدماتنا":"Discover Our Services", "شاهد أعمالنا":"View Our Work",
    "خبرة":"Experience", "مشروع":"Project", "مشاريع مكتملة":"Completed Projects", "عملاء سعداء":"Happy Clients", "سنوات من الخبرة":"Years of Experience",
    "ابدأ الآن":"Start Now", "اطلب الآن":"Order Now", "اطلب خدمتك":"Request Your Service", "المزيد":"More", "التالي":"Next", "السابق":"Previous",
    "خدماتنا":"Our Services", "خدماتنا الرقمية":"Our Digital Services", "التصميم والجرافيك":"Graphic Design", "تطوير وتصميم المواقع":"Website Development & Design", "تصميم المتاجر الإلكترونية":"E-commerce Design",
    "برمجة تطبيقات الهواتف":"Mobile App Development", "تصميم واجهات UI/UX":"UI/UX Design", "تصميم الهوية البصرية":"Visual Identity Design", "تهيئة محركات البحث (SEO)":"Search Engine Optimization (SEO)",
    "تطوير الأنظمة الإدارية":"Administrative Systems Development", "تصاميم السوشيال ميديا":"Social Media Designs", "إدارة الحملات الإعلانية":"Digital Advertising Campaign Management", "الاستضافة وحماية المواقع":"Hosting & Website Security",
    "الدعم الفني والصيانة":"Technical Support & Maintenance", "الاستشارات التقنية":"Technical Consulting", "مونتاج وإنتاج الفيديو":"Video Editing & Production", "الشبكات":"Networks", "الشبكات والاتصال":"Networks & Connectivity",
    "تركيب وتجهيز وصيانة الشبكات":"Network Installation, Setup & Maintenance", "معرض أعمالنا":"Our Portfolio", "نماذج مختارة":"Selected Works", "أعمالنا":"Our Work",
    "المواقع والبرمجة":"Websites & Programming", "التطبيقات والفيديو":"Apps & Video", "التسويق الرقمي":"Digital Marketing", "الخدمات التقنية":"Technical Services", "عرض المشروع":"View Project", "اقرأ المزيد":"Read More",
    "أسعارنا":"Our Prices", "اختر الخدمة المناسبة لك":"Choose the service that suits you", "السعر":"Price", "ابدأ من":"Starting From", "حسب الطلب":"Custom", "تواصل معنا لمعرفة السعر":"Contact us to know the price", "احصل على عرض سعر":"Get a Quote",
    "من نحن؟":"Who We Are?", "نحن فريق متخصص":"We Are a Specialized Team", "نقدم حلولًا رقمية متكاملة":"We Provide Complete Digital Solutions", "هدفنا":"Our Goal", "رؤيتنا":"Our Vision", "رسالتنا":"Our Mission", "الجودة":"Quality", "الاحترافية":"Professionalism", "الابتكار":"Innovation", "الثقة":"Trust",
    "كيف نعمل؟":"How We Work", "خطوات بسيطة لتنفيذ مشروعك":"Simple Steps to Build Your Project", "تواصل":"Contact", "فحص":"Analysis", "تنفيذ":"Implementation", "اختبار":"Testing",
    "تواصل معنا واشرح احتياجاتك":"Contact us and explain your needs", "نفهم احتياجاتك ونحدد الحل المناسب":"We understand your needs and determine the right solution", "نبدأ في تنفيذ المشروع باحترافية":"We start implementing the project professionally", "نختبر المشروع ونتأكد من جودته":"We test the project and make sure of its quality",
    "نتواصل معك لفهم احتياجاتك":"We contact you to understand your needs", "نفحص المشكلة ونحدد الحل المناسب":"We analyze the problem and determine the right solution", "نبدأ في تنفيذ المشروع":"We start implementing the project", "نختبر العمل ونتأكد من جودته":"We test the work and make sure everything works properly",
    "تواصل معنا الآن":"Contact Us Now", "تواصل معنا واشرح الخدمة أو المشكلة اللي محتاج فيها مساعدة":"Contact us and explain the service or problem you need help with", "الاسم":"Name", "رقم الهاتف":"Phone Number", "البريد الإلكتروني":"Email", "نوع المشروع":"Project Type", "تفاصيل المشروع":"Project Details",
    "اكتب تفاصيل مشروعك هنا":"Write your project details here", "اكتب اسمك":"Enter your name", "اكتب رقم الهاتف":"Enter your phone number", "اكتب بريدك الإلكتروني":"Enter your email", "اختر نوع المشروع":"Choose the project type", "إرسال":"Send", "إرسال الطلب":"Send Request",
    "اتصال مباشر":"Direct Call", "الدخول إلى واتساب":"Open WhatsApp", "واتساب":"WhatsApp", "اتصل بنا":"Call Us", "الأسئلة الشائعة":"Frequently Asked Questions", "أسئلة شائعة":"Frequently Asked Questions",
    "هل يمكن تنفيذ مشروع مخصص؟":"Can you create a custom project?", "نعم، يمكننا تنفيذ المشاريع حسب احتياجاتك ومتطلباتك.":"Yes, we can create projects according to your needs and requirements.",
    "كم يستغرق تنفيذ المشروع؟":"How long does the project take?", "تختلف مدة التنفيذ حسب نوع المشروع وحجمه.":"The delivery time depends on the type and size of the project.",
    "هل يوجد دعم بعد تسليم المشروع؟":"Do you provide support after project delivery?", "نعم، نوفر الدعم الفني والصيانة حسب نوع الخدمة.":"Yes, we provide technical support and maintenance depending on the service.",
    "نعم":"Yes", "لا":"No", "غير محدد":"Not Specified", "تصميم":"Design", "برمجة":"Programming", "مواقع":"Websites", "تطبيقات":"Applications", "فيديو":"Video", "تسويق":"Marketing", "دعم فني":"Technical Support", "موقع إلكتروني":"Website", "متجر إلكتروني":"E-commerce Store", "تطبيق هاتف":"Mobile App", "تصميم جرافيك":"Graphic Design", "هوية بصرية":"Visual Identity", "نظام إداري":"Administrative System", "حملة إعلانية":"Advertising Campaign", "خدمة تقنية":"Technical Service", "اتصال":"Contact",
    "جميع الحقوق محفوظة":"All Rights Reserved",
    "© 2026 Al-Genius. جميع الحقوق محفوظة.":"© 2026 Al-Genius. All Rights Reserved.",
    "© 2026 Al-Genius — جميع الحقوق محفوظة.":"© 2026 Al-Genius — All Rights Reserved."
};

(function () {
    const KEY = "algenius-language";
    const original = new WeakMap();

    const isArabic = value => /[\u0600-\u06FF]/.test(value || "");

    function translate(value) {
        if (!value) return value;
        const exact = translations[value.trim()];
        if (exact) return exact;
        let result = value;
        Object.keys(translations)
            .sort((a,b) => b.length - a.length)
            .forEach(ar => { if (result.includes(ar)) result = result.split(ar).join(translations[ar]); });
        return result;
    }

    function remember(el) {
        if (!original.has(el)) original.set(el, {
            text: el.textContent,
            placeholder: el.getAttribute("placeholder"),
            title: el.getAttribute("title"),
            aria: el.getAttribute("aria-label")
        });
    }

    function apply(language) {
        const en = language === "en";
        document.documentElement.lang = en ? "en" : "ar";
        document.documentElement.dir = en ? "ltr" : "rtl";
        document.body.classList.toggle("english-mode", en);

        document.querySelectorAll("body *:not(script):not(style):not(noscript)").forEach(el => {
            if (el.children.length === 0 && el.textContent.trim()) {
                const text = el.textContent.trim();
                if (translations[text] || isArabic(text)) {
                    remember(el);
                    el.textContent = en ? translate(original.get(el).text) : original.get(el).text;
                }
            }
        });

        document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
            remember(el);
            const v = original.get(el).placeholder;
            if (v) el.setAttribute("placeholder", en ? translate(v) : v);
        });

        document.querySelectorAll("[title], [aria-label]").forEach(el => {
            remember(el);
            const o = original.get(el);
            if (o.title && isArabic(o.title)) el.setAttribute("title", en ? translate(o.title) : o.title);
            if (o.aria && isArabic(o.aria)) el.setAttribute("aria-label", en ? translate(o.aria) : o.aria);
        });

        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            el.textContent = en ? translate(key) : key;
        });

        const btn = document.getElementById("languageBtn");
        if (btn) {
            btn.textContent = en ? "AR" : "EN";
            btn.setAttribute("aria-label", en ? "Switch to Arabic" : "Switch to English");
            btn.setAttribute("title", en ? "Switch to Arabic" : "Switch to English");
        }
        localStorage.setItem(KEY, language);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("languageBtn");
        if (btn) btn.addEventListener("click", () => apply((localStorage.getItem(KEY) || "ar") === "ar" ? "en" : "ar"));
        apply(localStorage.getItem(KEY) || "ar");
    });
})();
