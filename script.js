// ==========================================================================
// 📅 AÑO AUTOMÁTICO
// ==========================================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================================================
// 📱 MENÚ MOBILE
// ==========================================================================
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Cerrar menú al clickear link o logo
document.querySelectorAll('.nav-links a, .logo').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    });
});

// ==========================================================================
// 🔍 LIGHTBOX ZOOM
// ==========================================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            lightbox.classList.add('active');
            lightboxImg.src = image.src;
        }
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });
}

// ==========================================================================
// 📍 LÓGICA DE PUNTOS Y SCROLL MOBILE
// ==========================================================================
const grid = document.getElementById('adapt-grid');
const dots = document.querySelectorAll('.dot');
const items = document.querySelectorAll('.adaptation-item');

if (grid && dots.length > 0) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            const scrollAmount = grid.offsetWidth * index;
            grid.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(items).indexOf(entry.target);
                if (index !== -1 && dots[index]) {
                    dots.forEach(d => d.classList.remove('active'));
                    dots[index].classList.add('active');
                }
            }
        });
    }, { root: grid, threshold: 0.6 });

    items.forEach(item => observer.observe(item));
}

// ==========================================================================
// 🌐 SISTEMA DE TRADUCCIÓN DINÁMICA (ES / EN)
// ==========================================================================
const translations = {
    es: {
        "nav-about": "Acerca de mí",
        "nav-skills": "Skills",
        "nav-works": "Trabajos",
        "nav-contact": "Contacto",
        "hero-tagline": "Visual Designer & Front-end Developer",
        "hero-sub": "Especializado en UX/UI, Motion Graphics e implementación de IA.",
        "hero-cv": "Descargar CV",
        "about-title": "Sobre mi enfoque",
        "about-p": "Fusiono la creatividad del <strong>diseño gráfico</strong> con la precisión del <strong>desarrollo web</strong>. Mi perfil híbrido me permite diseñar interfaces intuitivas (UX/UI) y darles vida a través del código. Actualmente, integro la <strong>Inteligencia Artificial</strong> para optimizar procesos creativos.",
        "skills-title": "Habilidades & Experiencia",
        "skills-desc": "Tecnologías, metodologías y trayectoria profesional en diseño y desarrollo.",
        "skills-h3-stack": "Stack Técnico",
        "skills-s1": "Diseño Gráfico & UX/UI:",
        "skills-p1": "Figma, Photoshop, Illustrator, InDesign, Wireframing, User Flows.",
        "skills-s2": "Desarrollo Web & Librerías:",
        "skills-p2": "HTML5, CSS3, JavaScript, Responsive Design, Bootstrap, GSAP, APIs.",
        "skills-s3": "Control de Versiones:",
        "skills-p3": "Git, GitHub.",
        "skills-s4": "DCO & Animación:",
        "skills-p4": "Clinch.co, Assemble, Adobe Animate, After Effects, Google Web Designer.",
        "skills-s5": "Entorno & Metodologías:",
        "skills-p5": "Mac-OS, Windows, Agile, Scrum, Jira, Microsoft 360.",
        "skills-s6": "Idiomas:",
        "skills-p6": "Español (Nativo) e Inglés (Intermedio A2-B1).",
        "skills-h3-exp": "Experiencia & Certificados",
        "skills-exp1-s": "Hogarth Worldwide Argentina:",
        "skills-exp1-p": "Desarrollo de banners DCO & Standard (Coca-Cola, Nespresso, La Nación).",
        "skills-exp2-s": "Ibris CGQ:",
        "skills-exp2-p": "Diseño Gráfico y UI (Natura, Mistral, Next).",
        "skills-exp3-s": "Promoption:",
        "skills-exp3-p": "BTL/POP y Producción Impresa (Unilever, Danone, Clarín).",
        "skills-exp4-s": "Certificaciones:",
        "skills-exp4-p": "Gen AI (Linkedin Learning, 2024), FrontEnd React (Coderhouse, 2023), Diseño Web (Udemy, 2021), Lic. Diseño Gráfico (FADU / UBA, 2009).",
        "works-title": "Campañas Digitales & Display Ads",
        "works-desc": "Desarrollo de piezas interactivas y adaptaciones dinámicas para ecosistemas programáticos.",
        "works-label": "Cliente:",
        "works-p1-spec": "Anuncio Dinámico - API",
        "works-p1-text": "Anuncio interactivo con contenido dinámico en tiempo real integrando la API de \"La Nación Campo\". Realizado con HTML, CSS y Javascript.",
        "works-p2-spec": "Standard HTML5",
        "works-p2-text": "Banner adaptable para Google Ads. Animación y desarrollo realizados con Google Web Designer. Optimización de imágenes.",
        "works-p3-spec": "Animación con GSAP",
        "works-p3-text": "Banner para Google Ads, realizado con HTML5, CSS y JavaScript. Animaciones con GSAP y adaptación a múltiples medidas.",
        "adapt-title": "Diseño Multiformato & Master Layouts",
        "adapt-desc": "Estrategia de adaptación visual y despliegue de activos para ecosistemas DV360.",
        "social-title": "Social Media Content",
        "social-desc": "Diseño de activos digitales para Feed e Stories. Curaduría visual y creación de contenido estratégico bajo estrictos lineamientos de marca (Ford Motors Co.) para potenciar el engagement.",
        "email-title": "Diseño y Desarrollo de Emails HTML",
        "email-desc": "Creación de newsletters y campañas de email marketing profesionales, <br>100% responsivos y optimizados para garantizar la mejor entregabilidad y conversión.",
        "email-text": "Estos son ejemplos de trabajos realizados para marcas como Coca-Cola y Telus, ilustran la capacidad de crear contenido atractivo y funcional para diversas campañas.",
        "email-btn": "VER HTML",
        "contact-title": "Hablemos",
        "behance-title": "¿Quieres ver más de mis proyectos de diseño?",
        "behance-desc": "Te invito a explorar mi universo creativo completo con marcas de primer nivel.",
        "behance-btn-text": "Behance"
    },
    en: {
        "nav-about": "About me",
        "nav-skills": "Skills",
        "nav-works": "Works",
        "nav-contact": "Contact",
        "hero-tagline": "Visual Designer & Front-end Developer",
        "hero-sub": "Specialized in UX/UI, Motion Graphics, and AI implementation.",
        "hero-cv": "Resume",
        "about-title": "About my approach",
        "about-p": "I blend the creativity of <strong>graphic design</strong> with the precision of <strong>web development</strong>. My hybrid profile allows me to design intuitive interfaces (UX/UI) and bring them to life through code. Currently, I integrate <strong>Artificial Intelligence</strong> to optimize creative processes.",
        "skills-title": "Skills & Experience",
        "skills-desc": "Technologies, methodologies, and professional background in design and development.",
        "skills-h3-stack": "Technical Stack",
        "skills-s1": "Graphic Design & UX/UI:",
        "skills-p1": "Figma, Photoshop, Illustrator, InDesign, Wireframing, User Flows.",
        "skills-s2": "Web Dev & Libraries:",
        "skills-p2": "HTML5, CSS3, JavaScript, Responsive Design, Bootstrap, GSAP, APIs.",
        "skills-s3": "Version Control:",
        "skills-p3": "Git, GitHub.",
        "skills-s4": "DCO & Animation:",
        "skills-p4": "Clinch.co, Assemble, Adobe Animate, After Effects, Google Web Designer.",
        "skills-s5": "Environment & Methodologies:",
        "skills-p5": "Mac-OS, Windows, Agile, Scrum, Jira, Microsoft 360.",
        "skills-s6": "Languages:",
        "skills-p6": "Spanish (Native) and English (Intermediate A2-B1).",
        "skills-h3-exp": "Experience & Certificates",
        "skills-exp1-s": "Hogarth Worldwide Argentina:",
        "skills-exp1-p": "Development of DCO & Standard banners (Coca-Cola, Nespresso, La Nación).",
        "skills-exp2-s": "Ibris CGQ:",
        "skills-exp2-p": "Graphic and UI Design (Natura, Mistral, Next).",
        "skills-exp3-s": "Promoption:",
        "skills-exp3-p": "BTL/POP and Print Production (Unilever, Danone, Clarín).",
        "skills-exp4-s": "Certifications:",
        "skills-exp4-p": "Gen AI (Linkedin Learning, 2024), FrontEnd React (Coderhouse, 2023), Web Design (Udemy, 2021), B.A. Graphic Design (FADU / UBA, 2009).",
        "works-title": "Digital Campaigns & Display Ads",
        "works-desc": "Development of interactive pieces and dynamic adaptations for programmatic ecosystems.",
        "works-label": "Client:",
        "works-p1-spec": "Dynamic Ad - API",
        "works-p1-text": "Interactive ad with real-time dynamic content integrating the \"La Nación Campo\" API. Built with HTML, CSS, and JavaScript.",
        "works-p2-spec": "Standard HTML5",
        "works-p2-text": "Tailored banner for Google Ads. Animation and development built with Google Web Designer. Image optimization.",
        "works-p3-spec": "GSAP Animation",
        "works-p3-text": "Banner for Google Ads, built with HTML5, CSS, and JavaScript. Animations using GSAP and multi-size adaptation.",
        "adapt-title": "Multi-format Design & Master Layouts",
        "adapt-desc": "Visual adaptation strategy and asset deployment for DV360 ecosystems.",
        "social-title": "Social Media Content",
        "social-desc": "Digital asset design for Feed and Stories. Visual curation and strategic content creation under strict brand guidelines (Ford Motors Co.) to boost engagement.",
        "email-title": "HTML Email Design & Development",
        "email-desc": "Creation of professional newsletters and email marketing campaigns, <br>100% responsive and optimized to ensure top deliverability and conversion.",
        "email-text": "These are examples of work done for brands like Coca-Cola and Telus, showcasing the ability to build engaging and functional content for multiple campaigns.",
        "email-btn": "VIEW HTML",
        "contact-title": "Let's Talk",
        "behance-title": "Want to see more of my design projects?",
        "behance-desc": "I invite you to explore my complete creative universe with top-tier brands.",
        "behance-btn-text": "Behance"
    }
};

const langBtn = document.getElementById('lang-btn');
// Inicializa con el idioma guardado en el navegador o Español por defecto
let currentLang = localStorage.getItem('portfolio-lang') || 'es';

function applyTranslations(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Usamos innerHTML para respetar etiquetas como <strong> o <br>
            element.innerHTML = translations[lang][key];
        }
    });
    // Actualiza el texto del botón indicador
    if (langBtn) langBtn.textContent = lang === 'es' ? 'ES / EN' : 'EN / ES';
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('portfolio-lang', currentLang);
        applyTranslations(currentLang);
    });
}

// Ejecutar al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});
