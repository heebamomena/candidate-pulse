// =============================================================
// data.js — All candidate data and message templates
// To add more candidates: copy one object in the array below
// and fill in the fields. All filters update automatically.
// =============================================================

const candidates = [
  {
    name: "Amara Osei",
    role: "Product Manager",
    industry: "Tech",
    stage: "offer",          // applied | screening | interview | offer | dropped
    sentiment: "positive",   // positive | neutral | negative
    color: "#E8A5B0",
    initials: "AO",
    days: 12,
    rating: 5,               // 1–5 stars
    comm: 92,                // communication score 0–100
    feedback: "The whole process felt incredibly human. I always knew where I stood.",
    timeline: [
      "Applied via LinkedIn",
      "Screening call within 48 hrs",
      "Two-stage interview",
      "Offer received — accepted!"
    ],
    dropReason: null         // null if still active; string if they dropped
  },
  {
    name: "Ben Hargreaves",
    role: "UX Designer",
    industry: "Creative",
    stage: "interview",
    sentiment: "positive",
    color: "#7EB8D4",
    initials: "BH",
    days: 8,
    rating: 4,
    comm: 85,
    feedback: "Quick responses and a clear process. Felt respected throughout.",
    timeline: ["Applied on careers page", "Phone screen Day 3", "Design task sent", "Panel interview booked"],
    dropReason: null
  },
  {
    name: "Chloe Mensah",
    role: "Data Analyst",
    industry: "Finance",
    stage: "dropped",
    sentiment: "negative",
    color: "#8A8880",
    initials: "CM",
    days: 18,
    rating: 2,
    comm: 18,
    feedback: "I waited 3 weeks and never heard back after my interview. No closure.",
    timeline: ["Applied", "Phone screen", "First interview", "Ghosted after final round"],
    dropReason: "No communication post-interview"
  },
  {
    name: "David Park",
    role: "Software Engineer",
    industry: "Tech",
    stage: "screening",
    sentiment: "neutral",
    color: "#7DB87A",
    initials: "DP",
    days: 5,
    rating: 3,
    comm: 60,
    feedback: "Process seems okay so far. Waiting to hear more.",
    timeline: ["Applied via referral", "Screening scheduled"],
    dropReason: null
  },
  {
    name: "Elena Vasquez",
    role: "Marketing Manager",
    industry: "Marketing",
    stage: "dropped",
    sentiment: "negative",
    color: "#E8B96A",
    initials: "EV",
    days: 22,
    rating: 1,
    comm: 10,
    feedback: "The application took 45 minutes and asked for information already on my CV.",
    timeline: ["Started application", "Abandoned mid-form — too long"],
    dropReason: "Application form too lengthy"
  },
  {
    name: "Finn O'Brien",
    role: "Finance Analyst",
    industry: "Finance",
    stage: "offer",
    sentiment: "positive",
    color: "#E8A5B0",
    initials: "FO",
    days: 14,
    rating: 5,
    comm: 90,
    feedback: "Loved the transparency about salary from the very first call.",
    timeline: ["Applied", "Screening call Day 2", "Two interviews", "Offer received"],
    dropReason: null
  },
  {
    name: "Grace Nkemdirim",
    role: "HR Business Partner",
    industry: "HR",
    stage: "interview",
    sentiment: "positive",
    color: "#7EB8D4",
    initials: "GN",
    days: 7,
    rating: 4,
    comm: 78,
    feedback: "The interviewers were so well-prepared. It felt like a two-way conversation.",
    timeline: ["Applied", "Quick screening", "In-person interview booked"],
    dropReason: null
  },
  {
    name: "Hana Suzuki",
    role: "Content Strategist",
    industry: "Creative",
    stage: "dropped",
    sentiment: "negative",
    color: "#C4687A",
    initials: "HS",
    days: 31,
    rating: 1,
    comm: 5,
    feedback: "Nobody told me the role was filled. I found out on LinkedIn.",
    timeline: ["Applied", "Screening call", "Awaited response…", "Role posted as filled externally"],
    dropReason: "No rejection communication"
  },
  {
    name: "Ibrahim Al-Rashid",
    role: "Cloud Architect",
    industry: "Tech",
    stage: "interview",
    sentiment: "positive",
    color: "#7DB87A",
    initials: "IA",
    days: 9,
    rating: 4,
    comm: 82,
    feedback: "Technical interviews were challenging but fair. Great structure.",
    timeline: ["Applied", "Screening", "Technical test", "Panel interview upcoming"],
    dropReason: null
  },
  {
    name: "Jasmine Torres",
    role: "Brand Designer",
    industry: "Creative",
    stage: "screening",
    sentiment: "neutral",
    color: "#E8B96A",
    initials: "JT",
    days: 4,
    rating: 3,
    comm: 55,
    feedback: "Just started. The recruiter seemed rushed on the initial call.",
    timeline: ["Applied", "Screening call completed"],
    dropReason: null
  },
  {
    name: "Kwame Asante",
    role: "Operations Lead",
    industry: "Logistics",
    stage: "offer",
    sentiment: "positive",
    color: "#7EB8D4",
    initials: "KA",
    days: 16,
    rating: 5,
    comm: 95,
    feedback: "Most organised hiring process I've experienced. 10/10.",
    timeline: ["Applied", "Screening Day 2", "Two-stage interview", "Offer accepted"],
    dropReason: null
  },
  {
    name: "Laura Bianchi",
    role: "Project Manager",
    industry: "Consulting",
    stage: "dropped",
    sentiment: "neutral",
    color: "#8A8880",
    initials: "LB",
    days: 11,
    rating: 3,
    comm: 48,
    feedback: "Withdrew because I got another offer — the process moved too slowly.",
    timeline: ["Applied", "Screening", "Interview", "Withdrew — accepted elsewhere"],
    dropReason: "Process too slow — lost to competitor"
  },
  {
    name: "Mateus Oliveira",
    role: "Growth Marketer",
    industry: "Marketing",
    stage: "interview",
    sentiment: "positive",
    color: "#E8A5B0",
    initials: "MO",
    days: 10,
    rating: 4,
    comm: 80,
    feedback: "The take-home task was reasonable and I got constructive feedback on it.",
    timeline: ["Applied", "Screening", "Take-home task", "Feedback received — interview booked"],
    dropReason: null
  },
  {
    name: "Nina Kowalski",
    role: "Legal Counsel",
    industry: "Legal",
    stage: "screening",
    sentiment: "negative",
    color: "#C4687A",
    initials: "NK",
    days: 14,
    rating: 2,
    comm: 30,
    feedback: "The job description didn't match what they described on the call at all.",
    timeline: ["Applied", "Screening call — misaligned expectations"],
    dropReason: null
  },
  {
    name: "Omar Diallo",
    role: "Sales Director",
    industry: "Tech",
    stage: "offer",
    sentiment: "positive",
    color: "#7DB87A",
    initials: "OD",
    days: 19,
    rating: 5,
    comm: 94,
    feedback: "The hiring manager was brilliant. Felt like they genuinely wanted me to succeed.",
    timeline: ["Applied", "Screening", "Interview x2", "Offer received and accepted"],
    dropReason: null
  },
  {
    name: "Priya Sharma",
    role: "Data Scientist",
    industry: "Tech",
    stage: "interview",
    sentiment: "positive",
    color: "#7EB8D4",
    initials: "PS",
    days: 8,
    rating: 4,
    comm: 76,
    feedback: "Clear timelines and honest conversations about the role's challenges.",
    timeline: ["Applied", "Screening", "Technical interview", "Final round next week"],
    dropReason: null
  },
  {
    name: "Quinn Baptiste",
    role: "Sustainability Manager",
    industry: "ESG",
    stage: "dropped",
    sentiment: "negative",
    color: "#8A8880",
    initials: "QB",
    days: 25,
    rating: 2,
    comm: 25,
    feedback: "Interview felt like a test rather than a conversation. Very one-sided.",
    timeline: ["Applied", "Screening", "Interview", "Withdrew — poor interview experience"],
    dropReason: "Poor interview experience"
  },
  {
    name: "Rosa Martinez",
    role: "Talent Acquisition",
    industry: "HR",
    stage: "offer",
    sentiment: "positive",
    color: "#E8B96A",
    initials: "RM",
    days: 13,
    rating: 5,
    comm: 91,
    feedback: "Meta! Being recruited by an excellent recruiter was genuinely joyful.",
    timeline: ["Applied", "Screening Day 1", "Interview", "Offer received"],
    dropReason: null
  },
  {
    name: "Sam Chen",
    role: "DevOps Engineer",
    industry: "Tech",
    stage: "interview",
    sentiment: "neutral",
    color: "#E8A5B0",
    initials: "SC",
    days: 11,
    rating: 3,
    comm: 62,
    feedback: "Technically solid process. Communication between rounds could be warmer.",
    timeline: ["Applied", "Tech screen", "Live coding", "System design interview upcoming"],
    dropReason: null
  },
  {
    name: "Tasha Williams",
    role: "Retail Buyer",
    industry: "Retail",
    stage: "dropped",
    sentiment: "negative",
    color: "#C4687A",
    initials: "TW",
    days: 8,
    rating: 1,
    comm: 15,
    feedback: "Three interviews for a mid-level role felt excessive and disrespectful of my time.",
    timeline: ["Applied", "Phone screen", "Interview 1", "Interview 2", "Interview 3 — withdrew"],
    dropReason: "Too many interview rounds"
  },
  {
    name: "Usman Farooq",
    role: "Procurement Manager",
    industry: "Supply Chain",
    stage: "screening",
    sentiment: "neutral",
    color: "#7DB87A",
    initials: "UF",
    days: 3,
    rating: 3,
    comm: 58,
    feedback: "Early days. Recruiter was friendly and set clear next steps.",
    timeline: ["Applied", "Screening call completed", "Awaiting outcome"],
    dropReason: null
  },
  {
    name: "Valentina Cruz",
    role: "Product Designer",
    industry: "Tech",
    stage: "offer",
    sentiment: "positive",
    color: "#7EB8D4",
    initials: "VC",
    days: 15,
    rating: 5,
    comm: 96,
    feedback: "Portfolio review was genuinely engaging — they'd actually studied my work.",
    timeline: ["Applied", "Portfolio screening", "Interview", "Design challenge", "Offer received"],
    dropReason: null
  },
  {
    name: "Will Thompson",
    role: "Account Executive",
    industry: "SaaS",
    stage: "dropped",
    sentiment: "negative",
    color: "#8A8880",
    initials: "WT",
    days: 20,
    rating: 2,
    comm: 20,
    feedback: "Never received feedback on my presentation. That was the hardest part to accept.",
    timeline: ["Applied", "Screening", "Interview", "Presentation", "No feedback received"],
    dropReason: "No feedback post-presentation"
  },
  {
    name: "Xiomara Santos",
    role: "UX Researcher",
    industry: "Tech",
    stage: "interview",
    sentiment: "positive",
    color: "#E8A5B0",
    initials: "XS",
    days: 7,
    rating: 4,
    comm: 79,
    feedback: "Research-led interview approach — they really understood the role.",
    timeline: ["Applied", "Screening", "Portfolio review", "User research task ongoing"],
    dropReason: null
  },
  {
    name: "Yusuf Hassan",
    role: "CX Manager",
    industry: "Retail",
    stage: "screening",
    sentiment: "neutral",
    color: "#E8B96A",
    initials: "YH",
    days: 6,
    rating: 3,
    comm: 53,
    feedback: "Happy with initial contact. Hoping for a quick turnaround.",
    timeline: ["Applied", "Screening call completed"],
    dropReason: null
  },
  {
    name: "Zara Ahmed",
    role: "Strategy Consultant",
    industry: "Consulting",
    stage: "offer",
    sentiment: "positive",
    color: "#7DB87A",
    initials: "ZA",
    days: 17,
    rating: 5,
    comm: 97,
    feedback: "The most human, well-run hiring process I've experienced in 8 years.",
    timeline: ["Applied", "Screening Day 1", "Case interview", "Partner interview", "Offer"],
    dropReason: null
  },
  {
    name: "Alex Morgan",
    role: "People Analytics",
    industry: "HR",
    stage: "interview",
    sentiment: "positive",
    color: "#7EB8D4",
    initials: "AM",
    days: 9,
    rating: 4,
    comm: 77,
    feedback: "Love that they use data to improve their own hiring. Meta and impressive.",
    timeline: ["Applied", "Screening", "Data task", "Interview booked"],
    dropReason: null
  },
  {
    name: "Bianca Ferreira",
    role: "Event Manager",
    industry: "Events",
    stage: "dropped",
    sentiment: "neutral",
    color: "#C4687A",
    initials: "BF",
    days: 28,
    rating: 2,
    comm: 35,
    feedback: "Process dragged on for a month. Accepted another offer out of necessity.",
    timeline: ["Applied", "Screening", "Interview", "Long silence", "Withdrew"],
    dropReason: "Process duration too long"
  },
  {
    name: "Carlos Reyes",
    role: "SEO Specialist",
    industry: "Marketing",
    stage: "screening",
    sentiment: "neutral",
    color: "#8A8880",
    initials: "CR",
    days: 5,
    rating: 3,
    comm: 50,
    feedback: "Fine so far. Nothing exceptional but nothing bad either.",
    timeline: ["Applied", "Screening scheduled"],
    dropReason: null
  },
  {
    name: "Diana Lowe",
    role: "Compliance Officer",
    industry: "Finance",
    stage: "offer",
    sentiment: "positive",
    color: "#E8A5B0",
    initials: "DL",
    days: 14,
    rating: 5,
    comm: 88,
    feedback: "Salary conversation was handled beautifully — no awkward dance.",
    timeline: ["Applied", "Screening", "Interview x2", "Offer — starting next month"],
    dropReason: null
  }
];

