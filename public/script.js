// luis-ota · interações do portfólio

(function () {
  "use strict";

  var i18n = window.I18N;
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(chave) {
    return i18n ? i18n.t(chave) : "";
  }

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

  function rotularMenu(aberto) {
    toggle.setAttribute("aria-label", aberto ? t("nav.closeMenu") : t("nav.openMenu"));
  }

  toggle.addEventListener("click", function () {
    var aberto = nav.classList.toggle("aberto");
    toggle.classList.toggle("aberto", aberto);
    toggle.setAttribute("aria-expanded", String(aberto));
    rotularMenu(aberto);
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("aberto");
      toggle.classList.remove("aberto");
      toggle.setAttribute("aria-expanded", "false");
      rotularMenu(false);
    });
  });
  rotularMenu(false);

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
  var geracao = 0;

  function linhasAtuais() {
    return i18n ? i18n.linhasTerminal() : [];
  }

  function renderizarInstantaneo() {
    if (!terminal) return;
    geracao++;
    var linhas = linhasAtuais();
    terminal.textContent = "";
    linhas.forEach(function (texto, indice) {
      var div = document.createElement("div");
      div.className = "linha " + (indice <= 1 ? "prompt" : "ok");
      div.textContent = texto;
      terminal.appendChild(div);
    });
  }

  function typewriter() {
    if (!terminal) return;
    var minhaGeracao = ++geracao;
    var linhas = linhasAtuais();
    terminal.textContent = "";

    if (reduzido) {
      renderizarInstantaneo();
      return;
    }

    var li = 0;
    var ci = 0;
    var acelerar = false;

    function digitar() {
      if (minhaGeracao !== geracao) return;
      if (li >= linhas.length) return;
      var texto = linhas[li];

      if (ci === 0) {
        var div = document.createElement("div");
        div.className = "linha " + (li <= 1 ? "prompt" : "ok");
        terminal.appendChild(div);
      }

      var divAtual = terminal.lastElementChild;
      divAtual.textContent = texto.slice(0, ci + 1);
      ci++;

      if (ci >= texto.length) {
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

  /* troca de idioma: cancela a digitação e redesenha na hora */
  document.addEventListener("langchange", function () {
    renderizarInstantaneo();
  });

  /* espera o evento de visibilidade do terminal para digitar */
  if (terminal && "IntersectionObserver" in window && !reduzido) {
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

  /* ---------- e-mail: restaura o mailto se o Cloudflare ofuscar ---------- */
  var linkEmail = document.querySelector("a[data-email]");
  if (linkEmail) linkEmail.setAttribute("href", "mailto:" + linkEmail.getAttribute("data-email"));

  /* ---------- ano dinâmico no rodapé ---------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
