// ====== EDITA AQUÍ TUS DATOS ======
const skills = ["Kotlin","Android","Jetpack Compose","MVVM","Hilt","Retrofit","Flutter","Dart","BLoC","Firebase","Git","GitHub"];

const projects = [
  { title: "Pokémon App", desc: "App Flutter que genera Pokémon aleatorios desde la PokéAPI y guarda tu colección local con Hive.",
    tags: ["Flutter","BLoC","Clean Architecture","Hive"], link: "https://github.com/chekelon/Pokemon-app" },
  { title: "Job Feed (Kotlin)", desc: "App Android que descarga un feed XML de empleos, lo parsea y muestra lista y detalle con MVVM.",
    tags: ["Kotlin","MVVM","XmlPullParser","LiveData"], link: "https://github.com/chekelon/prueba_tecnica_Kotlin" },
  { title: "TicTacToe", desc: "Juego de triqui en Android con Hilt y Firebase Realtime Database.",
    tags: ["Kotlin","Hilt","Firebase"], link: "https://github.com/chekelon" }
];
// ==================================

const $ = s => document.querySelector(s);

$("#skills").innerHTML = skills.map(s => `<li>${s}</li>`).join("");
$("#projects").innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    <a href="${p.link}" target="_blank" rel="noopener">Ver en GitHub →</a>
  </article>`).join("");

$("#year").textContent = new Date().getFullYear();

// Tema claro/oscuro (se recuerda en el navegador)
const root = document.documentElement, btn = $("#theme");
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
const initial = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
function setTheme(t){ root.dataset.theme = t; btn.textContent = t === "dark" ? "🌙" : "☀️"; try { localStorage.setItem("theme", t); } catch {} }
setTheme(initial);
btn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

// Menú móvil
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

// Animación al hacer scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
