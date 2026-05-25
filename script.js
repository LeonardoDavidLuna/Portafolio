// ==========================================================================
// CONSTANTS & STATE
// ==========================================================================

const TYPED_WORDS = [
    "Integraciones & APIs",
    "Arquitecturas Event-Driven",
    "Sistemas Cloud & Serverless",
    "Orquestación & Middleware"
];

const PROJECT_DETAILS = {
    "1": {
        title: "Sincronizador ERP-CRM en Tiempo Real",
        category: "Orquestación Event-Driven",
        diagram: `
            <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="project-diag-svg">
                <rect width="400" height="160" rx="8" fill="#0f172a"/>
                <rect x="20" y="55" width="80" height="50" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <text x="60" y="85" fill="#f8fafc" font-size="11" font-family="Outfit" text-anchor="middle">SAP ERP</text>
                
                <path d="M100 80 H150" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4" class="svg-flow-line"/>
                
                <circle cx="200" cy="80" r="30" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
                <text x="200" y="78" fill="#f8fafc" font-size="10" font-family="Outfit" text-anchor="middle" font-weight="600">Kafka</text>
                <text x="200" y="90" fill="#6366f1" font-size="9" font-family="Fira Code" text-anchor="middle">Topics</text>
                
                <path d="M230 80 H280" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4" class="svg-flow-line"/>
                
                <rect x="290" y="55" width="90" height="50" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <text x="335" y="85" fill="#f8fafc" font-size="11" font-family="Outfit" text-anchor="middle">Salesforce</text>
                
                <circle cx="125" cy="80" r="3" fill="#06b6d4" class="svg-packet"/>
                <circle cx="255" cy="80" r="3" fill="#06b6d4" class="svg-packet delay-packet"/>
            </svg>
        `,
        challenge: "Reemplazar un sistema por lotes (batch) diario que causaba desactualizaciones en las ventas, saturando los servidores en horas pico al intentar mover millones de registros juntos.",
        solution: "Diseño de un ecosistema desacoplado. Capturamos cambios de datos en SAP usando Change Data Capture (CDC) y los publicamos como eventos JSON en Apache Kafka. Un microservicio en Node.js desarrollado con TypeScript consume estos eventos de forma concurrente, transforma el esquema en tiempo real y los envía a Salesforce a través de su Bulk API, administrando el control de cuotas (rate limits).",
        results: [
            "Reducción del desfase de inventario de 24 horas a menos de 3 segundos en promedio.",
            "Eliminación de la saturación de los servidores durante horas de operación alta.",
            "Garantía de entrega 'at-least-once' con reintentos automáticos ante caídas de Salesforce.",
            "Procesamiento estable de 5 millones de eventos de sincronización al día."
        ],
        techStack: ["Apache Kafka", "Node.js", "TypeScript", "SAP CDC", "Salesforce API", "Docker"]
    },
    "2": {
        title: "API Gateway Empresarial de Alta Disponibilidad",
        category: "Gobernanza & Seguridad",
        diagram: `
            <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="project-diag-svg">
                <rect width="400" height="160" rx="8" fill="#0f172a"/>
                <rect x="15" y="65" width="55" height="30" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                <text x="42.5" y="83" fill="#94a3b8" font-size="9" font-family="Outfit" text-anchor="middle">Clientes</text>
                
                <path d="M70 80 H105" stroke="#64748b" stroke-width="1.5"/>
                
                <rect x="115" y="35" width="110" height="90" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <text x="170" y="65" fill="#f8fafc" font-size="11" font-family="Outfit" text-anchor="middle" font-weight="600">Kong Gateway</text>
                <text x="170" y="80" fill="#10b981" font-size="9" font-family="Fira Code" text-anchor="middle">OAuth2 Plugin</text>
                <text x="170" y="95" fill="#10b981" font-size="9" font-family="Fira Code" text-anchor="middle">Redis (Quotas)</text>
                
                <path d="M225 65 H285" stroke="#06b6d4" stroke-width="1.5"/>
                <path d="M225 95 H285" stroke="#06b6d4" stroke-width="1.5"/>
                
                <rect x="295" y="45" width="90" height="25" rx="4" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
                <text x="340" y="60" fill="#f8fafc" font-size="9" font-family="Outfit" text-anchor="middle">Servicio Backend A</text>
                
                <rect x="295" y="85" width="90" height="25" rx="4" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
                <text x="340" y="100" fill="#f8fafc" font-size="9" font-family="Outfit" text-anchor="middle">Servicio Backend B</text>
            </svg>
        `,
        challenge: "Cada microservicio implementaba su propia seguridad, límites de consumo y registro de logs, duplicando esfuerzo, dispersando la seguridad y haciendo imposible la gobernanza centralizada.",
        solution: "Configuración de Kong API Gateway en un clúster de AWS ECS para centralizar el ingreso. Implementación de políticas globales de rate-limiting respaldadas por Redis, autenticación mTLS y OAuth 2.0 mediante integración con el proveedor de identidad corporativo Okta. También desarrollamos un plugin en Lua para redirigir trazas de log con ID de correlación único a OpenTelemetry.",
        results: [
            "Centralización del 100% de la autenticación de la plataforma en el Gateway.",
            "Reducción del tiempo de desarrollo para nuevos endpoints en un 20% al delegar la seguridad.",
            "Capacidad para manejar ráfagas de 3,000 req/sec con sobrecarga de latencia inferior a 5ms.",
            "Trazabilidad de peticiones de extremo a extremo mediante el Correlation ID."
        ],
        techStack: ["Kong Gateway", "Lua Plugins", "AWS ECS", "Redis Cluster", "mTLS", "OAuth 2.0 / JWT"]
    },
    "3": {
        title: "Pipeline de Telemetría IoT de Alta Velocidad",
        category: "IoT & Procesamiento Ingesta",
        diagram: `
            <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="project-diag-svg">
                <rect width="400" height="160" rx="8" fill="#0f172a"/>
                
                <rect x="15" y="25" width="60" height="22" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="1"/>
                <text x="45" y="38" fill="#94a3b8" font-size="8" font-family="Outfit" text-anchor="middle">Métrica Sensor</text>
                <rect x="15" y="60" width="60" height="22" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="1"/>
                <text x="45" y="73" fill="#94a3b8" font-size="8" font-family="Outfit" text-anchor="middle">Métrica Sensor</text>
                <rect x="15" y="95" width="60" height="22" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="1"/>
                <text x="45" y="108" fill="#94a3b8" font-size="8" font-family="Outfit" text-anchor="middle">Métrica Sensor</text>
                
                <path d="M75 36 L120 65" stroke="#06b6d4" stroke-width="1"/>
                <path d="M75 71 H120" stroke="#06b6d4" stroke-width="1"/>
                <path d="M75 106 L120 85" stroke="#06b6d4" stroke-width="1"/>
                
                <rect x="130" y="55" width="100" height="40" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
                <text x="180" y="75" fill="#f8fafc" font-size="10" font-family="Outfit" text-anchor="middle" font-weight="600">RabbitMQ</text>
                <text x="180" y="87" fill="#f43f5e" font-size="7" font-family="Fira Code" text-anchor="middle">Topic Exchange</text>
                
                <path d="M230 75 H280" stroke="#10b981" stroke-width="1.5"/>
                
                <rect x="290" y="55" width="90" height="40" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
                <text x="335" y="75" fill="#f8fafc" font-size="10" font-family="Outfit" text-anchor="middle" font-weight="600">TimescaleDB</text>
                <text x="335" y="87" fill="#10b981" font-size="7" font-family="Fira Code" text-anchor="middle">Go Ingestor</text>
            </svg>
        `,
        challenge: "Ingesta inestable de telemetría proveniente de 10,000 sensores de maquinaria pesada. Las conexiones directas a base de datos causaban bloqueos por exceso de escrituras simultáneas y pérdidas de datos.",
        solution: "Diseño de un búfer utilizando RabbitMQ. Los sensores publican métricas MQTT/HTTPS en RabbitMQ. Diseñamos un cluster con colas segmentadas por tipo de métrica para paralelizar la ingesta. Desarrollamos consumidores altamente optimizados en Golang que leen en lotes dinámicos de las colas, parsean/validan los payloads en microsegundos, y los guardan eficientemente en TimescaleDB.",
        results: [
            "Procesamiento sin pérdidas de más de 15 millones de paquetes de telemetría diarios.",
            "Reducción del consumo de CPU en base de datos en un 60% gracias al agrupamiento de inserciones por lote.",
            "Escalabilidad horizontal lineal: se añaden más contenedores consumidores de Go al subir el tráfico de sensores.",
            "Tolerancia a fallos: el buffer almacena mensajes de forma segura por hasta 48 horas si la base de datos entra en mantenimiento."
        ],
        techStack: ["RabbitMQ", "Golang", "TimescaleDB (Postgres)", "Docker Swarm", "MQTT Protocol", "Grafana"]
    }
};