// =============================================================
// MESSAGE TEMPLATES
// Each template is a function: (candidateName, role, company) => string
// Feel free to edit the wording of any message below.
// =============================================================

const messageTemplates = {
  application_received: {
    warm: (n, r, c) => `Hi ${n.split(" ")[0]},

Thank you so much for applying for the ${r} role at ${c} — we're really glad you did.

We've received your application and our team will be reviewing it carefully over the next 3–5 working days. We'll be in touch with a clear update either way, because we believe every candidate deserves to know where they stand.

In the meantime, feel free to reply to this message if you have any questions at all.

Warmly,
The ${c} Talent Team`,

    professional: (n, r, c) => `Dear ${n},

Thank you for submitting your application for the ${r} position at ${c}.

We have received your application and will complete our review within 3–5 business days. You will receive a response regardless of the outcome.

Best regards,
${c} Talent Acquisition`,

    casual: (n, r, c) => `Hey ${n.split(" ")[0]}! 👋

Your application for ${r} at ${c} just landed in our inbox — great to have you in the mix!

We'll have a proper look over the next few days and ping you back with an update. Don't be a stranger if you have questions!

Cheers,
The ${c} team`
  },

  screening_invite: {
    warm: (n, r, c) => `Hi ${n.split(" ")[0]},

Great news — after reviewing your application for the ${r} role, we'd love to invite you for a short introductory call.

This is a relaxed, 20-minute conversation — no surprises. We'd love to hear a little about your background and share more about what working at ${c} is really like.

Please use the link below to book a time that suits you:
[Calendar link]

We're looking forward to meeting you!

Warmly,
The ${c} Talent Team`,

    professional: (n, r, c) => `Dear ${n},

Following a review of your application for the ${r} role, we would like to invite you to a telephone screening interview.

The call will last approximately 20 minutes. Please select a convenient time via the link provided:
[Calendar link]

We look forward to speaking with you.

Best regards,
${c} Talent Acquisition`,

    casual: (n, r, c) => `Hey ${n.split(" ")[0]}! 🎉

Exciting news — we loved your application for ${r} and we'd love to have a chat!

It's just a quick 20-min call to get to know each other. Pick a time here:
[Calendar link]

Can't wait to hear from you!

The ${c} team`
  },

  interview_scheduled: {
    warm: (n, r, c) => `Hi ${n.split(" ")[0]},

Wonderful — your interview for the ${r} role at ${c} is confirmed!

Here's what to expect:
• Format: Conversational, 60 minutes
• Who you'll meet: [Hiring Manager Name], ${r} Lead
• What to prepare: We'd love to hear about a project you're proud of

There are no trick questions — we want to understand how you think and work. Please don't hesitate to ask us anything at all.

See you soon!

Warmly,
The ${c} Talent Team`,

    professional: (n, r, c) => `Dear ${n},

Your interview for the ${r} position at ${c} has been confirmed as scheduled.

Please find preparation guidance below:
• Duration: 60 minutes
• Format: Competency-based interview
• Interviewer: [Name], ${r} Lead

Should you require any adjustments or have questions, please do not hesitate to contact us.

Best regards,
${c} Talent Acquisition`,

    casual: (n, r, c) => `Hey ${n.split(" ")[0]}! Interview is locked in — super excited to meet you properly! 🙌

Quick heads up:
• It's about an hour
• You'll be chatting with [Name]
• Bring a project story you loved working on

No pressure at all — we just want to have a great conversation. See you there!

The ${c} team`
  },

  post_interview: {
    warm: (n, r, c) => `Hi ${n.split(" ")[0]},

Thank you so much for taking the time to interview with us for the ${r} role — we really appreciated the conversation.

We're currently completing our interviews and aim to be back in touch within 5 working days with a clear update. We know waiting can feel uncertain, and we want you to know you'll hear from us either way.

If you have any questions or thoughts while you wait, please don't hesitate to reach out.

Warm wishes,
The ${c} Talent Team`,

    professional: (n, r, c) => `Dear ${n},

Thank you for attending your interview for the ${r} position at ${c}.

We are currently in the final stages of our selection process and will provide you with an update within 5 business days.

Thank you for your patience.

Best regards,
${c} Talent Acquisition`,

    casual: (n, r, c) => `Hey ${n.split(" ")[0]},

Just wanted to say — great chat! Really enjoyed hearing about your experience.

We're seeing the last few folks this week and will be back to you by [date] with news. Fingers crossed! 🤞

The ${c} team`
  },

  rejection_kind: {
    warm: (n, r, c) => `Hi ${n.split(" ")[0]},

Thank you so much for the time and effort you put into your application and interviews for the ${r} role at ${c}.

After very careful consideration, we've decided to move forward with another candidate whose experience more closely matches where we are right now. This was genuinely not an easy decision, and we want you to know your candidacy was taken seriously.

We're grateful you considered ${c} and wish you every success ahead. We'd genuinely encourage you to keep an eye on future openings with us.

Warmly,
The ${c} Talent Team`,

    professional: (n, r, c) => `Dear ${n},

Thank you for your interest in the ${r} position at ${c} and for the time you invested in our process.

After careful consideration, we have decided to proceed with another candidate for this role. We appreciate your candidacy and encourage you to apply for future opportunities.

We wish you well in your job search.

Best regards,
${c} Talent Acquisition`,

    casual: (n, r, c) => `Hey ${n.split(" ")[0]},

We really appreciate you going through our process for the ${r} role — it meant a lot.

After a tough decision, we've gone with someone else this time. It was close and we hope you keep us in mind down the line — we'd genuinely love to work with you someday.

Thanks again, and best of luck! You're clearly talented.

The ${c} team`
  },

  offer: {
    warm: (n, r, c) => `Hi ${n.split(" ")[0]},

This is the message we've been excited to send — we'd love to offer you the ${r} role at ${c}! 🎉

After getting to know you through this process, the team is genuinely enthusiastic about having you join us. The way you approach your work and the perspective you bring really stood out.

We'll be sending the formal offer documentation shortly, but wanted you to hear it from us first. Please take the time you need to review and ask us anything.

We really hope you'll say yes.

With excitement,
The ${c} Talent Team`,

    professional: (n, r, c) => `Dear ${n},

We are delighted to extend an offer of employment for the position of ${r} at ${c}.

Formal documentation outlining the terms and conditions of your employment will follow separately. Please review at your convenience and do not hesitate to raise any questions.

We look forward to welcoming you to the team.

Best regards,
${c} Talent Acquisition`,

    casual: (n, r, c) => `${n.split(" ")[0]}!!! 🎊

WE WANT YOU! The ${r} offer is yours!

Honestly, the whole team is buzzing. We'll send the formal docs over shortly but wanted to shout it from the rooftops first.

Take your time to review — and please ask us ANYTHING. We want you to feel great about saying yes!

The ${c} team`
  }
};

