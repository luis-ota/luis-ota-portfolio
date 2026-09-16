// portfolio neo · idioma (EN padrão, PT opcional) e detalhes de página

(function () {
  "use strict";

  var CHAVE = "luis-ota:lang";

  var DICIONARIO = {
    en: {
      "meta.description":
        "i build professional portfolios for actors, freelancers, content creators, and photographers. web, mobile, automation, and ai, by wired layer co.",
      "pular": "skip to content",
      "nav.aria": "main navigation",
      "nav.idioma": "language",
      "nav.sobre": "about",
      "nav.servicos": "services",
      "nav.projetos": "projects",
      "nav.relatos": "reviews",
      "nav.contato": "contact",
      "nav.classico": "classic version",
      "cartaz.kicker": "i build your",
      "cartaz.palavra": "portfolio",
      "cartaz.oficio": "professional",
      "cartaz.publico":
        'for <strong>actors, freelancers, content creators, and photographers</strong>',
      "cartaz.lead":
        "identity, structure, and the site itself: a portfolio at the level of your work. all from the same studio that ships web, mobile, automation, and ai.",
      "cartaz.cta": "message on whatsapp",
      "cartaz.whats": "whatsapp",
      "sobre.palavra": "who builds",
      "sobre.p1":
        "i'm <strong>luís otávio</strong>, a full-stack developer in curitiba, brazil, and the person behind <strong>wired layer co.</strong> i build portfolios and the systems that carry them: web applications, mobile apps, automations, and ai.",
      "sobre.p2":
        "every portfolio is made for the person, not for a template: what you do, who you want to reach, and how the work should be seen. then the same hands build the site, deploy it, and keep it running.",
      "ficha.nome": "name",
      "ficha.empresa": "company",
      "ficha.funcao": "role",
      "ficha.funcaoV": "full-stack developer",
      "ficha.formacao": "education",
      "ficha.formacaoV": "software engineering · pucpr",
      "ficha.local": "location",
      "ficha.localV": "curitiba, pr · brazil",
      "ficha.foco": "focus",
      "ficha.focoV": "portfolios · web · mobile · automation · ai",
      "ficha.dispo": "availability",
      "ficha.dispoV": "projects and partnerships",
      "servicos.rotulo": "what i build",
      "servicos.titulo": "a portfolio, and everything around it",
      "destaque.selo": "signature service",
      "destaque.titulo": "professional portfolio",
      "destaque.publico": "for actors, freelancers, content creators, and photographers",
      "destaque.texto":
        "from the first conversation to the site online: how your work is organized, written, and presented, plus a fast site you can share in any bio.",
      "destaque.l1": "portfolio site, ready to share",
      "destaque.l2": "structure and presentation of your work",
      "destaque.l3": "texts, sections, and calls to action",
      "destaque.l4": "domain, deploy, and updates",
      "destaque.cta": "start my portfolio",
      "precos.titulo": "prices",
      "precos.p1": "complete portfolio",
      "precos.p2": "simple changes after delivery",
      "precos.p3": "more complex changes",
      "s1.title": "web & custom systems",
      "s1.p":
        "web platforms, panels, dashboards, and landing pages with next.js, react, typescript, and postgresql, from prototype to production.",
      "s2.title": "mobile apps",
      "s2.p":
        "cross-platform apps with expo (react native) or flutter, integrated with firebase, apis, and push notifications.",
      "s3.title": "automation & api integration",
      "s3.p":
        "python routines that automate repetitive work, consolidate spreadsheets and reports, and connect platforms to each other.",
      "s4.title": "infrastructure, deploy & servers",
      "s4.p":
        "linux servers, docker, nginx, ssl, and cloudflare. deploys with ci/cd and monitoring, for sites and applications.",
      "s5.title": "ai solutions",
      "s5.p": "chatbots, data analysis agents, and rag architectures for intelligent search across your documents.",
      "projetos.rotulo": "selected projects",
      "projetos.titulo": "work that is already out there",
      "p0.tag": "cultural platform",
      "p0.title": "afroretratos cultural platform with anonymous feed",
      "p0.desc":
        "event agenda, institutional pages, and an anonymous community feed with moderation, built for a collective of advertising and cinema students at pucpr.",
      "p0.live": "live site",
      "p1.tag": "mobile",
      "p1.title": "freight and delivery management app",
      "p1.desc":
        "cross-platform app for a transport company with shipment tracking, delivery management, and real-time notifications.",
      "p2.tag": "artificial intelligence",
      "p2.title": "intelligent data analysis and rag platform",
      "p2.desc":
        "semantic analysis and contextual search across documents, with a reactive agent and interactive dashboards.",
      "p3.tag": "web",
      "p3.title": "ticket management and monitoring dashboard",
      "p3.desc":
        "web application for tracking technical requests in a factory environment, with metrics and an interactive map.",
      "p4.tag": "tooling",
      "p4.title": "swaptop, a command-line tool",
      "p4.desc": "utility for monitoring the linux swap area, with 3,028 downloads since launch.",
      "relatos.rotulo": "client review",
      "relato.quote":
        "luís built the afroretratos platform exactly as we envisioned: fast, easy to use, and with a level of finish i rarely see. communication was clear from day one and the result went beyond what we expected.",
      "relato.cargo": "advertising professional · afroretratos",
      "tec.rotulo": "tools",
      "tec.titulo": "what the work is made with",
      "tec.linguagens": "languages",
      "tec.front": "frontend & web",
      "tec.back": "backend",
      "tec.mobile": "mobile",
      "tec.dados": "databases",
      "tec.devops": "devops & cloud",
      "tec.msg": "messaging & cache",
      "fim.kicker": "let's make",
      "fim.palavra": "your portfolio",
      "fim.oficio": "this semester",
      "fim.lead":
        "a free diagnostic conversation, online, anywhere in the world. bring what you have, even if it is only an idea.",
      "fim.cta": "message on whatsapp",
      "canais.whats": "whatsapp",
      "canais.email": "email",
      "rodape.direitos": "all rights reserved.",
      "rodape.classico": "classic version"
    },

    pt: {
      "meta.description":
        "eu desenvolvo seu portfólio profissional: para atores, freelancers, criadores de conteúdo e fotógrafos. web, mobile, automação e ia, pela wired layer co.",
      "pular": "pular para o conteúdo",
      "nav.aria": "navegação principal",
      "nav.idioma": "idioma",
      "nav.sobre": "sobre",
      "nav.servicos": "serviços",
      "nav.projetos": "projetos",
      "nav.relatos": "relatos",
      "nav.contato": "contato",
      "nav.classico": "versão clássica",
      "cartaz.kicker": "eu desenvolvo seu",
      "cartaz.palavra": "portfólio",
      "cartaz.oficio": "profissional",
      "cartaz.publico":
        'para <strong>atores, freelancers, criadores de conteúdo e fotógrafos</strong>',
      "cartaz.lead":
        "identidade, estrutura e o site: um portfólio do nível do seu trabalho. tudo pelo mesmo estúdio que entrega web, mobile, automação e ia.",
      "cartaz.cta": "chamar no whatsapp",
      "cartaz.whats": "whatsapp",
      "sobre.palavra": "quem constrói",
      "sobre.p1":
        "sou o <strong>luís otávio</strong>, desenvolvedor full-stack em curitiba, e a pessoa por trás da <strong>wired layer co.</strong> construo portfólios e os sistemas que os sustentam: aplicações web, aplicativos, automações e ia.",
      "sobre.p2":
        "cada portfólio é feito para a pessoa, não para um modelo: o que você faz, quem quer alcançar e como o trabalho deve ser visto. depois, as mesmas mãos constroem o site, colocam no ar e mantêm rodando.",
      "ficha.nome": "nome",
      "ficha.empresa": "empresa",
      "ficha.funcao": "função",
      "ficha.funcaoV": "desenvolvedor full-stack",
      "ficha.formacao": "formação",
      "ficha.formacaoV": "engenharia de software · pucpr",
      "ficha.local": "localização",
      "ficha.localV": "curitiba, pr · brasil",
      "ficha.foco": "foco",
      "ficha.focoV": "portfólios · web · mobile · automação · ia",
      "ficha.dispo": "disponibilidade",
      "ficha.dispoV": "projetos e parcerias",
      "servicos.rotulo": "o que eu construo",
      "servicos.titulo": "um portfólio, e tudo em volta dele",
      "destaque.selo": "serviço assinatura",
      "destaque.titulo": "portfólio profissional",
      "destaque.publico": "para atores, freelancers, criadores de conteúdo e fotógrafos",
      "destaque.texto":
        "da primeira conversa ao site no ar: como o seu trabalho é organizado, escrito e apresentado, mais um site rápido para colocar em qualquer bio.",
      "destaque.l1": "site de portfólio, pronto para compartilhar",
      "destaque.l2": "estrutura e apresentação do seu trabalho",
      "destaque.l3": "textos, seções e chamadas para ação",
      "destaque.l4": "domínio, deploy e atualizações",
      "destaque.cta": "começar meu portfólio",
      "precos.titulo": "valores",
      "precos.p1": "portfólio completo",
      "precos.p2": "mudanças simples depois da entrega",
      "precos.p3": "mudanças mais complexas",
      "s1.title": "web & sistemas sob medida",
      "s1.p":
        "plataformas web, painéis, dashboards e landing pages com next.js, react, typescript e postgresql, do protótipo à produção.",
      "s2.title": "aplicativos mobile",
      "s2.p":
        "aplicativos multiplataforma com expo (react native) ou flutter, integrados a firebase, apis e notificações push.",
      "s3.title": "automação & integração de apis",
      "s3.p":
        "rotinas em python que automatizam trabalho repetitivo, consolidam planilhas e relatórios e conectam plataformas entre si.",
      "s4.title": "infraestrutura, deploy & servidores",
      "s4.p":
        "servidores linux, docker, nginx, ssl e cloudflare. deploys com ci/cd e monitoramento, para sites e aplicações.",
      "s5.title": "soluções com inteligência artificial",
      "s5.p": "chatbots, agentes de análise de dados e arquiteturas rag para consulta inteligente aos seus documentos.",
      "projetos.rotulo": "projetos em destaque",
      "projetos.titulo": "trabalhos que já estão por aí",
      "p0.tag": "plataforma cultural",
      "p0.title": "plataforma cultural afroretratos com feed anônimo",
      "p0.desc":
        "agenda de eventos, páginas institucionais e feed anônimo da comunidade com moderação, feito para um coletivo de estudantes de publicidade e cinema da pucpr.",
      "p0.live": "site no ar",
      "p1.tag": "mobile",
      "p1.title": "app de gestão de fretes e entregas",
      "p1.desc":
        "aplicativo multiplataforma para transportadora com rastreamento de remessas, gestão de entregas e notificações em tempo real.",
      "p2.tag": "inteligência artificial",
      "p2.title": "plataforma inteligente de análise de dados e rag",
      "p2.desc":
        "análise semântica e busca contextual em documentos, com agente reativo e dashboards interativos.",
      "p3.tag": "web",
      "p3.title": "sistema de gestão de chamados e painel de monitoramento",
      "p3.desc":
        "aplicação web para acompanhamento de solicitações técnicas em ambiente fabril, com métricas e mapa interativo.",
      "p4.tag": "ferramenta",
      "p4.title": "swaptop, ferramenta de linha de comando",
      "p4.desc": "utilitário para monitoramento da área de swap no linux, com 3.028 downloads desde o lançamento.",
      "relatos.rotulo": "relato de cliente",
      "relato.quote":
        "o luís construiu a plataforma do afroretratos exatamente como imaginamos: rápida, fácil de usar e com um nível de acabamento que raramente vejo. a comunicação foi clara desde o primeiro dia e o resultado superou o que esperávamos.",
      "relato.cargo": "publicitária · afroretratos",
      "tec.rotulo": "ferramentas",
      "tec.titulo": "com o que o trabalho é feito",
      "tec.linguagens": "linguagens",
      "tec.front": "frontend & web",
      "tec.back": "backend",
      "tec.mobile": "mobile",
      "tec.dados": "bancos de dados",
      "tec.devops": "devops & cloud",
      "tec.msg": "mensageria & cache",
      "fim.kicker": "vamos fazer",
      "fim.palavra": "o seu portfólio",
      "fim.oficio": "neste semestre",
      "fim.lead":
        "uma conversa de diagnóstico gratuita, online, de qualquer lugar. traga o que você tem, mesmo que seja só a ideia.",
      "fim.cta": "chamar no whatsapp",
      "canais.whats": "whatsapp",
      "canais.email": "e-mail",
      "rodape.direitos": "todos os direitos reservados.",
      "rodape.classico": "versão clássica"
    }
  };

  var idioma = "en";
  try {
    if (localStorage.getItem(CHAVE) === "pt") idioma = "pt";
  } catch (e) {}

  function t(chave) {
    var valor = DICIONARIO[idioma][chave];
    return valor === undefined ? DICIONARIO.en[chave] : valor;
  }

  function setMeta(conteudo) {
    var el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", conteudo);
  }

  function aplicar(lang) {
    idioma = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    setMeta(t("meta.description"));

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll(".idioma-opcao").forEach(function (botao) {
      botao.setAttribute("aria-pressed", String(botao.getAttribute("data-lang") === lang));
    });

    try {
      localStorage.setItem(CHAVE, lang);
    } catch (e) {}

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  document.querySelectorAll(".idioma-opcao").forEach(function (botao) {
    botao.addEventListener("click", function () {
      var alvo = botao.getAttribute("data-lang");
      if (alvo !== idioma) aplicar(alvo);
    });
  });

  /* ---------- e-mail: restaura o mailto se o Cloudflare ofuscar ---------- */
  var linkEmail = document.querySelector("a[data-email]");
  if (linkEmail) linkEmail.setAttribute("href", "mailto:" + linkEmail.getAttribute("data-email"));

  /* ---------- revelação das folhas ---------- */
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var folhas = document.querySelectorAll(".folha");
  if (!reduzido && "IntersectionObserver" in window) {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    folhas.forEach(function (folha) {
      observador.observe(folha);
    });
  } else {
    folhas.forEach(function (folha) {
      folha.classList.add("visivel");
    });
  }

  /* ---------- ano ---------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());

  aplicar(idioma);
})();
