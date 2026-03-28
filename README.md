# 🇮🇳 Quiz Politics — India Quiz Challenge

A fully **static** quiz game covering Indian Modern History and Politics.  
**No backend required** — runs entirely in the browser and deploys easily via GitHub Pages.

---

## 🎯 Features

| Feature | Details |
|---|---|
| **Levels** | 10 levels (Level 1–3 Easy, 4–7 Medium, 8–10 Hard) |
| **Questions** | 100 questions (10 per level) with 3 swap candidates per level |
| **Categories** | Freedom Movement · Prime Ministers · Chief Ministers · Constitutional Amendments · Post-Independence India · Colonial History |
| **Lifelines** | 50-50 · Double Choice · Swap Question (one use each per level) |
| **Timer** | 15-second countdown per question |
| **Scoring** | 10 points per correct answer; 60/100 needed to pass a level |
| **Leaderboard** | Top-10 scores stored in `localStorage` |
| **Sound** | Web Audio API tones — no external files |
| **Responsive** | Works on desktop, tablet and mobile |

---

## 📁 Project Structure

```
quizPolitics/
├── index.html      # Main HTML — single-page application
├── style.css       # All styles (CSS variables, responsive grid)
├── questions.js    # 130 hardcoded questions (13 per level)
├── app.js          # Game logic (state, lifelines, timer, localStorage)
└── README.md       # This file
```

---

## 🚀 Local Development

No build tools or packages required.

```bash
# Clone the repository
git clone https://github.com/<your-username>/quizPolitics.git
cd quizPolitics

# Open directly in a browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows

# Or use any simple HTTP server, e.g.:
npx serve .
# then visit http://localhost:3000
```

---

## 🌐 Deploying to GitHub Pages

### Option A — Repository Settings (simplest)

1. Push your code to the `main` (or `master`) branch.
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Source**, select `Deploy from a branch`.
4. Choose **Branch: main** and **Folder: / (root)**.
5. Click **Save**.
6. Your site will be live at:  
   `https://<your-username>.github.io/quizPolitics/`

### Option B — `gh-pages` branch

```bash
# Install the gh-pages helper (optional)
npm install -g gh-pages

# Deploy
gh-pages -d .
```

---

## 🎮 How to Play

1. Enter your name on the welcome screen and click **Play ▶**.
2. Select a level (Level 1 is unlocked initially).
3. Answer 10 multiple-choice questions within 15 seconds each.
4. Score **6 or more** correct to **pass** the level and unlock the next.
5. Use your **3 lifelines** wisely:
   - **🎲 50:50** — eliminates 2 wrong options.
   - **🔁 Double** — lets you pick 2 options; correct if either matches.
   - **🔄 Swap** — replaces the current question with a new one.
6. Complete all 10 levels to see your final score and leaderboard rank.

---

## 📊 Question Categories

- **Freedom Movement** — INC, Satyagraha, key leaders & events
- **Post-Independence India** — Five Year Plans, wars, economic reforms
- **Prime Ministers of India** — All PMs, notable policies & events
- **Chief Ministers** — First CMs, notable state leaders
- **Constitutional Amendments** — Major Acts, Articles & Amendments
- **Colonial History** — British administration, Viceroys, reform acts

---

## 🛠 Tech Stack

- **HTML5** — semantic markup, ARIA attributes
- **CSS3** — CSS variables, grid, flexbox, animations
- **Vanilla JavaScript (ES2017+)** — no frameworks, no dependencies
- **Web Audio API** — procedural sound effects
- **localStorage** — leaderboard & progress persistence

---

## 📜 License

MIT — free to use, modify and distribute.