// ==========================================================================
// CORE FUNCTIONS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initScrollIndicator();
    initMobileNav();
    initTypedSubtitle();
    initScrollReveal();
    initSkillsFilter();
    initProjectModals();
    initContactForm();
    updateCopyrightYear();
});

// 1. Theme Manager
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
    
    themeToggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark");
        }
    });
}

// 2. Scroll Progress Bar
function initScrollIndicator() {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const scrollPercentage = (window.scrollY / totalHeight) * 100;
            scrollIndicator.style.width = `${scrollPercentage}%`;
        }
        
        // Add header shadow/shrink class on scroll
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// 3. Mobile Navigation Menu
function initMobileNav() {
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    
    toggleBtn.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("open");
        toggleBtn.classList.toggle("open");
        toggleBtn.setAttribute("aria-expanded", isOpen);
        
        // Disable body scroll when menu is open
        document.body.style.overflow = isOpen ? "hidden" : "";
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
            toggleBtn.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        });
    });
}

// 4. Hero Subtitle Text Rotation
function initTypedSubtitle() {
    const typedTextEl = document.getElementById("typed-text");
    let wordIndex = 0;
    
    // Smooth transition using CSS opacity class
    setInterval(() => {
        typedTextEl.style.opacity = 0;
        
        setTimeout(() => {
            wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
            typedTextEl.textContent = TYPED_WORDS[wordIndex];
            typedTextEl.style.opacity = 1;
        }, 300); // matches fade out transition duration
    }, 4000);
}

