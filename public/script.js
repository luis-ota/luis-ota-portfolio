// luis-ota · interações do portfólio

(function () {
  "use strict";

  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- header com borda ao rolar ---------- */
  var header = document.querySelector(".site-header");
  function headerRolado() {
    if (header) header.classList.toggle("rolado", window.scrollY > 8);
  }
  window.addEventListener("scroll", headerRolado, { passive: true });
  headerRolado();

  /* ---------- menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", function () {
    var aberto = nav.classList.toggle("aberto");
    toggle.classList.toggle("aberto", aberto);
    toggle.setAttribute("aria-expanded", String(aberto));
    toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("aberto");
      toggle.classList.remove("aberto");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- reveal on scroll ---------- */
  var revelaveis = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduzido) {
    var observer = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("in");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revelaveis.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revelaveis.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- typewriter do terminal ---------- */
  var terminal = document.getElementById("typewriter");
  var caret = document.getElementById("caret");

  var linhas = [
    { texto: "luis-ota@curitiba: ~", classe: "prompt" },
    { texto: "$ luis --stack", classe: "prompt" },
    { texto: "web ..... next.js · react · typescript", classe: "ok" },
    { texto: "mobile .. flutter · dart · firebase", classe: "ok" },
    { texto: "auto .... python · apis · scripts", classe: "ok" },
    { texto: "ai ...... rag · gemini · agentes", classe: "ok" },
    { texto: "rust .... swaptop · cli · tokio", classe: "ok" },
  ];

  function typewriter() {
    if (!terminal) return;
    terminal.textContent = "";

    if (reduzido) {
      linhas.forEach(function (linha) {
        var div = document.createElement("div");
        div.className = "linha " + linha.classe;
        div.textContent = linha.texto;
        terminal.appendChild(div);
      });
      return;
    }

    var li = 0;
    var ci = 0;
    var acelerar = false;

    function digitar() {
      if (li >= linhas.length) return;
      var linha = linhas[li];

      if (ci === 0) {
        var div = document.createElement("div");
        div.className = "linha " + linha.classe;
        terminal.appendChild(div);
      }

      var div = terminal.lastElementChild;
      div.textContent = linha.texto.slice(0, ci + 1);
      ci++;

      if (ci >= linha.texto.length) {
        li++;
        ci = 0;
        if (li === 1) acelerar = true;
        if (li >= linhas.length) return;
      }

      var espera = acelerar ? 18 : 42;
      setTimeout(digitar, espera);
    }

    // pequena pausa para o usuário ver o prompt inicial
    setTimeout(digitar, 500);
  }

  /* espera o evento de visibilidade do terminal para digitar */
  if ("IntersectionObserver" in window && !reduzido) {
    var tObs = new IntersectionObserver(
      function (entradas) {
        if (entradas[0].isIntersecting) {
          typewriter();
          tObs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    tObs.observe(terminal);
  } else {
    typewriter();
  }
  if (caret) caret.style.display = terminal ? "inline-block" : "none";

  /* ---------- voltar ao topo (logo e rodapé) ---------- */
  document.querySelectorAll('a[href="#topo"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduzido ? "auto" : "smooth" });
    });
  });

  /* ---------- ano dinâmico no rodapé ---------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
