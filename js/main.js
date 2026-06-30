// main.js
// Rendering logic only — no content lives here.
// Reads from portfolioData (defined in data.js, loaded before this
// script in index.html) and injects it into the right HTML containers.
//
// BEM naming convention used throughout:
//   block           → independent component      e.g. app-card
//   block__element  → child of that block        e.g. app-card__name
//   block--modifier → variant of block/element   e.g. skill-tag--muted
//
// Reference: https://getbem.com/naming/


// ─── WAIT FOR DOM ─────────────────────────────────────────────────────────────
// Ensures ALL HTML elements exist before main.js tries to find and fill them.
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {

  renderHero();
  renderAbout();
  renderTechStack();
  renderApps();
  renderCvSamples();
  renderPortfolioSamples();
  renderContact();

});


// ─── HERO ──────────────────────────────────────────────────────────────────────
// Block: hero
// Elements: hero__tagline, hero__subtext
function renderHero() {
  const container = document.getElementById("hero-content");
  if (!container) return;

  container.innerHTML = `
    <h1 class="hero__tagline">${portfolioData.hero.tagline}</h1>
    <p class="hero__subtext">${portfolioData.hero.subtext}</p>
  `;
}


// ─── ABOUT ────────────────────────────────────────────────────────────────────
// Block: about
// Elements: about__paragraph
function renderAbout() {
  const container = document.getElementById("about-content");
  if (!container) return;

  // .map() wraps each paragraph string in a <p> tag.
  // .join("") collapses the resulting array into one HTML string.
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const paragraphsHTML = portfolioData.about.paragraphs
    .map(paragraph => `<p class="about__paragraph">${paragraph}</p>`)
    .join("");

  container.innerHTML = paragraphsHTML;
}


// ─── TECH STACK & ROLES ───────────────────────────────────────────────────────
// Block: tech-stack
// Elements: tech-stack__summary, tech-stack__block, tech-stack__label,
//           tech-stack__roles, tech-stack__role, tech-stack__skills
// Standalone blocks: skill-tag, skill-tag--muted (modifier for background stack)
function renderTechStack() {
  const container = document.getElementById("techstack-content");
  if (!container) return;

  const rolesHTML = portfolioData.techStack.roles
    .map(role => `<li class="tech-stack__role">${role}</li>`)
    .join("");

  const skillsHTML = portfolioData.techStack.skills
    .map(skill => `<span class="skill-tag">${skill}</span>`)
    .join("");

  // --muted modifier signals these are background/prior stack,
  // not the current primary tools. The CSS will style them differently
  // (e.g. lower opacity or a different border) without needing a separate class.
  const backgroundHTML = portfolioData.techStack.background
    .map(tech => `<span class="skill-tag skill-tag--muted">${tech}</span>`)
    .join("");

  container.innerHTML = `
    <p class="tech-stack__summary">${portfolioData.techStack.summary}</p>

    <div class="tech-stack__block">
      <h3 class="tech-stack__label">Roles I take on</h3>
      <ul class="tech-stack__roles">${rolesHTML}</ul>
    </div>

    <div class="tech-stack__block">
      <h3 class="tech-stack__label">Current Stack</h3>
      <div class="tech-stack__skills">${skillsHTML}</div>
    </div>

    <div class="tech-stack__block">
      <h3 class="tech-stack__label">Background</h3>
      <div class="tech-stack__skills">${backgroundHTML}</div>
    </div>
  `;
}


// ─── APPS ─────────────────────────────────────────────────────────────────────
// Block: apps
// Elements: apps__note
// Standalone block: app-card
// App card elements: app-card__name, app-card__description,
//                    app-card__decision, app-card__decision-label, app-card__tech
// Standalone block: tech-tag (used inside app-card but is its own block in BEM
//                   because it can appear in other contexts independently)
function renderApps() {
  const container = document.getElementById("apps-content");
  if (!container) return;

  const appsHTML = portfolioData.apps
    .map(app => {
      // Nested .map() — loops over each app's tech array
      // and wraps each item in a tech-tag span.
      const techTagsHTML = app.tech
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join("");

      return `
        <div class="app-card">
          <h3 class="app-card__name">${app.name}</h3>
          <p class="app-card__description">${app.description}</p>
          <p class="app-card__decision">
            <span class="app-card__decision-label">The decision that mattered: </span>
            ${app.decision}
          </p>
          <div class="app-card__tech">${techTagsHTML}</div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = `
    <p class="apps__note">Built in Python/FastAPI, before my transition to the JavaScript ecosystem.</p>
    ${appsHTML}
  `;
}


// ─── CV SAMPLES ───────────────────────────────────────────────────────────────
// Block: cv-samples
// Elements: cv-samples__coming-soon
// Standalone block: sample-card
// Sample card elements: sample-card__title, sample-card__context
function renderCvSamples() {
  const container = document.getElementById("cv-samples-content");
  if (!container) return;

  if (portfolioData.cvSamples.length === 0) {
    container.innerHTML = `
      <div class="cv-samples__coming-soon">
        <p>CV work samples coming soon.</p>
      </div>
    `;
    return;
  }

  const samplesHTML = portfolioData.cvSamples
    .map(sample => `
      <div class="sample-card">
        <h3 class="sample-card__title">${sample.title}</h3>
        <p class="sample-card__context">${sample.context}</p>
      </div>
    `)
    .join("");

  container.innerHTML = samplesHTML;
}


// ─── PORTFOLIO PAGE SAMPLES ───────────────────────────────────────────────────
// Block: portfolio-samples
// Elements: portfolio-samples__coming-soon
// Reuses: sample-card block (same structure as CV samples)
function renderPortfolioSamples() {
  const container = document.getElementById("portfolio-samples-content");
  if (!container) return;

  if (portfolioData.portfolioSamples.length === 0) {
    container.innerHTML = `
      <div class="portfolio-samples__coming-soon">
        <p>Portfolio page samples coming soon — this site is case study #1.</p>
      </div>
    `;
    return;
  }

  const samplesHTML = portfolioData.portfolioSamples
    .map(sample => `
      <div class="sample-card">
        <h3 class="sample-card__title">${sample.title}</h3>
        <p class="sample-card__context">${sample.context}</p>
      </div>
    `)
    .join("");

  container.innerHTML = samplesHTML;
}


// ─── CONTACT ──────────────────────────────────────────────────────────────────
// Block: contact
// Elements: contact__note, contact__link
function renderContact() {
  const container = document.getElementById("contact-content");
  if (!container) return;

  if (!portfolioData.contact.email) {
    container.innerHTML = `
      <p class="contact__note">${portfolioData.contact.note}</p>
    `;
    return;
  }

  container.innerHTML = `
    <p class="contact__note">Let's work together.</p>
    <a class="contact__link" href="mailto:${portfolioData.contact.email}">
      ${portfolioData.contact.email}
    </a>
  `;
}