// 5. Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animated in
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// 6. Skills Matrix Filtering
function initSkillsFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const skillCards = document.querySelectorAll(".skill-card");
    const skillsGrid = document.getElementById("skills-grid");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Toggle active state
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-category");
            
            // Temporary hide grid to prevent flickering layouts during transitions
            skillsGrid.style.opacity = 0;
            
            setTimeout(() => {
                skillCards.forEach(card => {
                    const cardCat = card.getAttribute("data-category");
                    
                    if (category === "all" || cardCat === category) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                });
                skillsGrid.style.opacity = 1;
            }, 200);
        });
    });
}

// 7. Project Detail Modals
function initProjectModals() {
    const modal = document.getElementById("project-modal");
    const modalContent = document.getElementById("modal-project-content");
    const closeBtn = document.querySelector(".modal-close");
    const backdrop = document.querySelector(".modal-backdrop");
    const projectButtons = document.querySelectorAll(".project-btn");
    
    let lastActiveElement = null;

    function openModal(projectId) {
        lastActiveElement = document.activeElement;
        const details = PROJECT_DETAILS[projectId];
        if (!details) return;
        
        // Build tech badges string
        const techBadges = details.techStack.map(tech => `<span>${tech}</span>`).join("");
        
        // Build results list string
        const resultsList = details.results.map(res => `<li>${res}</li>`).join("");
        
        modalContent.innerHTML = `
            <span class="modal-project-category">${details.category}</span>
            <h3 class="modal-project-title">${details.title}</h3>
            
            <div class="modal-diagram">
                ${details.diagram}
            </div>
            
            <h4 class="modal-section-title">El Desafío</h4>
            <p>${details.challenge}</p>
            
            <h4 class="modal-section-title">La Solución</h4>
            <p>${details.solution}</p>
            
            <h4 class="modal-section-title">Resultados clave & KPIs</h4>
            <ul class="modal-list">
                ${resultsList}
            </ul>
            
            <h4 class="modal-section-title">Tecnologías Usadas</h4>
            <div class="project-tech">
                ${techBadges}
            </div>
        `;
        
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // lock scroll
        
        // Focus first close button for accessibility
        closeBtn.focus();
    }
    
    function closeModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // restore scroll
        
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    }
    
    projectButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const projectId = btn.getAttribute("data-project");
            openModal(projectId);
        });
    });
    
    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    
    // Close on escape
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeModal();
        }
    });
}

