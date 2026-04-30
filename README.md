# What's The Question?

A real-time, browser-based quiz game with live team buzzers — powered by MQTT over WebSockets. Designed for interactive sessions, workshops, and events. Deploy to GitHub Pages and run with zero backend.

---

## Deployment

This project runs entirely on **GitHub Pages** as static files. No server, no database.

### Setup

1. Fork or clone this repo
2. Enable GitHub Pages (Settings > Pages > Source: main branch)
3. Open `setup.html` on your deployed site to configure teams and branding
4. Share buzzer URLs (or QR codes) with participants

### Pages

| Page | URL | Purpose |
|------|-----|---------|
| Game Board | `autocor_jeopardy.html` | Projector display for the audience |
| Buzzer | `buzzer.html?team=<id>` | Player phones — one per team |
| Answer Key | `answer-key.html` | Private host screen (password protected) |
| Setup | `setup.html` | Configure teams, branding, Final Jeopardy |
| Test Buzzers | `test-buzzers.html` | Pre-session testing and MQTT debug |

---

## Configuration

All configuration is managed through the **Setup page** (`setup.html`) — no code changes needed between deployments.

### Teams Tab

- Add or remove teams (supports any number)
- Set team name, ID, primary/secondary colors
- Upload team images or use auto-generated initials as icons
- Drag to reorder

### Branding Tab

- Change the header title (default: "What's The Question?")
- Upload or link a custom logo
- Enable/disable Final Jeopardy
- Edit the Final Jeopardy question and answer

### How Config Works

Configuration is published as a **retained MQTT message**. When you click "Save & Publish Live" in the setup page:

- All connected pages (game board, buzzers, answer key) update instantly
- New clients that connect later receive the retained config automatically
- No redeploy required for config changes

Fallback: pages load `config.json` from the repo on startup if no MQTT config is available yet.

---

## Multi-Deployment Support

The same code can be deployed to multiple GitHub repos/pages without interference. MQTT topics are automatically namespaced by hostname:

```
Deployment: user-a.github.io  →  topics: jeopardy/user-a-github-io/buzz
Deployment: user-b.github.io  →  topics: jeopardy/user-b-github-io/buzz
```

Each deployment is fully isolated with zero configuration.

---

## Game Flow

1. Host opens the game board on projector
2. Teams scan QR codes to open their buzzer pages on phones
3. Host clicks a dollar value tile to open a question
4. Teams race to buzz in — first buzz locks all others
5. Host judges the answer:
   - **Correct**: points added, tile consumed, answer revealed
   - **Wrong**: points deducted, other teams can steal
6. If host closes a question without anyone answering, the tile stays active
7. Optional Final Jeopardy round at the end

---

## Question Data

Questions live in JSON files under `data/`:

```
data/session_1.json   (default)
data/session_2.json
data/session_3.json
```

Load a specific session via URL parameter: `autocor_jeopardy.html?board=session_2`

### Session JSON Format

```json
{
  "finalJeopardy": {
    "q": "Your Final Jeopardy question",
    "a": "What is the answer?"
  },
  "categories": [
    {
      "name": "Category Name",
      "questions": [
        { "q": "Question text", "a": "Answer text" },
        { "q": "...", "a": "..." }
      ]
    }
  ]
}
```

The `finalJeopardy` field is optional. If present, it provides the default Final Jeopardy question (overridable from the setup page). The legacy format (plain array of categories) is also supported.

---

## Technical Architecture

| Layer | Technology |
|-------|-----------|
| Frontend | Plain HTML, CSS, JavaScript |
| Real-time | MQTT over WebSocket (WSS) via mqtt.js |
| Broker | `wss://broker.emqx.io:8084/mqtt` (public) |
| Hosting | GitHub Pages (static files) |
| Config | Retained MQTT messages + config.json fallback |

### MQTT Topics (per deployment)

```
jeopardy/<instance-id>/buzz       Team buzzer presses
jeopardy/<instance-id>/control    Reset/disable buzzer commands
jeopardy/<instance-id>/question   Question/answer sync to answer key
jeopardy/<instance-id>/config     Live configuration (retained)
```

### Why It Works on Enterprise WiFi

- Uses WebSocket Secure on port 443 (HTTPS standard)
- No special ports, no VPN needed
- Public MQTT broker handles all real-time communication
- Pure client-side — no backend to configure or maintain

---

## File Structure

```
.
├── autocor_jeopardy.html    Main game board
├── buzzer.html              Team buzzer (phone)
├── answer-key.html          Host answer display
├── setup.html               Configuration UI
├── test-buzzers.html        Pre-session testing
├── config.json              Default configuration
├── data/
│   ├── session_1.json       Question set 1
│   ├── session_2.json       Question set 2
│   └── session_3.json       Question set 3
└── images/
    ├── learn-with-cisco.png Default logo
    └── teams/               Optional team logos
```

---

## Local Development

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/autocor_jeopardy.html`

---

## Testing Checklist

- [ ] Setup page connects to MQTT (green indicator)
- [ ] Teams appear on game board after publishing config
- [ ] Buzzer pages show correct team info
- [ ] First buzz locks all other buzzers
- [ ] Wrong answer allows steal (other teams can buzz)
- [ ] Correct answer disables tile and reveals answer
- [ ] Closing without answering keeps tile active
- [ ] Answer key syncs question and shows buzzing team
- [ ] Final Jeopardy button respects toggle setting
- [ ] Logo and title update live from setup page
