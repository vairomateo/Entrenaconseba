// ==========================================
// 1. DATA Y RENDERIZADO DE EJERCICIOS
// ==========================================
const exercises = [
    {
        title: "Dominadas",
        category: "espalda",
        muscle: "Dorsales, trapecio inferior",
        desc: "Evitá balancear el cuerpo",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo1"
    },
    {
        title: "Remo con barra",
        category: "espalda",
        muscle: "Dorsales, romboides",
        desc: "Mantén la espalda recta",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo1"
    },
    {
        title: "Face pull",
        category: "espalda",
        muscle: "Trapecio, deltoides posterior",
        desc: "Lleva las manos a la frente",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo1"
    },
    {
        title: "Jalon al pecho",
        category: "espalda",
        muscle: "Dorsales, bíceps",
        desc: "No bloquees los codos",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo1"
    },
    {
        title: "Superman",
        category: "espalda",
        muscle: "Lumbar, erectores espinales",
        desc: "Contrae glúteos al elevar",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo1"
    },
    {
        title: "Remo con mancuernas",
        category: "espalda",
        muscle: "Dorsales, romboides",
        desc: "Apoya bien la rodilla",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo1"
    },
    {
        title: "Press de Banca Plano",
        category: "pecho",
        muscle: "Pectoral Mayor & Tríceps",
        desc: "Mantené los pies clavados en el suelo, retracción escapular constante y controlá la bajada hasta el esternón.",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo2"
    },
    {
        title: "Press inclinado con mancuernas",
        category: "pecho",
        muscle: "Pectoral superior",
        desc: "Escápulas juntas, ángulo 30–45°, no bloquees codos",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo2"
    },
    {
        title: "Press declinado",
        category: "pecho",
        muscle: "Pectoral inferiors",
        desc: "Mantené los pies clavados en el suelo, retracción escapular constante y controlá la bajada hasta el esternón.",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo2"
    },
    {
        title: "Flexiones clásicas",
        category: "pecho",
        muscle: "Pectoral medio",
        desc: "Manos a la altura del pecho, core firme, bajada lenta",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo2"
    },
    {
        title: "Flexiones diamante",
        category: "pecho",
        muscle: "Pectoral interno, tríceps",
        desc: "Codos pegados al cuerpo, controla la extensión",
        videoUrl: "https://www.youtube.com/watch?v=NO3fnbQr5nk&t=2s"
    },
    {
        title: "Aperturas con mancuernas",
        category: "pecho",
        muscle: "Pectoral externo",
        desc: "Codos semi-flexionados, movimiento amplio y lento",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo2"
    },
    {
        title: "Pullover con mancuerna",
        category: "pecho",
        muscle: "Pectoral mayor y serrato",
        desc: "Mantén cadera fija, respiración profunda al bajar",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo2"
    },
    {
        title: "Curl de Bíceps en Polea",
        category: "biceps",
        muscle: "Bíceps Braquial",
        desc: "Mantené el codo fijo al costado del torso. Evitá meter impulso con la cadera en las últimas repeticiones.",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo3"
    },
    {
        title: "Curl con barra",
        category: "biceps",
        muscle: "Bíceps braquial",
        desc: "Pies firmes, codos pegados al torso, controla la bajada",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo3"
    },
    {
        title: "Curl alterno con mancuernas",
        category: "biceps",
        muscle: "Bíceps Braquial",
        desc: "Supinación completa al subir, evita balanceo",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo3"
    },
    {
        title: "Curl martillo",
        category: "biceps",
        muscle: "Braquial y braquiorradial",
        desc: "Muñeca neutra, recorrido lento",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo3"
    },
    {
        title: "Curl concentrado",
        category: "biceps",
        muscle: "Bíceps braquial (aislamiento)",
        desc: "Apoya el codo en el muslo, máxima contracción",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo3"
    },
    {
        title: "Chin-ups (dominadas supinas)",
        category: "biceps",
        muscle: "Bíceps braquial y dorsales",
        desc: "Codos cerrados, subí hasta barbilla",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo3"
    },
    {
        title: "Press Francés con Mancuernas",
        category: "triceps",
        muscle: "Tríceps (Cabeza Larga)",
        desc: "Llevá las mancuernas ligeramente por detrás de la cabeza para mantener tensión continua en la fase excéntrica.",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo4"
    },
    {
        title: "Fondos en paralelas",
        category: "triceps",
        muscle: "Tríceps largo y medial",
        desc: "Mantén el torso ligeramente inclinado, codos pegados, bajada controlada",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo4"
    },
    {
        title: "Extensión de tríceps en polea alta",
        category: "triceps",
        muscle: "Tríceps lateral",
        desc: "Codos pegados al torso, extensión completa sin bloquear",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo4"
    },
    {
        title: "Press francés con barra",
        category: "triceps",
        muscle: "Tríceps largo",
        desc: "Retracción escapular, codos fijos, barra baja hacia la frente",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo4"
    },
    {
        title: "Extensión en cuerda (polea)",
        category: "triceps",
        muscle: "Tríceps lateral)",
        desc: "Separa las puntas al final, tensión constante",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo4"
    },
    {
        title: "Sentadilla con barra",
        category: "piernas",
        muscle: "Cuádriceps, glúteos",
        desc: "Pies firmes al ancho de hombros, rodillas alineadas, bajada controlada hasta paralelo",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Prensa de piernas",
        category: "piernas",
        muscle: "Cuádriceps, glúteos",
        desc: "Espalda pegada al respaldo, no bloquees rodillas",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Peso muerto rumano",
        category: "piernas",
        muscle: "Isquiotibiales, glúteos",
        desc: "Retracción escapular, bajada lenta con cadera atrás",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Sentadilla búlgara",
        category: "piernas",
        muscle: "Cuádriceps, glúteos",
        desc: "Pie trasero elevado, torso recto, bajada controlada",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Hip thrust (empuje de cadera)",
        category: "piernas",
        muscle: "Glúteos, isquiotibiales",
        desc: "Escápulas apoyadas, pies firmes, extensión completa",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Extensión de cuádriceps en máquina",
        category: "piernas",
        muscle: "Cuádriceps",
        desc: "No bloquees rodillas, subida lenta",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Elevación de talones (gemelos)",
        category: "piernas",
        muscle: "Gemelos",
        desc: "Pies clavados, recorrido completo hasta arriba",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo5"
    },
    {
        title: "Plancha frontal",
        category: "core",
        muscle: "Recto abdominal, transverso",
        desc: "Pies firmes, glúteos contraídos, no hundas la cadera",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo6"
    },
    {
        title: "Plancha lateral",
        category: "core",
        muscle: "Oblicuos, transverso",
        desc: "Codo bajo el hombro, cadera elevada",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo6"
    },
    {
        title: "Mountain Climbers",
        category: "core",
        muscle: "Recto abdominal, oblicuos",
        desc: "Core firme, rodillas al pecho sin rebote",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo6"
    },
    {
        title: "Dead Bug",
        category: "core",
        muscle: "Recto abdominal, transverso",
        desc: "Zona lumbar pegada al suelo, movimiento lento",
        videoUrl: "https://www.youtube.com/watch?v=Ejemplo6"
    }
];

