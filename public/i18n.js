// luis-ota · idioma: inglês padrão, português opcional
// Aplica o dicionário sobre os atributos data-i18n* e persiste a escolha.

(function () {
  "use strict";

  var CHAVE = "luis-ota:lang";

  var DICIONARIO = {
    en: {
      "meta.title": "Luís Otávio · Full-Stack Developer in Curitiba",
      "meta.description":
        "Full-stack developer at Wired Layer Co., based in Curitiba, Brazil. Custom websites, software systems, mobile apps, process automation, and AI solutions for your business.",
      "meta.ogTitle": "Luís Otávio · Full-Stack Developer in Curitiba",
      "meta.ogDescription": "Software, web, mobile, and automation solutions for your business.",
      "meta.ogLocale": "en_US",
      "skip": "Skip to content",
      "brand.aria": "Luís Otávio · back to top",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.tech": "Technologies",
      "nav.reviews": "Reviews",
      "nav.contact": "Contact",
      "nav.cta": "Book a call",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "nav.langAria": "Language",
      "nav.mainAria": "Main navigation",
      "hero.eyebrow": "Full-Stack Developer · Curitiba, Brazil",
      "hero.title": "Software, web, mobile, and automation solutions for your business",
      "hero.sub":
        'I\'m <strong>Luís Otávio</strong>, full-stack developer at <strong>Wired Layer Co.</strong> in Curitiba, Brazil. I build web applications, custom systems, mobile apps, and process automations that solve real problems for companies and entrepreneurs.',
      "hero.ctaPrimary": "Book a conversation",
      "hero.ctaSecondary": "View projects",
      "hero.stat1dt": "3,028",
      "hero.stat1dd": "Swaptop downloads (Rust)",
      "hero.stat2dd": "Software Engineering",
      "hero.stat3dd": "Web · Mobile · Automation · AI",
      "hero.terminalAria": "Terminal showing Luís Otávio's technologies",
      "hero.coords": "25.4284° S · 49.2733° W",
      "hero.techNoteBottom": "operating system: <em>solving real problems</em>",
      "sobre.eyebrow": "About me",
      "sobre.title": "From Curitiba, building software that solves real problems",
      "sobre.p1":
        "I lead <strong>Wired Layer Co.</strong>, a software studio based in Curitiba. I build solutions aimed at solving real problems for companies and entrepreneurs, with hands-on experience in RESTful APIs, web applications with Next.js and React, mobile apps with Flutter, Python automation, and data integration.",
      "sobre.p2":
        "My track record includes software projects in manufacturing and technology companies, covering everything from process automation to complete web platforms and AI-based solutions.",
      "sobre.quote": "Good software is measured by the outcome, not by the technology behind it.",
      "sobre.fichaAria": "Spec sheet",
      "sobre.fichaTitle": "Spec sheet",
      "sobre.fName": "Name",
      "sobre.fCompany": "Company",
      "sobre.fRole": "Role",
      "sobre.fRoleV": "Full-Stack Developer",
      "sobre.fEdu": "Education",
      "sobre.fEduV": "Software Engineering undergraduate · PUCPR",
      "sobre.fLoc": "Location",
      "sobre.fLocV": "Curitiba, PR · Brazil",
      "sobre.fFocus": "Focus",
      "sobre.fFocusV": "Web · Mobile · Automation · Infra · AI",
      "sobre.fAvail": "Availability",
      "sobre.fAvailV": "Projects and partnerships",
      "servicos.eyebrow": "Services",
      "servicos.title": "What I can build for you",
      "servicos.sub":
        "From the first idea to a working delivery. Every service is tailor-made, focused on solving your business problem, not on piling on features.",
      "s1.tag": "web",
      "s1.title": "Web & custom systems",
      "s1.p":
        "Web platforms, admin panels, dashboards, and landing pages with Next.js, React, TypeScript, and PostgreSQL, from prototype to production.",
      "s1.l1": "Institutional and sales websites",
      "s1.l2": "Control and management panels",
      "s1.l3": "Payment and API integrations",
      "s1.l4": "Cache, queues, and messaging (Redis, RabbitMQ)",
      "s2.tag": "mobile",
      "s2.title": "Mobile apps",
      "s2.p":
        "Cross-platform apps (Android and iOS) with Expo (React Native) or Flutter, integrated with Firebase, APIs, and push notifications.",
      "s2.l1": "Apps for field teams",
      "s2.l2": "Delivery and service management",
      "s2.l3": "Real-time notifications",
      "s3.tag": "automation",
      "s3.title": "Automation & API integration",
      "s3.p":
        "Python routines that automate repetitive tasks, consolidate data from spreadsheets and reports, and integrate platforms with each other.",
      "s3.l1": "Automatically generated reports",
      "s3.l2": "Integration between systems and spreadsheets",
      "s3.l3": "Eliminating manual work",
      "s4.tag": "infrastructure",
      "s4.title": "Infrastructure, deployment & servers",
      "s4.p":
        "Linux servers, Docker containers, Nginx, SSL certificates, and Cloudflare. From static site deploys to full applications, with CI/CD and monitoring.",
      "s4.l1": "Deploy and hosting for sites and apps",
      "s4.l2": "Linux servers (Ubuntu/Arch) and Docker",
      "s4.l3": "Domains, SSL, CI/CD, and backups",
      "s5.tag": "artificial intelligence",
      "s5.title": "AI solutions",
      "s5.p":
        "Data analysis agents, chatbots, and RAG architectures for intelligent querying of your company's internal documents.",
      "s5.l1": "Customer support chatbots",
      "s5.l2": "Search across documents (PDF, CSV, Excel)",
      "s5.l3": "Data analysis with generative AI",
      "projetos.eyebrow": "Selected projects",
      "projetos.title": "Work that has already shipped",
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
        "Semantic analysis and contextual search across documents (PDFs, CSVs, Excel) with a reactive agent and interactive dashboards.",
      "p3.tag": "web",
      "p3.title": "Ticket management system and monitoring dashboard",
      "p3.desc":
        "Web application for tracking and managing technical requests in a factory environment, with metrics and an interactive map.",
      "p4.tag": "tooling",
      "p4.title": "Swaptop, a command-line tool",
      "p4.desc":
        "Utility for monitoring the Linux swap area, with 3,028 downloads since launch.",
      "tec.eyebrow": "Technologies & tools",
      "tec.title": "The toolkit I use every day",
      "tec.languages": "Languages",
      "tec.frontend": "Frontend & Web",
      "tec.backend": "Backend",
      "tec.mobile": "Mobile",
      "tec.databases": "Databases",
      "tec.devops": "DevOps & Cloud",
      "tec.messaging": "Messaging & cache",
      "relatos.eyebrow": "Client reviews",
      "relatos.title": "What clients say about working with me",
      "relato1.context": "Client review · AfroRetratos",
      "relato1.quote":
        "Luís built the AfroRetratos platform exactly as we envisioned: fast, easy to use, and with a level of finish I rarely see. Communication was clear from day one, every detail was handled with care, and the result went beyond what we expected. I recommend him without hesitation.",
      "relato1.role": "Advertising professional · AfroRetratos",
      "relato1.handle": "@isacreates.comm",
      "contato.eyebrow": "Scheduling & contact",
      "contato.title": "Let's talk about your project?",
      "ag.badge": "Free discovery call",
      "ag.title": "Book a conversation, no strings attached",
      "ag.p":
        "Need a custom system, an app, or an automation for your company? Pick the best time and let's talk about your project, free of charge and with no obligation.",
      "ag.btn": "Choose a time",
      "ag.obs": "Online worldwide · In person in Curitiba, Brazil",
      "canais.title": "Other ways to reach me",
      "canais.email": "Email",
      "canais.location": "Location",
      "canais.locationV": "Curitiba, PR · Brazil",
      "footer.text": "Wired Layer Co. · Luís Otávio Silva Santos · Full-Stack Developer · Curitiba, Brazil",
      "footer.back": "Back to top ↑",
      "terminal.lines": [
        "luis-ota@curitiba: ~",
        "$ luis --stack",
        "web ..... next.js · react · typescript",
        "mobile .. flutter · dart · firebase",
        "auto .... python · apis · scripts",
        "ai ...... rag · gemini · agents",
        "rust .... swaptop · cli · tokio",
        "queue ... redis · rabbitmq · workers"
      ]
    },

    pt: {
      "meta.title": "Luís Otávio · Desenvolvedor Full-Stack em Curitiba",
      "meta.description":
        "Desenvolvedor Full-Stack na Wired Layer Co., em Curitiba. Criação de sites, sistemas sob medida, aplicativos mobile, automação de processos e soluções com inteligência artificial para o seu negócio.",
      "meta.ogTitle": "Luís Otávio · Desenvolvedor Full-Stack em Curitiba",
      "meta.ogDescription": "Soluções em software, web, mobile e automação para o seu negócio.",
      "meta.ogLocale": "pt_BR",
      "skip": "Pular para o conteúdo",
      "brand.aria": "Luís Otávio · voltar ao início",
      "nav.about": "Sobre",
      "nav.services": "Serviços",
      "nav.projects": "Projetos",
      "nav.tech": "Tecnologias",
      "nav.reviews": "Relatos",
      "nav.contact": "Contato",
      "nav.cta": "Agendar conversa",
      "nav.openMenu": "Abrir menu",
      "nav.closeMenu": "Fechar menu",
      "nav.langAria": "Idioma",
      "nav.mainAria": "Navegação principal",
      "hero.eyebrow": "Desenvolvedor Full-Stack · Curitiba, PR",
      "hero.title": "Soluções em software, web, mobile e automação para o seu negócio",
      "hero.sub":
        'Sou o <strong>Luís Otávio</strong>, desenvolvedor full-stack na <strong>Wired Layer Co.</strong>, em Curitiba. Crio aplicações web, sistemas sob medida, aplicativos mobile e automações de processos que resolvem problemas reais de empresas e empreendedores.',
      "hero.ctaPrimary": "Agendar uma conversa",
      "hero.ctaSecondary": "Ver projetos",
      "hero.stat1dt": "3.028",
      "hero.stat1dd": "downloads do Swaptop (Rust)",
      "hero.stat2dd": "Engenharia de Software",
      "hero.stat3dd": "Web · Mobile · Automação · IA",
      "hero.terminalAria": "Terminal demonstrando as tecnologias do Luís Otávio",
      "hero.coords": "25.4284° S · 49.2733° O",
      "hero.techNoteBottom": "sistema operacional: <em>resolver problemas reais</em>",
      "sobre.eyebrow": "Sobre mim",
      "sobre.title": "De Curitiba, construindo software que resolve problemas reais",
      "sobre.p1":
        "À frente da <strong>Wired Layer Co.</strong>, estúdio de software em Curitiba, desenvolvo soluções voltadas a resolver problemas reais de empresas e empreendedores. Tenho experiência prática no desenvolvimento de APIs RESTful, aplicações web com Next.js e React, aplicativos móveis com Flutter, automação de rotinas em Python e integração de dados.",
      "sobre.p2":
        "Minha trajetória inclui projetos de desenvolvimento de sistemas em indústrias e empresas de tecnologia, cobrindo desde a automação de processos até a criação de plataformas web completas e soluções baseadas em Inteligência Artificial.",
      "sobre.quote": "Software bem feito se mede pelo resultado, não pela tecnologia usada.",
      "sobre.fichaAria": "Ficha técnica",
      "sobre.fichaTitle": "Ficha técnica",
      "sobre.fName": "Nome",
      "sobre.fCompany": "Empresa",
      "sobre.fRole": "Função",
      "sobre.fRoleV": "Desenvolvedor Full-Stack",
      "sobre.fEdu": "Formação",
      "sobre.fEduV": "Graduando em Engenharia de Software · PUCPR",
      "sobre.fLoc": "Localização",
      "sobre.fLocV": "Curitiba, PR · Brasil",
      "sobre.fFocus": "Foco",
      "sobre.fFocusV": "Web · Mobile · Automação · Infra · IA",
      "sobre.fAvail": "Disponibilidade",
      "sobre.fAvailV": "Projetos e parcerias",
      "servicos.eyebrow": "Serviços",
      "servicos.title": "O que eu posso construir para você",
      "servicos.sub":
        "Da primeira ideia à entrega funcionando. Cada serviço é feito sob medida, com foco em resolver o problema do seu negócio, não em encher de funcionalidades.",
      "s1.tag": "web",
      "s1.title": "Web & sistemas sob medida",
      "s1.p":
        "Plataformas web, painéis administrativos, dashboards e landing pages com Next.js, React, TypeScript e PostgreSQL, do protótipo à produção.",
      "s1.l1": "Sites institucionais e de vendas",
      "s1.l2": "Painéis de controle e gestão",
      "s1.l3": "Integração com pagamentos e APIs",
      "s1.l4": "Cache, filas e mensageria (Redis, RabbitMQ)",
      "s2.tag": "mobile",
      "s2.title": "Aplicativos mobile",
      "s2.p":
        "Aplicativos multiplataforma (Android e iOS) com Expo (React Native) ou Flutter, integrados a Firebase, APIs e notificações push.",
      "s2.l1": "Apps para equipes de campo",
      "s2.l2": "Gestão de entregas e serviços",
      "s2.l3": "Notificações em tempo real",
      "s3.tag": "automação",
      "s3.title": "Automação & integração de APIs",
      "s3.p":
        "Rotinas em Python para automatizar tarefas repetitivas, consolidar dados de planilhas e relatórios e integrar plataformas entre si.",
      "s3.l1": "Relatórios gerados automaticamente",
      "s3.l2": "Integração entre sistemas e planilhas",
      "s3.l3": "Eliminação de trabalho manual",
      "s4.tag": "infraestrutura",
      "s4.title": "Infraestrutura, deploy & servidores",
      "s4.p":
        "Servidores Linux, containers com Docker, Nginx, certificados SSL e Cloudflare. Do deploy de sites estáticos a aplicações completas, com CI/CD e monitoramento.",
      "s4.l1": "Deploy e hospedagem de sites e apps",
      "s4.l2": "Servidores Linux (Ubuntu/Arch) e Docker",
      "s4.l3": "Domínios, SSL, CI/CD e backups",
      "s5.tag": "inteligência artificial",
      "s5.title": "Soluções com inteligência artificial",
      "s5.p":
        "Agentes de análise de dados, chatbots e arquiteturas RAG para consulta inteligente a documentos internos da sua empresa.",
      "s5.l1": "Chatbots de atendimento",
      "s5.l2": "Busca em documentos (PDF, CSV, Excel)",
      "s5.l3": "Análise de dados com IA generativa",
      "projetos.eyebrow": "Projetos em destaque",
      "projetos.title": "Trabalhos que já saíram do papel",
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
        "Sistema de análise semântica e busca contextual em documentos (PDFs, CSVs, Excel) com agente reativo e dashboards interativos.",
      "p3.tag": "web",
      "p3.title": "Sistema de gestão de chamados e painel de monitoramento",
      "p3.desc":
        "Aplicação web para acompanhamento e gerenciamento de solicitações técnicas em ambiente fabril, com métricas e mapa interativo.",
      "p4.tag": "ferramenta",
      "p4.title": "Swaptop, ferramenta de linha de comando",
      "p4.desc":
        "Utilitário para monitoramento da área de swap no Linux, com 3.028 downloads desde o lançamento.",
      "tec.eyebrow": "Tecnologias & ferramentas",
      "tec.title": "O arsenal que uso no dia a dia",
      "tec.languages": "Linguagens",
      "tec.frontend": "Frontend & Web",
      "tec.backend": "Backend",
      "tec.mobile": "Mobile",
      "tec.databases": "Bancos de dados",
      "tec.devops": "DevOps & Cloud",
      "tec.messaging": "Mensageria & cache",
      "relatos.eyebrow": "Relatos de clientes",
      "relatos.title": "O que dizem sobre trabalhar comigo",
      "relato1.context": "Relato de cliente · AfroRetratos",
      "relato1.quote":
        "O Luís construiu a plataforma do AfroRetratos exatamente como imaginamos: rápida, fácil de usar e com um nível de acabamento que raramente vejo. A comunicação foi clara desde o primeiro dia, cada detalhe foi tratado com cuidado e o resultado superou o que esperávamos. Recomendo sem hesitar.",
      "relato1.role": "Publicitária · AfroRetratos",
      "relato1.handle": "@isacreates.comm",
      "contato.eyebrow": "Agendamento & contato",
      "contato.title": "Vamos conversar sobre o seu projeto?",
      "ag.badge": "Reunião de diagnóstico gratuita",
      "ag.title": "Agende uma reunião sem compromisso",
      "ag.p":
        "Precisa de um sistema sob medida, um aplicativo ou uma automação para a sua empresa? Escolha o melhor horário e vamos conversar sobre o seu projeto, sem custo e sem compromisso.",
      "ag.btn": "Escolher melhor horário",
      "ag.obs": "Atendimento online para todo o Brasil · Presencial em Curitiba, PR",
      "canais.title": "Outros canais de contato",
      "canais.email": "E-mail",
      "canais.location": "Localização",
      "canais.locationV": "Curitiba, PR · Brasil",
      "footer.text": "Wired Layer Co. · Luís Otávio Silva Santos · Desenvolvedor Full-Stack · Curitiba, PR",
      "footer.back": "Voltar ao início ↑",
      "terminal.lines": [
        "luis-ota@curitiba: ~",
        "$ luis --stack",
        "web ..... next.js · react · typescript",
        "mobile .. flutter · dart · firebase",
        "auto .... python · apis · scripts",
        "ai ...... rag · gemini · agentes",
        "rust .... swaptop · cli · tokio",
        "fila .... redis · rabbitmq · workers"
      ]
    }
  };

  var idioma = "en";

  try {
    if (localStorage.getItem(CHAVE) === "pt") idioma = "pt";
  } catch (e) {}

  function t(chave, lang) {
    var dic = DICIONARIO[lang || idioma] || DICIONARIO.en;
    var valor = dic[chave];
    return valor === undefined ? DICIONARIO.en[chave] : valor;
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
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-content")));
    });

    document.title = t("meta.title");
    setMeta("name", "description", t("meta.description"));
    setMeta("property", "og:title", t("meta.ogTitle"));
    setMeta("property", "og:description", t("meta.ogDescription"));
    setMeta("property", "og:locale", t("meta.ogLocale"));

    var html = document.documentElement;
    html.lang = lang === "pt" ? "pt-BR" : "en";
    html.setAttribute("data-lang", lang);

    document.querySelectorAll(".lang-opcao").forEach(function (botao) {
      var ativo = botao.getAttribute("data-lang") === lang;
      botao.setAttribute("aria-pressed", String(ativo));
    });

    try {
      localStorage.setItem(CHAVE, lang);
    } catch (e) {}

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function setMeta(atributo, valor, conteudo) {
    var el = document.querySelector("meta[" + atributo + '="' + valor + '"]');
    if (el) el.setAttribute("content", conteudo);
  }

  window.I18N = {
    t: t,
    get idioma() {
      return idioma;
    },
    linhasTerminal: function () {
      return t("terminal.lines");
    },
    trocar: aplicar
  };

  document.querySelectorAll(".lang-opcao").forEach(function (botao) {
    botao.addEventListener("click", function () {
      var alvo = botao.getAttribute("data-lang");
      if (alvo !== idioma) aplicar(alvo);
    });
  });

  // aplica o idioma salvo (ou o padrão) assim que o script roda, no fim do body
  aplicar(idioma);
})();