// =============================================================
// IMPROVEMENT RECOMMENDATIONS
// Edit the text below or add more cards as needed.
// =============================================================

const improvements = [
  {
    icon: "⏱",
    iconBg: "#D6EDF6",
    title: "7-day response SLA",
    body: "Commit to responding to every candidate within 7 days of application. Set automated reminders for your team. This single change reduces negative sentiment by ~35%.",
    impact: "High impact",
    impactColor: "#b83232"
  },
  {
    icon: "✍️",
    iconBg: "#F5D4DA",
    title: "Personalise every touchpoint",
    body: "Reference something specific from the candidate's application in every message. Takes 30 seconds — makes candidates feel genuinely seen, not processed.",
    impact: "High impact",
    impactColor: "#b83232"
  },
  {
    icon: "📋",
    iconBg: "#FAF0D6",
    title: "Simplify the application form",
    body: "Remove any field already answered by the CV. Target under 8 fields. Every field removed increases completion rate by ~4%.",
    impact: "Medium impact",
    impactColor: "#8a5a0a"
  },
  {
    icon: "🪞",
    iconBg: "#EDE8FD",
    title: "Always close the loop",
    body: "Every candidate who reaches interview stage deserves a personal rejection — not silence. A two-sentence personalised message preserves brand love even when declining.",
    impact: "Brand critical",
    impactColor: "#5533CC"
  },
  {
    icon: "⚡",
    iconBg: "#D6EDD4",
    title: "Speed up screening to interview",
    body: "The average gap between screening and first interview is 11 days. Industry best practice is 5. Faster pipelines lose fewer candidates to competing offers.",
    impact: "High impact",
    impactColor: "#b83232"
  },
  {
    icon: "💬",
    iconBg: "#F5D4DA",
    title: "Post-interview 48hr check-in",
    body: "Send a brief, warm message 48 hours after every interview. Acknowledge the wait. Show you're thinking of them. This reduces candidate anxiety and ghosting.",
    impact: "Quick win",
    impactColor: "#3A7FA0"
  }
];