// Variables de estado
const INITIAL_SHOW = 6;
let currentCategory = 'todos';
let currentSearchTerm = '';
let isExpanded = false;

// ==========================================
// SCROLL REVEAL OBSERVER
// ==========================================
const observerOptions = {
    root: null,
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function observeNewElements() {
    document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        revealObserver.observe(el);
    });
}

// ==========================================
// FUNCIÓN RENDERIZAR EJERCICIOS
// ==========================================
function renderExercises() {
    const grid = document.getElementById('exercise-grid');
    const toggleBtn = document.getElementById('btnToggleExercises');
    if (!grid) return;

    grid.innerHTML = '';

    // Filtrar por categoría
    let filtered = currentCategory === 'todos' 
        ? exercises 
        : exercises.filter(e => e.category === currentCategory);

    // Filtrar por texto libre (título o músculo)
    if (currentSearchTerm) {
        const term = cleanText(currentSearchTerm);
        filtered = filtered.filter(e =>
            cleanText(e.title).includes(term) || cleanText(e.muscle).includes(term)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #9ca3af;">No encontramos ejercicios que coincidan con tu búsqueda.</p>`;
        if (toggleBtn) toggleBtn.parentElement.style.display = 'none';
        return;
    }

    // Recortar según si está expandido o no
    const itemsToDisplay = isExpanded ? filtered : filtered.slice(0, INITIAL_SHOW);

    itemsToDisplay.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'ex-card reveal';
        card.innerHTML = `
            <div>
                <div class="ex-top-banner">${ex.category.toUpperCase()}</div>
                <h3 class="ex-title">${ex.title}</h3>
                <p class="ex-desc">${ex.desc}</p>
                <div class="ex-tag-muscle">
                    <i class="fa-solid fa-dumbbell"></i> ${ex.muscle}
                </div>
            </div>
            <a href="${ex.videoUrl}" target="_blank" class="btn-card-cta">
                <i class="fa-solid fa-circle-play"></i> VER TÉCNICA
            </a>
        `;
        grid.appendChild(card);
    });

    // Activar animación Scroll Reveal en las nuevas tarjetas
    observeNewElements();

    // Administrar el botón "Ver más / Ver menos"
    if (toggleBtn) {
        if (filtered.length <= INITIAL_SHOW) {
            toggleBtn.parentElement.style.display = 'none';
        } else {
            toggleBtn.parentElement.style.display = 'block';
            toggleBtn.textContent = isExpanded ? 'Ver menos' : 'Ver más ejercicios';
        }
    }
}

