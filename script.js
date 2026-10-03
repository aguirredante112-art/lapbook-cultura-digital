/**
 * LAPBOOK DIGITAL INTERACTIVO — CULTURA DIGITAL
 * Script de Lógica Interactiva y Manejo Dinámico de Datos
 */

document.addEventListener("DOMContentLoaded", () => {
  inicializarDatosAlumno();
  cargarSeccionCodigoAbierto();
  cargarSeccionPropietario();
  cargarSeccionTiposSoftware(0); // Carga 'Software de Sistema' por defecto
  cargarSeccionSeguridadDigital();
  generarAcordeonTimeline();
  cargarFuentesConsultadas();
  configurarEventosNavegacion();
});

/* --------------------------------------------------------------------------
   1. INICIALIZAR DATOS DEL ALUMNO DESDE CONTENIDO.JS
   -------------------------------------------------------------------------- */
function inicializarDatosAlumno() {
  const d = LAPBOOK_DATA.alumno;
  
  // Portada
  document.getElementById("cover-title").textContent = d.titulo;
  document.getElementById("cover-subtitle").textContent = d.subtitulo;
  document.getElementById("cover-student").textContent = d.nombre;
  document.getElementById("cover-teacher").textContent = d.docente;
  document.getElementById("cover-group").textContent = d.grupo;
  document.getElementById("cover-shift").textContent = d.turno;

  // Header interior
  document.getElementById("hdr-title").textContent = d.titulo;
  document.getElementById("hdr-student").textContent = `${d.nombre} | ${d.materia}`;

  // Tab inicio
  document.getElementById("init-teacher").textContent = d.docente;
  document.getElementById("init-student").textContent = d.nombre;
  document.getElementById("init-group").textContent = `${d.grupo} — ${d.turno}`;
}

/* --------------------------------------------------------------------------
   2. NAVEGACIÓN Y APERTURA DEL LAPBOOK
   -------------------------------------------------------------------------- */
