// portfolio neo · idioma (EN padrão, PT opcional) e detalhes de página

(function () {
  "use strict";

  var CHAVE = "luis-ota:lang";

  var DICIONARIO = {
    en: {
      "meta.description":
        "I build professional portfolios for actors, freelancers, content creators, and photographers. Web, mobile, automation, and AI, by Wired Layer Co.",
      "pular": "Skip to content",
      "nav.aria": "Main navigation",
      "nav.idioma": "Language",
      "nav.sobre": "About",
      "nav.servicos": "Services",
      "nav.projetos": "Projects",
      "nav.relatos": "Reviews",
      "nav.contato": "Contact",
      "nav.classico": "classic version",
      "cartaz.kicker": "I build your",
      "cartaz.palavra": "Portfolio",
      "cartaz.oficio": "professional",
      "cartaz.publico":
        'for <strong>actors, freelancers, content creators, and photographers</strong>',
      "cartaz.lead":
        "Identity, structure, and the site itself. The same studio that ships web, mobile, automation, and AI builds portfolios that look like the work they present.",
      "cartaz.cta": "Book a conversation",
      "cartaz.whats": "WhatsApp",
      "sobre.palavra": "who builds",
      "sobre.p1":
        "I'm <strong>Luís Otávio</strong>, a full-stack developer in Curitiba, Brazil, and the person behind <strong>Wired Layer Co.</strong> I build portfolios and the systems that carry them: web applications, mobile apps, automations, and AI.",
      "sobre.p2":
        "Every portfolio is made for the person, not for a template: what you do, who you want to reach, and how the work should be seen. Then the same hands build the site, deploy it, and keep it running.",
      "ficha.nome": "Name",
      "ficha.empresa": "Company",
      "ficha.funcao": "Role",
      "ficha.funcaoV": "Full-Stack Developer",
      "ficha.formacao": "Education",
      "ficha.formacaoV": "Software Engineering · PUCPR",
      "ficha.local": "Location",
      "ficha.localV": "Curitiba, PR · Brazil",
      "ficha.foco": "Focus",
      "ficha.focoV": "Portfolios · Web · Mobile · Automation · AI",
      "ficha.dispo": "Availability",
      "ficha.dispoV": "Projects and partnerships",
      "servicos.rotulo": "What I build",
      "servicos.titulo": "A portfolio, and everything around it",
      "destaque.selo": "Signature service",
      "destaque.titulo": "Professional portfolio",
      "destaque.publico": "for actors, freelancers, content creators, and photographers",
      "destaque.texto":
        "From the first conversation to the site online: how your work is organized, written, and presented, plus a fast site you can share in any bio.",
      "destaque.l1": "Portfolio site, ready to share",
      "destaque.l2": "Structure and presentation of your work",
      "destaque.l3": "Texts, sections, and calls to action",
      "destaque.l4": "Domain, deploy, and updates",
      "destaque.cta": "Start my portfolio",
      "s1.title": "Web & custom systems",
      "s1.p":
        "Web platforms, panels, dashboards, and landing pages with Next.js, React, TypeScript, and PostgreSQL, from prototype to production.",
      "s2.title": "Mobile apps",
      "s2.p":
        "Cross-platform apps with Expo (React Native) or Flutter, integrated with Firebase, APIs, and push notifications.",
      "s3.title": "Automation & API integration",
      "s3.p":
        "Python routines that automate repetitive work, consolidate spreadsheets and reports, and connect platforms to each other.",
      "s4.title": "Infrastructure, deploy & servers",
      "s4.p":
        "Linux servers, Docker, Nginx, SSL, and Cloudflare. Deploys with CI/CD and monitoring, for sites and applications.",
      "s5.title": "AI solutions",
      "s5.p": "Chatbots, data analysis agents, and RAG architectures for intelligent search across your documents.",
      "projetos.rotulo": "Selected projects",
      "projetos.titulo": "Work that is already out there",
      "p0.tag": "cultural platform",
      "p0.title": "AfroRetratos cultural platform with anonymous feed",
      "p0.desc":
        "Event agenda, institutional pages, and an anonymous community feed with moderation, built for a collective of advertising and cinema students at PUCPR.",
      "p0.live": "Live site",
      "p1.tag": "mobile",
      "p1.title": "Freight and delivery management app",
      "p1.desc":
        "Cross-platform app for a transport company with shipment tracking, delivery management, and real-time notifications.",
      "p2.tag": "artificial intelligence",
      "p2.title": "Intelligent data analysis and RAG platform",
      "p2.desc":
        "Semantic analysis and contextual search across documents, with a reactive agent and interactive dashboards.",
      "p3.tag": "web",
      "p3.title": "Ticket management and monitoring dashboard",
      "p3.desc":
        "Web application for tracking technical requests in a factory environment, with metrics and an interactive map.",
      "p4.tag": "tooling",
      "p4.title": "Swaptop, a command-line tool",
      "p4.desc": "Utility for monitoring the Linux swap area, with 3,028 downloads since launch.",
      "relatos.rotulo": "Client review",
      "relato.quote":
        "Luís built the AfroRetratos platform exactly as we envisioned: fast, easy to use, and with a level of finish I rarely see. Communication was clear from day one and the result went beyond what we expected.",
      "relato.cargo": "Advertising professional · AfroRetratos",
      "tec.rotulo": "Tools",
      "tec.titulo": "What the work is made with",
      "tec.linguagens": "Languages",
      "tec.front": "Frontend & Web",
      "tec.back": "Backend",
      "tec.mobile": "Mobile",
      "tec.dados": "Databases",
      "tec.devops": "DevOps & Cloud",
      "tec.msg": "Messaging & cache",
      "fim.kicker": "Let's make",
      "fim.palavra": "your portfolio",
      "fim.oficio": "this semester",
      "fim.lead":
        "A free diagnostic conversation, online, anywhere in the world. Bring what you have, even if it is only an idea.",
      "fim.cta": "Choose a time",
      "canais.whats": "WhatsApp",
      "canais.email": "Email",
      "rodape.direitos": "All rights reserved.",
      "rodape.classico": "classic version"
    },

    pt: {
      "meta.description":
        "Eu desenvolvo seu portfólio profissional: para atores, freelancers, criadores de conteúdo e fotógrafos. Web, mobile, automação e IA, pela Wired Layer Co.",
      "pular": "Pular para o conteúdo",
      "nav.aria": "Navegação principal",
      "nav.idioma": "Idioma",
      "nav.sobre": "Sobre",
      "nav.servicos": "Serviços",
      "nav.projetos": "Projetos",
      "nav.relatos": "Relatos",
      "nav.contato": "Contato",
      "nav.classico": "versão clássica",
      "cartaz.kicker": "eu desenvolvo seu",
      "cartaz.palavra": "Portfólio",
      "cartaz.oficio": "profissional",
      "cartaz.publico":
        'para <strong>atores, freelancers, criadores de conteúdo e fotógrafos</strong>',
      "cartaz.lead":
        "Identidade, estrutura e o site em si. O mesmo estúdio que entrega web, mobile, automação e IA constrói portfólios que parecem com o trabalho que apresentam.",
      "cartaz.cta": "Agendar uma conversa",
      "cartaz.whats": "WhatsApp",
      "sobre.palavra": "quem constrói",
      "sobre.p1":
        "Sou o <strong>Luís Otávio</strong>, desenvolvedor full-stack em Curitiba, e a pessoa por trás da <strong>Wired Layer Co.</strong> Construo portfólios e os sistemas que os sustentam: aplicações web, aplicativos, automações e IA.",
      "sobre.p2":
        "Cada portfólio é feito para a pessoa, não para um modelo: o que você faz, quem quer alcançar e como o trabalho deve ser visto. Depois, as mesmas mãos constroem o site, colocam no ar e mantêm rodando.",
      "ficha.nome": "Nome",
      "ficha.empresa": "Empresa",
      "ficha.funcao": "Função",
      "ficha.funcaoV": "Desenvolvedor Full-Stack",
      "ficha.formacao": "Formação",
      "ficha.formacaoV": "Engenharia de Software · PUCPR",
      "ficha.local": "Localização",
      "ficha.localV": "Curitiba, PR · Brasil",
      "ficha.foco": "Foco",
      "ficha.focoV": "Portfólios · Web · Mobile · Automação · IA",
      "ficha.dispo": "Disponibilidade",
      "ficha.dispoV": "Projetos e parcerias",
      "servicos.rotulo": "O que eu construo",
      "servicos.titulo": "Um portfólio, e tudo em volta dele",
      "destaque.selo": "Serviço assinatura",
      "destaque.titulo": "Portfólio profissional",
      "destaque.publico": "para atores, freelancers, criadores de conteúdo e fotógrafos",
      "destaque.texto":
        "Da primeira conversa ao site no ar: como o seu trabalho é organizado, escrito e apresentado, mais um site rápido para colocar em qualquer bio.",
      "destaque.l1": "Site de portfólio, pronto para compartilhar",
      "destaque.l2": "Estrutura e apresentação do seu trabalho",
      "destaque.l3": "Textos, seções e chamadas para ação",
      "destaque.l4": "Domínio, deploy e atualizações",
      "destaque.cta": "Começar meu portfólio",
      "s1.title": "Web & sistemas sob medida",
      "s1.p":
        "Plataformas web, painéis, dashboards e landing pages com Next.js, React, TypeScript e PostgreSQL, do protótipo à produção.",
      "s2.title": "Aplicativos mobile",
      "s2.p":
        "Aplicativos multiplataforma com Expo (React Native) ou Flutter, integrados a Firebase, APIs e notificações push.",
      "s3.title": "Automação & integração de APIs",
      "s3.p":
        "Rotinas em Python que automatizam trabalho repetitivo, consolidam planilhas e relatórios e conectam plataformas entre si.",
      "s4.title": "Infraestrutura, deploy & servidores",
      "s4.p":
        "Servidores Linux, Docker, Nginx, SSL e Cloudflare. Deploys com CI/CD e monitoramento, para sites e aplicações.",
      "s5.title": "Soluções com inteligência artificial",
      "s5.p": "Chatbots, agentes de análise de dados e arquiteturas RAG para consulta inteligente aos seus documentos.",
      "projetos.rotulo": "Projetos em destaque",
      "projetos.titulo": "Trabalhos que já estão por aí",
      "p0.tag": "plataforma cultural",
      "p0.title": "Plataforma cultural AfroRetratos com feed anônimo",
      "p0.desc":
        "Agenda de eventos, páginas institucionais e feed anônimo da comunidade com moderação, feito para um coletivo de estudantes de Publicidade e Cinema da PUCPR.",
      "p0.live": "Site no ar",
      "p1.tag": "mobile",
      "p1.title": "App de gestão de fretes e entregas",
      "p1.desc":
        "Aplicativo multiplataforma para transportadora com rastreamento de remessas, gestão de entregas e notificações em tempo real.",
      "p2.tag": "inteligência artificial",
      "p2.title": "Plataforma inteligente de análise de dados e RAG",
      "p2.desc":
        "Análise semântica e busca contextual em documentos, com agente reativo e dashboards interativos.",
      "p3.tag": "web",
      "p3.title": "Sistema de gestão de chamados e painel de monitoramento",
      "p3.desc":
        "Aplicação web para acompanhamento de solicitações técnicas em ambiente fabril, com métricas e mapa interativo.",
      "p4.tag": "ferramenta",
      "p4.title": "Swaptop, ferramenta de linha de comando",
      "p4.desc": "Utilitário para monitoramento da área de swap no Linux, com 3.028 downloads desde o lançamento.",
      "relatos.rotulo": "Relato de cliente",
      "relato.quote":
        "O Luís construiu a plataforma do AfroRetratos exatamente como imaginamos: rápida, fácil de usar e com um nível de acabamento que raramente vejo. A comunicação foi clara desde o primeiro dia e o resultado superou o que esperávamos.",
      "relato.cargo": "Publicitária · AfroRetratos",
      "tec.rotulo": "Ferramentas",
      "tec.titulo": "Com o que o trabalho é feito",
      "tec.linguagens": "Linguagens",
      "tec.front": "Frontend & Web",
      "tec.back": "Backend",
      "tec.mobile": "Mobile",
      "tec.dados": "Bancos de dados",
      "tec.devops": "DevOps & Cloud",
      "tec.msg": "Mensageria & cache",
      "fim.kicker": "Vamos fazer",
      "fim.palavra": "o seu portfólio",
      "fim.oficio": "neste semestre",
      "fim.lead":
        "Uma conversa de diagnóstico gratuita, online, de qualquer lugar. Traga o que você tem, mesmo que seja só a ideia.",
      "fim.cta": "Escolher um horário",
      "canais.whats": "WhatsApp",
      "canais.email": "E-mail",
      "rodape.direitos": "Todos os direitos reservados.",
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
