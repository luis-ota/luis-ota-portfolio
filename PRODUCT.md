# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: business owners, managers, and founders in Brazil and abroad who need a
website, custom system, mobile app, automation, or AI solution, and are evaluating
who to hire. They usually arrive from LinkedIn, GitHub, or referral, often on
mobile, and want to judge competence quickly.

Secondary: recruiters and peers checking the same page for remote full-stack work.

## Product Purpose

A single-page portfolio for Luís Otávio Silva Santos, full-stack developer in
Curitiba, PR. It presents services, selected anonymous projects, and technologies,
then converts interest into a scheduled diagnostic call or a direct message.
Success means booked conversations and qualified contacts.

## Positioning

Hands-on full-stack builder who ships outcomes across web, mobile, automation,
infrastructure, and AI, from first prototype to production. Software carried by
results, not by stack buzzwords. Curitiba-based, available remotely.

## Operating Context

Contact flows through WhatsApp, e-mail, LinkedIn, and GitHub. The primary CTA
opens agendar.wired.rs (scheduling). The site is statically generated content
served by a Bun HTTP server, originally Brazilian Portuguese; English is now the
default language with a Brazilian Portuguese option.

## Capabilities and Constraints

- Static single page: HTML, CSS, and vanilla JS; no framework, no build step.
- Served by `server.ts` (Bun) in Docker; deploy target is an Ubuntu VPS with
  Docker, Docker Compose, and Nginx reverse proxy in front.
- Bilingual: English default, PT-BR toggle, client-side, preference persisted.
- Confirmed facts only: Swaptop 2,500+ downloads, PUCPR Software Engineering
  undergraduate, the four anonymous project descriptions, and the published
  contact details (WhatsApp, e-mail, LinkedIn, GitHub, location).
- No client names, logos, or testimonials may be added; projects stay anonymous.
- SEO metadata, JSON-LD, robots.txt, and sitemap.xml must stay valid.
- Respect `prefers-reduced-motion`; keep the page lightweight and fast.

## Brand Commitments

Name and handle `luis-ota`. Brazilian Portuguese voice in PT mode; direct,
plain-spoken, outcome-focused English in EN mode. No fabricated proof.

## Evidence on Hand

- Four anonymized projects: freight/delivery mobile app (Flutter, Firebase);
  AI data analysis and RAG platform (Python, LlamaIndex, Gemini); factory
  ticketing and monitoring web system (Next.js, Flask, PostgreSQL); Swaptop CLI
  (Rust, Tokio) with 2,500+ downloads.
- Live site: https://portfolio.wired.rs
- Source: github.com/luis-ota/luis-ota-portfolio

## Product Principles

1. Outcome over technology: every claim ties to a real result.
2. Anonymous by default: competence is shown through work, never client names.
3. English-first reach, Portuguese-native hospitality.
4. Fast, light, and accessible on any device.
5. A clear next step is always one action away.
