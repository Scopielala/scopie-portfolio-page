// data.js
// This file holds ALL the content for the portfolio site.
// main.js reads from this object to build the page — this file
// should be the ONLY thing that changes when reusing this template
// for a future client.

const portfolioData = {

  // Single objects for sections that appear once on the page
  hero: {
    tagline: "CV Writing. Portfolio Page Design. Built with intention.",
    subtext: "I turn your real experience into a CV and online presence that get you noticed."
  },

  about: {
    // Array of paragraphs, not one big string — this makes it easy
    // for main.js to loop through and create a separate <p> per paragraph.
    paragraphs: [
      "Before I wrote a line of code, I ran a salon — and before I curated a single CV, I spent years getting consultations right, because a bad haircut and a bad CV come from the same mistake: acting on the wrong information, or not being intentional enough to get the right information first.",
      "That's the lens I bring to everything I build now. Whether I'm shaping someone's CV, designing their portfolio page, or writing the backend code behind a product — I start the same way: slow down, find out what's actually true, then build.",
      "I'm a backend engineer by training, working mostly in JavaScript/Node — but the work that comes most naturally to me is helping people present what's real about them, clearly and with intention."
    ]
  },

  techStack: {
    summary: "JavaScript & Node.js — backend-focused, comfortable across the full stack when a project needs it. I started in Python (Django, FastAPI) before making a deliberate move to the JavaScript ecosystem — the fundamentals run deep even though the tools changed.",
    roles: [
      "Backend Engineer (primary)",
      "Full-Stack Contributor (hybrid, frontend when needed)",
      "CV Writer & Portfolio Page Builder"
    ],
    skills: ["Node.js", "NestJS", "JavaScript", "HTML/CSS", "PostgreSQL", "REST APIs", "Git/GitHub"],
    background: ["Python", "Django", "FastAPI"]
  },

  // Array of objects for sections that REPEAT — apps, and later,
  // CV samples / portfolio samples. main.js will loop over this
  // array once and generate one card/block per item, instead of
  // hardcoding "Naija Learn" and "ExpenseApp" separately in HTML.
  apps: [
    {
      name: "Naija Learn",
      description: "An AI-powered learning platform for Nigerian secondary school students, built on the WAEC curriculum. Built end-to-end — FastAPI, PostgreSQL, async SQLAlchemy, Groq's LLaMA 3.3 70B for AI content, and a vanilla JS frontend with full client-side routing.",
      decision: "When the first AI provider proved unreliable for generating curriculum-accurate content, I switched providers mid-build rather than ship something inconsistent — because shipping the wrong information defeats the whole point of a learning platform.",
      tech: ["FastAPI", "PostgreSQL", "Async SQLAlchemy", "Groq LLaMA 3.3 70B", "Vanilla JS"]
    },
    {
      name: "ExpenseApp",
      description: "A team-built expense tracking app (FastAPI/PostgreSQL) developed collaboratively via GitHub.",
      decision: "My contribution: schema type fixes and documentation improvements through PRs — plus rebuilding the project independently in parallel to deepen my own understanding of the codebase.",
      tech: ["FastAPI", "PostgreSQL"]
    }
  ],

  // PLACEHOLDER SECTIONS — deliberately left as empty arrays/objects.
  // main.js will check "if array is empty, show a 'Coming soon' stub"
  // instead of crashing or showing a blank gap. We fill these in later
  // without touching main.js or the HTML structure at all.
  cvSamples: [],       // will hold { title, context, link/image } objects later
  portfolioSamples: [],// same pattern as cvSamples
  contact: {
    email: "",         // fill in when ready
    note: "Coming soon"
  }

};