function configurarEventosNavegacion() {
  // Abrir portada
  const btnOpen = document.getElementById("btn-open-lapbook");
  const cover = document.getElementById("cover");
  const main = document.getElementById("lapbook-main");

  btnOpen.addEventListener("click", () => {
    cover.classList.add("hidden");
    main.classList.remove("hidden");
  });

  // Pestañas
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

/* --------------------------------------------------------------------------
   3. CÓDIGO ABIERTO
   -------------------------------------------------------------------------- */
function cargarSeccionCodigoAbierto() {
  const ca = LAPBOOK_DATA.codigoAbierto;
  
  document.getElementById("ca-que-es").textContent = ca.queEs;
  poblarLista("ca-caracteristicas", ca.caracteristicas);
  poblarLista("ca-ventajas", ca.ventajas);
  poblarLista("ca-ejemplos", ca.ejemplos);
  document.getElementById("ca-importancia").textContent = ca.importancia;
}

function toggleFlap(element) {
  element.classList.toggle("open");
}

/* --------------------------------------------------------------------------
   4. SOFTWARE PROPIETARIO & SOBRE
   -------------------------------------------------------------------------- */
function cargarSeccionPropietario() {
  const pr = LAPBOOK_DATA.propietario;

  document.getElementById("pr-definicion").textContent = pr.definicion;
  poblarLista("pr-caracteristicas", pr.caracteristicas);
  poblarLista("pr-ventajas", pr.ventajas);
  poblarLista("pr-limitaciones", pr.limitaciones);
  poblarLista("pr-ejemplos", pr.ejemplos);
  document.getElementById("pr-diferencias").textContent = pr.diferencias;
}

function toggleEnvelope() {
  const env = document.getElementById("prop-envelope");
  env.classList.toggle("open");
}

/* --------------------------------------------------------------------------
   5. RUEDA GIRATORIA DE TIPOS DE SOFTWARE
   -------------------------------------------------------------------------- */
const TIPOS_KEYS = ["sistema", "aplicacion", "desarrollo", "seguridad"];

function selectWheelSegment(index) {
  const wheel = document.getElementById("paper-wheel");
  const degrees = [0, -90, -180, -270];
  wheel.style.transform = `rotate(${degrees[index]}deg)`;

  cargarSeccionTiposSoftware(index);
}

function cargarSeccionTiposSoftware(index) {
  const key = TIPOS_KEYS[index];
  const info = LAPBOOK_DATA.tiposSoftware[key];

  document.getElementById("sw-type-badge").textContent = `CATEGORÍA 0${index + 1}`;
  document.getElementById("sw-type-name").textContent = info.nombre;
  document.getElementById("sw-type-def").textContent = info.definicion;
  document.getElementById("sw-type-func").textContent = info.funcion;

  poblarLista("sw-type-chars", info.caracteristicas);
  poblarLista("sw-type-ex", info.ejemplos);

  const imgEl = document.getElementById("sw-type-img");
  imgEl.src = `images/${key}.jpg`;
  imgEl.setAttribute("data-img-id", key);
  imgEl.style.display = "block"; // Reset
  
  // Limpiar posible cartel de pendiente previo
  const slot = imgEl.parentElement;
  const oldPending = slot.querySelector(".img-pending-box");
  if (oldPending) oldPending.remove();
}

/* --------------------------------------------------------------------------
   6. SEGURIDAD DIGITAL
   -------------------------------------------------------------------------- */
function cargarSeccionSeguridadDigital() {
  const sec = LAPBOOK_DATA.seguridadDigital;

  document.getElementById("sec-que-es").textContent = sec.queEs;
  document.getElementById("sec-para-que").textContent = sec.paraQueSirve;
  poblarLista("sec-funciones", sec.funciones);
  poblarLista("sec-ejemplos", sec.ejemplos);
  document.getElementById("sec-importancia").textContent = sec.importancia;
}

/* --------------------------------------------------------------------------
   7. LÍNEA DEL TIEMPO EN ACCORDEÓN
   -------------------------------------------------------------------------- */
function generarAcordeonTimeline() {
  const container = document.getElementById("accordion-timeline");
  container.innerHTML = "";

  LAPBOOK_DATA.timeline.forEach((item, index) => {
    const accItem = document.createElement("div");
    accItem.className = `acc-item ${index === 0 ? 'active' : ''}`;

    const imgName = `timeline${index + 1}`;

    accItem.innerHTML = `
      <div class="acc-header" onclick="toggleAccordion(this)">
        <span class="acc-year">${item.year}</span>
        <span class="acc-title">${item.title}</span>
        <span class="acc-toggle">▼ VER FICHA</span>
      </div>
      <div class="acc-body">
        <p><strong>Inventor/Creador:</strong> ${item.inventor}</p>
        <p><strong>Explicación:</strong> ${item.desc}</p>
        <p><strong>Impacto Histórico:</strong> ${item.impacto}</p>
        <div class="img-slot">
          <img src="images/${imgName}.jpg" data-img-id="${imgName}" onerror="handleImageError(this, '${item.title.toUpperCase()}')">
        </div>
      </div>
    `;

    container.appendChild(accItem);
  });
}

function toggleAccordion(header) {
  const item = header.parentElement;
  item.classList.toggle("active");
}

/* --------------------------------------------------------------------------
   8. FUENTES CONSULTADAS
   -------------------------------------------------------------------------- */
function cargarFuentesConsultadas() {
  const ul = document.getElementById("sources-list");
  ul.innerHTML = "";

  LAPBOOK_DATA.fuentes.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${f.url}" target="_blank" rel="noopener">${f.nombre}</a>`;
    ul.appendChild(li);
  });
}

function toggleSourcesPocket() {
  const drawer = document.getElementById("sources-content");
  const arrow = document.getElementById("sources-arrow");
  drawer.classList.toggle("hidden");
  arrow.textContent = drawer.classList.contains("hidden") ? "▲" : "▼";
}

/* --------------------------------------------------------------------------
   9. MANEJO ELEGANTE DE IMÁGENES PENDIENTES
   -------------------------------------------------------------------------- */
function handleImageError(imgElement, label) {
  imgElement.style.display = "none";

  const parent = imgElement.parentElement;
  if (!parent.querySelector(".img-pending-box")) {
    const box = document.createElement("div");
    box.className = "img-pending-box";
    box.innerHTML = `
      <span class="icon">📷</span>
      <strong>IMAGEN PENDIENTE</strong>
      <span>Coloca "${imgElement.getAttribute("data-img-id") || 'imagen'}.jpg" en la carpeta /images</span>
      <span style="font-size: 0.75rem; color: #666; margin-top:2px;">[${label}]</span>
    `;
    parent.appendChild(box);
  }
}

/* HELPER PARA POBLAR LISTAS DINÁMICAS */
function poblarLista(elementId, items) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  items.forEach(it => {
    const li = document.createElement("li");
    li.textContent = it;
    el.appendChild(li);
  });
}