// 8. Contact Form Handling
function initContactForm() {
    const form = document.getElementById("contact-form");
    const feedbackBanner = document.getElementById("form-feedback");
    const feedbackMessage = document.getElementById("form-feedback-message");
    const submitBtn = form.querySelector(".btn-submit");
    const spinner = form.querySelector(".btn-spinner");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Reset feedback
        feedbackBanner.className = "form-feedback-banner hidden";
        
        // Inputs
        const nameInput = document.getElementById("form-name");
        const emailInput = document.getElementById("form-email");
        const subjectInput = document.getElementById("form-subject");
        const messageInput = document.getElementById("form-message");
        
        let isValid = true;
        
        // Validation rules
        if (!nameInput.value.trim()) {
            setInputState(nameInput, false);
            isValid = false;
        } else {
            setInputState(nameInput, true);
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            setInputState(emailInput, false);
            isValid = false;
        } else {
            setInputState(emailInput, true);
        }
        
        if (!subjectInput.value.trim()) {
            setInputState(subjectInput, false);
            isValid = false;
        } else {
            setInputState(subjectInput, true);
        }
        
        if (!messageInput.value.trim()) {
            setInputState(messageInput, false);
            isValid = false;
        } else {
            setInputState(messageInput, true);
        }
        
        if (!isValid) return;
        
        // If form is valid, trigger simulated submission
        submitBtn.disabled = true;
        spinner.classList.remove("hidden");
        const btnText = submitBtn.querySelector("span");
        const oldText = btnText.textContent;
        btnText.textContent = "Procesando...";
        
        setTimeout(() => {
            // Mock success response
            submitBtn.disabled = false;
            spinner.classList.add("hidden");
            btnText.textContent = oldText;
            
            // Show banner
            feedbackMessage.textContent = "¡Mensaje enviado con éxito! Me pondré en contacto contigo a la brevedad.";
            feedbackBanner.className = "form-feedback-banner success";
            
            // Clear inputs and classes
            form.reset();
            const formGroups = form.querySelectorAll(".form-group");
            formGroups.forEach(g => g.classList.remove("invalid"));
            
            // Auto hide feedback banner after 6s
            setTimeout(() => {
                feedbackBanner.className = "form-feedback-banner hidden";
            }, 6000);
            
        }, 1500);
    });
    
    // Clear error class while typing
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                input.parentElement.classList.remove("invalid");
            }
        });
    });
}

function setInputState(input, isValid) {
    const parent = input.parentElement;
    if (isValid) {
        parent.classList.remove("invalid");
    } else {
        parent.classList.add("invalid");
    }
}

// 9. Copyright update helper
function updateCopyrightYear() {
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