// =============================================================
// CHART DATA
// Edit numbers here to reflect your real data.
// =============================================================

const chartData = {
  sentiment: {
    labels: ["Applied", "Screening", "Interview", "Final round", "Offer"],
    datasets: [
      { label: "Positive", data: [72, 65, 58, 52, 90], backgroundColor: "#7DB87A88", borderColor: "#7DB87A", borderWidth: 1.5 },
      { label: "Neutral",  data: [20, 25, 28, 30,  8], backgroundColor: "#E8B96A88", borderColor: "#E8B96A", borderWidth: 1.5 },
      { label: "Negative", data: [ 8, 10, 14, 18,  2], backgroundColor: "#E8A5B088", borderColor: "#E8A5B0", borderWidth: 1.5 }
    ]
  },
  response: {
    labels: ["Same day", "1–2 days", "3–5 days", "6–10 days", "10+ days"],
    datasets: [
      { label: "Positive sentiment %", data: [94, 82, 68, 41, 22], backgroundColor: "#7EB8D488", borderColor: "#7EB8D4", borderWidth: 1.5 }
    ]
  },
  communication: {
    labels: ["Personalised message", "Generic template", "No communication"],
    datasets: [
      { label: "Would reapply",           data: [78, 42, 9], backgroundColor: "#7DB87A88", borderColor: "#7DB87A", borderWidth: 1.5 },
      { label: "Would recommend company", data: [82, 38, 6], backgroundColor: "#7EB8D488", borderColor: "#7EB8D4", borderWidth: 1.5 }
    ]
  }
};
