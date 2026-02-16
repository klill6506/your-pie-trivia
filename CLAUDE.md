# Your Pie Trivia - CLAUDE.md

## Project Overview
**Name:** Your Pie Trivia Game
**Port:** N/A (static HTML -- open in browser or deploy to hosting)
**Stack:** React 18 (CDN), Firebase Realtime Database, Tailwind CSS (CDN), Babel standalone
**GitHub:** https://github.com/klill6506/your-pie-trivia
**Production URL:** Local file or hosted static site
**Status:** In Development

## What This App Does
A multiplayer trivia game built for Your Pie restaurant. Players create or join game rooms, spin a category wheel, and answer trivia questions across 6 categories. Uses Firebase Realtime Database for real-time multiplayer synchronization.

- **Online Multiplayer** -- Host creates a room code, other players join; real-time sync via Firebase
- **Category Wheel Spin** -- Animated spinner selects from 6 trivia categories
- **Trivia Questions** -- Pulls questions from the Open Trivia Database API (opentdb.com)
- **Score Tracking** -- Tracks scores per player with tiebreaker support
- **6 Categories:** Geography, Pop Culture, History, Art & Literature, Science, Sports

## Current State / What I Was Working On
<!-- UPDATE THIS SECTION BEFORE CLOSING CLAUDE CODE -->
**Last session:** [Date]
**Working on:** [Brief description]

### What's Working:
- Online multiplayer with Firebase room codes
- Category wheel spinner
- Trivia questions from Open Trivia Database API
- Score tracking and game flow
- Turn-based gameplay with player rotation
- Tiebreaker logic

### What's Not Working / TODO:
- [ ] Determine if this is actively being developed or on hold
- [ ] Consider moving Firebase config to environment variables
- [ ] Local multiplayer mode (local-multiplayer.html exists as alternate version)

## Key Files
| File | Purpose |
|------|---------|
| `index.html` | Main game -- online multiplayer version with Firebase |
| `local-multiplayer.html` | Alternate local (same-device) multiplayer version |
| `indexoriginal.html` | Original/backup version of the game |
| `trivia-game.jsx` | React JSX source component |
| `Your Pie Trivia.html` | Earlier version of the game |

## Tech Details
- **No build step** -- React, ReactDOM, Babel, and Tailwind all loaded via CDN
- **Firebase Realtime Database** -- Used for multiplayer room sync (project: `your-pie-trivia`)
- **Open Trivia Database API** -- `https://opentdb.com/api.php` for trivia questions
- **No backend server** -- Entirely client-side

## Running the App
```powershell
# Just open the HTML file in a browser
start "D:\Other Apps\your-pie-trivia\index.html"

# Or use a local server for better compatibility
cd "D:\Other Apps\your-pie-trivia"
python -m http.server 8080
# Then open http://localhost:8080
```

## Notes
- This is NOT a Sherpa app -- it's a standalone fun project for Your Pie restaurant
- No Python backend, no database beyond Firebase
- Firebase API key is embedded in the HTML (standard for client-side Firebase apps)
- 5 commits in git history
