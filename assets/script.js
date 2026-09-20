// ===============================
// EcoRoad Landing Page
// ===============================


// Feature accordions

const featureButtons = document.querySelectorAll(".feature-title");

featureButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if (content.style.display === "none") {

            content.style.display = "block";

        } else {

            content.style.display = "none";

        }

    });

});


// ===============================
// Pricing buttons
// ===============================

const billingButtons = document.querySelectorAll(".billing");

billingButtons.forEach(button => {

    button.addEventListener("click", () => {

        billingButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// ===============================
// Demo button
// ===============================

const playButton = document.querySelector(".play-button");

if (playButton) {

    playButton.addEventListener("click", () => {

        alert("EcoRoad Live Monitoring Demo");

    });

}

/* =========================================================
   LANGUAGE SWITCHER
   ========================================================= */

const languageToggle = document.getElementById("languageToggle");

let currentLanguage = "en";

const translations = {

    en: {
        home: "Home",
        solutions: "Solutions",
        benefits: "Benefits",
        features: "Features",
        pricing: "SaaS Plans",
        cases: "Case Studies",

        signIn: "Sign In",
        requestDemo: "Request Demo",

        heroBadge: "Environmental Compliance SaaS for Highway & Road Projects",

        heroTitle: `
            Automated Environmental<br>
            Compliance & Mitigation for<br>
            Highway Construction
        `,

        heroDescription:
            "Centralize, analyze, and automate environmental monitoring in real time. Prevent regulatory penalties and stop-work orders through continuous IoT telemetry for air, noise, water, and geo-referenced incident management on site.",

        getStarted: "Get Started →",
        watchDemo: "▶ Watch Live Demo",

        solutionsTitle:
            "Specialized Solutions for the Highway Construction Sector",

        solutionsDescription:
            "Comprehensive ecosystem engineered for road builders, concessionaires, and environmental consultants committed to operational excellence.",

        benefitsTitle:
            "The EcoRoad Advantage: From Manual Logs to Real-Time Telemetry",

        benefitsDescription:
            "Ensure continuous project operations by minimizing administrative shutdown risks and maximizing field crew efficiency.",

        featuresTitle:
            "Advanced Management & Compliance Technology",

        featuresDescription:
            "Cloud-native IoT architecture purpose-built for the topographic and climatic rigor of major civil engineering projects.",

        testimonialsTitle:
            "What Infrastructure Leaders Say About Us",

        testimonialsDescription:
            "Proven success across highways, logistics corridors and complex civil works.",

        pricingTitle:
            "Flexible, Scalable Subscription Plans",

        pricingDescription:
            "Select the SaaS tier tailored to your highway consortium or environmental consultancy.",

        teamTitle: "Our Team",

        teamDescription:
            "Meet the multidisciplinary team behind EcoRoad's environmental telemetry platform.",

        ctaTitle:
            "Transform the Sustainability & Environmental Compliance of Your Road Infrastructure.",

        ctaDescription:
            "Request a personalized 20-minute session with our road telemetry engineers and discover how to eliminate non-compliance risks.",

        guidedDemo: "Request Guided Demo",
        specialist: "Speak with a Specialist"
    },


    es: {
        home: "Inicio",
        solutions: "Soluciones",
        benefits: "Beneficios",
        features: "Características",
        pricing: "Planes SaaS",
        cases: "Casos de Éxito",

        signIn: "Iniciar sesión",
        requestDemo: "Solicitar Demo",

        heroBadge: "SaaS de Cumplimiento Ambiental para Proyectos Viales",

        heroTitle: `
            Cumplimiento y Mitigación Ambiental<br>
            Automatizados para la<br>
            Construcción Vial
        `,

        heroDescription:
            "Centraliza, analiza y automatiza el monitoreo ambiental en tiempo real. Previene sanciones regulatorias y paralizaciones mediante telemetría IoT continua para aire, ruido, agua y gestión georreferenciada de incidencias en obra.",

        getStarted: "Comenzar →",
        watchDemo: "▶ Ver Demo en Vivo",

        solutionsTitle:
            "Soluciones Especializadas para el Sector de Construcción Vial",

        solutionsDescription:
            "Ecosistema integral diseñado para constructoras viales, concesionarias y consultoras ambientales comprometidas con la excelencia operativa.",

        benefitsTitle:
            "La Ventaja EcoRoad: De Registros Manuales a Telemetría en Tiempo Real",

        benefitsDescription:
            "Mantén la continuidad de los proyectos reduciendo riesgos de paralización administrativa y mejorando la eficiencia del personal de campo.",

        featuresTitle:
            "Tecnología Avanzada de Gestión y Cumplimiento",

        featuresDescription:
            "Arquitectura IoT en la nube diseñada para las exigencias topográficas y climáticas de grandes proyectos de ingeniería civil.",

        testimonialsTitle:
            "Lo que los Líderes de Infraestructura Dicen de Nosotros",

        testimonialsDescription:
            "Resultados comprobados en carreteras, corredores logísticos y proyectos de infraestructura complejos.",

        pricingTitle:
            "Planes de Suscripción Flexibles y Escalables",

        pricingDescription:
            "Selecciona el plan SaaS adecuado para tu empresa constructora, concesionaria o consultora ambiental.",

        teamTitle: "Nuestro Equipo",

        teamDescription:
            "Conoce al equipo multidisciplinario detrás de la plataforma de telemetría ambiental EcoRoad.",

        ctaTitle:
            "Transforma la Sostenibilidad y el Cumplimiento Ambiental de tu Infraestructura Vial.",

        ctaDescription:
            "Solicita una sesión personalizada de 20 minutos con nuestros especialistas y descubre cómo reducir los riesgos de incumplimiento ambiental.",

        guidedDemo: "Solicitar Demo Guiada",
        specialist: "Hablar con un Especialista"
    }

};


function changeLanguage(language) {

    const t = translations[language];

    /* NAVBAR */

    const navLinks = document.querySelectorAll(".nav-links a");

    if (navLinks.length >= 6) {
        navLinks[0].textContent = t.home;
        navLinks[1].textContent = t.solutions;
        navLinks[2].textContent = t.benefits;
        navLinks[3].textContent = t.features;
        navLinks[4].textContent = t.pricing;
        navLinks[5].textContent = t.cases;
    }


    const signIn = document.querySelector(".signin");

    if (signIn) {
        signIn.textContent = t.signIn;
    }


    const requestDemo = document.querySelector(".btn-dark");

    if (requestDemo) {
        requestDemo.textContent = t.requestDemo;
    }


    /* HERO */

    const heroBadge = document.querySelector(".hero-badge");

    if (heroBadge) {
        heroBadge.innerHTML =
            `<span></span>${t.heroBadge}`;
    }


    const heroTitle = document.querySelector(".hero h1");

    if (heroTitle) {
        heroTitle.innerHTML = t.heroTitle;
    }


    const heroDescription =
        document.querySelector(".hero-description");

    if (heroDescription) {
        heroDescription.textContent = t.heroDescription;
    }


    const heroButtons =
        document.querySelectorAll(".hero-buttons .btn");

    if (heroButtons.length >= 2) {

        heroButtons[0].textContent = t.getStarted;

        heroButtons[1].textContent = t.watchDemo;

    }


    /* SOLUTIONS */

    const solutionsTitle =
        document.querySelector("#solutions .section-header h2");

    const solutionsDescription =
        document.querySelector("#solutions .section-header p");

    if (solutionsTitle) {
        solutionsTitle.textContent = t.solutionsTitle;
    }

    if (solutionsDescription) {
        solutionsDescription.textContent =
            t.solutionsDescription;
    }


    /* BENEFITS */

    const benefitsTitle =
        document.querySelector("#benefits .section-header h2");

    const benefitsDescription =
        document.querySelector("#benefits .section-header p");

    if (benefitsTitle) {
        benefitsTitle.textContent = t.benefitsTitle;
    }

    if (benefitsDescription) {
        benefitsDescription.textContent =
            t.benefitsDescription;
    }


    /* FEATURES */

    const featuresTitle =
        document.querySelector("#features .section-header h2");

    const featuresDescription =
        document.querySelector("#features .section-header p");

    if (featuresTitle) {
        featuresTitle.textContent = t.featuresTitle;
    }

    if (featuresDescription) {
        featuresDescription.textContent =
            t.featuresDescription;
    }


    /* TESTIMONIALS */

    const testimonialsTitle =
        document.querySelector("#testimonials .section-header h2");

    const testimonialsDescription =
        document.querySelector("#testimonials .section-header p");

    if (testimonialsTitle) {
        testimonialsTitle.textContent =
            t.testimonialsTitle;
    }

    if (testimonialsDescription) {
        testimonialsDescription.textContent =
            t.testimonialsDescription;
    }


    /* PRICING */

    const pricingTitle =
        document.querySelector("#pricing .section-header h2");

    const pricingDescription =
        document.querySelector("#pricing .section-header p");

    if (pricingTitle) {
        pricingTitle.textContent = t.pricingTitle;
    }

    if (pricingDescription) {
        pricingDescription.textContent =
            t.pricingDescription;
    }


    /* TEAM */

    const teamTitle =
        document.querySelector("#team .section-header h2");

    const teamDescription =
        document.querySelector("#team .section-header p");

    if (teamTitle) {
        teamTitle.textContent = t.teamTitle;
    }

    if (teamDescription) {
        teamDescription.textContent =
            t.teamDescription;
    }


    /* CTA */

    const ctaTitle = document.querySelector(".cta h2");

    const ctaDescription =
        document.querySelector(".cta p");

    if (ctaTitle) {
        ctaTitle.textContent = t.ctaTitle;
    }

    if (ctaDescription) {
        ctaDescription.textContent =
            t.ctaDescription;
    }


    const ctaButtons =
        document.querySelectorAll(".cta-buttons .btn");

    if (ctaButtons.length >= 2) {

        ctaButtons[0].textContent =
            t.guidedDemo;

        ctaButtons[1].textContent =
            t.specialist;

    }


    /* HTML LANGUAGE */

    document.documentElement.lang = language;


    /* BUTTON */

    languageToggle.textContent =
        language === "en"
            ? "🌐 ES"
            : "🌐 EN";
}


/* CLICK */

if (languageToggle) {

    languageToggle.addEventListener("click", function () {

        if (currentLanguage === "en") {

            currentLanguage = "es";

        } else {

            currentLanguage = "en";

        }

        changeLanguage(currentLanguage);

    });

}