function cleanText(text) {
    return (text || "")
        .toString()
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// ==========================================
// 2. INICIALIZACIÓN Y EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // Inicializar Scroll Reveal para elementos estáticos de la página
    observeNewElements();

    // Render inicial
    renderExercises();

    // Evento de búsqueda por texto libre
    const searchInput = document.getElementById('exercise-search-input');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearchTerm = e.target.value;
                isExpanded = false;
                renderExercises();
            }, 200);
        });
    }

    // Evento de clicks en filtros (Pills)
    document.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');

            currentCategory = e.target.dataset.cat;
            isExpanded = false; // Vuelve a mostrar solo 6 al cambiar categoría
            renderExercises();
        });
    });

    // Evento de click en el botón Ver Más / Ver Menos
    const toggleBtn = document.getElementById('btnToggleExercises');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderExercises();

            // Si reduce la lista, hace un scroll suave hacia el inicio del grid
            if (!isExpanded) {
                const grid = document.getElementById('exercise-grid');
                if (grid) {
                    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    // ==========================================
    // BÚSQUEDA DE ALUMNOS POR ID / NOMBRE
    // ==========================================
    const searchBtn = document.getElementById('search-btn');
    const nameInput = document.getElementById('student-name-input');
    const routineOutput = document.getElementById('routine-output');

    async function searchRoutine() {
        const rawInput = nameInput ? nameInput.value : '';
        const query = cleanText(rawInput);

        if (!query) {
            routineOutput.classList.remove('hidden');
            routineOutput.innerHTML = `<p style="color: #ff4d4d; margin:0;">Ingresá tu ID o número de alumno para buscar.</p>`;
            return;
        }

        // Muestra estado de carga (spinner) mientras se resuelve la búsqueda
        routineOutput.classList.remove('hidden');
        routineOutput.innerHTML = `
            <div class="loading-state">
                <span class="spinner"></span>
                <span>Buscando tu rutina...</span>
            </div>
        `;
        if (searchBtn) searchBtn.disabled = true;

        try {
            // Se asegura un mínimo de tiempo visible del spinner, aunque la
            // respuesta sea instantánea (evita el "parpadeo" del loading state)
            const [response] = await Promise.all([
                fetch('./alumnos.json'),
                new Promise(resolve => setTimeout(resolve, 400))
            ]);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const students = await response.json();
            
            // BUSCADOR: Coincide por ID exacto O por nombre
            const student = students.find(s => {
                const studentId = cleanText(s.id);
                const studentName = cleanText(s.nombre);
                
                return studentId === query || studentName.includes(query) || query.includes(studentName);
            });

            routineOutput.classList.remove('hidden');

            if (student) {
                let html = `
                    <div class="student-header">
                        <h4>¡Hola, ${student.nombre}!</h4>
                        <span class="plan-badge">${student.plan}</span>
                    </div>
                    <div class="routine-list">
                `;

                student.rutina.forEach(item => {
                    html += `
                        <div class="day-block">
                            <p class="day-title">${item.dia}</p>
                            <ul>
                                ${item.ejercicios.map(ej => `<li><i class="fa-solid fa-check"></i> ${ej}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                });

                html += `</div>`;
                html += `
                    <button type="button" id="downloadPdfBtn" class="btn-download-pdf">
                        <i class="fa-solid fa-file-pdf"></i> Descargar rutina en PDF
                    </button>
                `;
                routineOutput.innerHTML = html;

                const downloadBtn = document.getElementById('downloadPdfBtn');
                if (downloadBtn) {
                    downloadBtn.addEventListener('click', () => {
                        if (typeof generateRoutinePDF !== 'function') {
                            console.error('No se pudo cargar el generador de PDF.');
                            return;
                        }
                        const originalLabel = downloadBtn.innerHTML;
                        downloadBtn.disabled = true;
                        downloadBtn.innerHTML = '<span class="spinner spinner-dark"></span> Generando PDF...';
                        // Pequeño delay para que el spinner se vea, ya que la generación es casi instantánea
                        setTimeout(() => {
                            try {
                                generateRoutinePDF(student);
                            } catch (err) {
                                console.error('Error generando el PDF:', err);
                            } finally {
                                downloadBtn.disabled = false;
                                downloadBtn.innerHTML = originalLabel;
                            }
                        }, 300);
                    });
                }
            } else {
                routineOutput.innerHTML = `
                    <h4 style="color: #ff4d4d; margin-bottom: 5px;">ID / Alumno no encontrado</h4>
                    <p style="color: #9ca3af; font-size: 0.9rem; margin:0;">No encontramos el código "<b>${rawInput}</b>". Verificá tus datos o consultá a Seba.</p>
                `;
            }

        } catch (error) {
            console.error("Error al leer alumnos.json:", error);
            routineOutput.classList.remove('hidden');
            routineOutput.innerHTML = `
                <h4 style="color: #ff4d4d; margin-bottom: 5px;">Error al cargar datos</h4>
                <p style="color: #9ca3af; font-size: 0.88rem; margin:0;">
                    Si estás abriendo la página localmente con doble clic, recordá usar <b>Live Server</b> en VS Code.
                </p>
            `;
        } finally {
            if (searchBtn) searchBtn.disabled = false;
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', searchRoutine);
    }

    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchRoutine();
        });
    }
});