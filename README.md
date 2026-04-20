# Candidate Pulse 💗

> An interactive employer branding tool that visualises the candidate experience — built to show how communication, drop-off rates, and personalisation shape how candidates feel about your company.

---

## What's in this project

```
candidate-pulse/
├── index.html    ← The page structure (HTML)
├── styles.css    ← All the colours, fonts, spacing
├── app.js        ← All the interactive behaviour
├── data.js       ← All candidate data + message templates
└── README.md     ← This file
```

**Golden rule:** To change content (candidates, messages, charts), edit `data.js`.  
To change how things look, edit `styles.css`.  
To change how things behave, edit `app.js`.

---

## How to add a new candidate

Open `data.js` and copy this block into the `candidates` array:

```js
{
  name: "Your Candidate Name",
  role: "Job Title",
  industry: "Industry",
  stage: "screening",       // applied | screening | interview | offer | dropped
  sentiment: "positive",    // positive | neutral | negative
  color: "#7EB8D4",         // Pick any hex colour for their avatar
  initials: "AB",           // First + last initial
  days: 7,                  // Days they've been in the process
  rating: 4,                // Experience rating 1–5
  comm: 75,                 // Communication score 0–100
  feedback: "Their verbatim feedback quote goes here.",
  timeline: [
    "Step one",
    "Step two",
    "Step three"
  ],
  dropReason: null          // null if active; "reason text" if dropped
}
```

Save the file and the directory, filters, and charts all update automatically.

---

## Deploying to GitHub + Vercel (step by step)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you haven't already.

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `candidate-pulse`
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop all 4 files at once:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `data.js`
3. Scroll down, write a commit message like `first upload` and click **Commit changes**

### Step 4 — Deploy to Vercel (free, takes 2 minutes)
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → choose **Continue with GitHub**
3. Click **Add New Project**
4. Find your `candidate-pulse` repository and click **Import**
5. Leave all settings as default — Vercel automatically detects it's a static site
6. Click **Deploy**
7. In about 30 seconds you'll get a live URL like: `candidate-pulse.vercel.app` 🎉

### Every time you update the site
1. Go to your GitHub repository
2. Click on the file you want to change
3. Click the pencil ✏️ icon to edit
4. Make your changes
5. Click **Commit changes**

Vercel will automatically redeploy within ~30 seconds — no extra steps needed.

---

## Customising the design

### Change the colour scheme
Open `styles.css` and look for the `:root` block at the top. These are your design tokens:

```css
:root {
  --rose-deep: #C4687A;   /* Main accent colour */
  --blue:      #7EB8D4;   /* Secondary colour */
  --charcoal:  #2C2C2A;   /* Main text colour */
  --cream:     #FAF7F2;   /* Background colour */
}
```

Swap any hex value to change the colour scheme across the whole site.

### Change the fonts
The fonts load from Google Fonts in `index.html`. Look for this line:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display...
```

You can replace `Playfair+Display` with any Google Font.

---

## Sharing on LinkedIn

When you post on LinkedIn, use this framing:

> "I built an interactive candidate experience tool called Candidate Pulse as a personal project to explore employer branding and AI-assisted communications.
>
> It shows real-time candidate drop-off, sentiment analysis, and personalised message generation — all in the browser with no backend needed.
>
> [your-vercel-url]
>
> #EmployerBranding #CandidateExperience #HRTech #PersonalProject"

---

## Questions?

The code is written to be readable and commented. If something isn't working, the most likely fix is refreshing the browser after saving your files.

Built with HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no complicated setup. Just files.
