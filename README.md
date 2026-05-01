<div align="center">

<!-- ============ ANIMATED HERO ============ -->

<a href="https://kiskander.github.io/ciscolive-jeopardy/game.html">
  <img src="https://readme-typing-svg.demolab.com?font=Cinzel&size=48&duration=2800&pause=600&color=FFD24A&center=true&vCenter=true&width=900&height=80&lines=WHAT'S+THE+QUESTION%3F;%E2%9A%A1+SHOWTIME+EDITION+%E2%9A%A1;LIVE.+REAL-TIME.+ZERO+BACKEND.;BUZZ+%E2%80%A2+SCORE+%E2%80%A2+WIN" alt="What's The Question? — Showtime Edition" />
</a>

<br />

<!-- ============ STATUS BADGES ============ -->

![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-LIVE-22c55e?style=for-the-badge&logo=github&logoColor=white&labelColor=02041a)
![MQTT](https://img.shields.io/badge/MQTT-Real--Time-ffd24a?style=for-the-badge&logo=mqtt&logoColor=02041a&labelColor=02041a)
![No Backend](https://img.shields.io/badge/Backend-NONE_REQUIRED-1c8eff?style=for-the-badge&logo=serverless&logoColor=white&labelColor=02041a)
![Static](https://img.shields.io/badge/100%25-CLIENT_SIDE-ff5b6e?style=for-the-badge&labelColor=02041a)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

<br />

<!-- ============ HERO TAGLINE ============ -->

### 🎮 A real-time, browser-based quiz game with live team buzzers
#### Powered by MQTT over WebSockets · Designed for the stage · Deploys in 60 seconds

<br />

<!-- ============ QUICK LAUNCH BAR ============ -->

<table>
<tr>
<td align="center" width="200">
  <a href="https://kiskander.github.io/ciscolive-jeopardy/game.html">
    <img src="https://img.shields.io/badge/%F0%9F%93%BA-GAME_BOARD-ffd24a?style=for-the-badge&labelColor=02041a" /><br />
    <sub><b>For the projector</b></sub>
  </a>
</td>
<td align="center" width="200">
  <a href="https://kiskander.github.io/ciscolive-jeopardy/buzzer.html?team=ansible">
    <img src="https://img.shields.io/badge/%F0%9F%94%B4-BUZZER-ff5b6e?style=for-the-badge&labelColor=02041a" /><br />
    <sub><b>For team phones</b></sub>
  </a>
</td>
<td align="center" width="200">
  <a href="https://kiskander.github.io/ciscolive-jeopardy/answer-key.html">
    <img src="https://img.shields.io/badge/%F0%9F%94%92-ANSWER_KEY-1c8eff?style=for-the-badge&labelColor=02041a" /><br />
    <sub><b>For the host (private)</b></sub>
  </a>
</td>
<td align="center" width="200">
  <a href="https://kiskander.github.io/ciscolive-jeopardy/setup.html">
    <img src="https://img.shields.io/badge/%E2%9A%99%EF%B8%8F-SETUP-22c55e?style=for-the-badge&labelColor=02041a" /><br />
    <sub><b>Configure live</b></sub>
  </a>
</td>
</tr>
</table>

<br />

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2&section=header)

</div>

## ✨ What makes this special

<table>
<tr>
<td width="50%" valign="top">

### 🚀 Zero infrastructure
- **No server.** No database. No deploy pipeline.
- **GitHub Pages** hosts everything as static files.
- **MQTT over WebSocket** carries every buzz, every score, every config change in real time.
- Works **on enterprise Wi-Fi** — uses port 443 only.

</td>
<td width="50%" valign="top">

### 🎨 Showtime aesthetic
- Drifting **starfield** + animated light beams
- **Gold accents** with pulsing underline
- 3D **buzzer dome** with ready-state pulse
- Synchronized score animations + **floating tickers**
- **Tweaks panel** for live customization

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ⚡ Real-time, instant
- First buzz locks all others — **sub-100ms** latency
- Wrong answer? Other teams can steal.
- Setup page **publishes config live** to every screen
- Multiple deployments **auto-isolate** by hostname

</td>
<td width="50%" valign="top">

### 🛠️ Built for events
- **QR codes** for buzzer URLs
- **Final Jeopardy** round (toggleable)
- **3 question sessions** baked in, easy to add more
- **Pre-session test page** to verify every buzzer

</td>
</tr>
</table>

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## 🎬 Game Flow

</div>

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor':'#0a1466',
  'primaryTextColor':'#ffd24a',
  'primaryBorderColor':'#ffd24a',
  'lineColor':'#ffd24a',
  'secondaryColor':'#050a36',
  'tertiaryColor':'#02041a',
  'fontFamily':'Segoe UI'
}}}%%
flowchart LR
    A([🎤 Host opens<br/>Game Board]) --> B([📱 Teams scan<br/>QR codes])
    B --> C([💰 Host clicks<br/>tile])
    C --> D{🔴 First buzz?}
    D -->|Yes| E([🏆 Team locks<br/>all others])
    E --> F{✓ Correct?}
    F -->|Yes| G([➕ Points added<br/>tile consumed])
    F -->|No| H([➖ Points deducted<br/>others can steal])
    H --> D
    G --> I([🎯 Next question])
    I --> C

    style A fill:#0a1466,stroke:#ffd24a,color:#fff
    style E fill:#28a745,stroke:#fff,color:#fff
    style G fill:#ffd24a,stroke:#fff,color:#02041a
    style H fill:#ff5b6e,stroke:#fff,color:#fff
```

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## 🏗️ Architecture

</div>

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor':'#0a1466',
  'primaryTextColor':'#ffd24a',
  'primaryBorderColor':'#ffd24a',
  'lineColor':'#ffd24a',
  'secondaryColor':'#050a36'
}}}%%
graph TB
    subgraph "📡 Public MQTT Broker"
      B[wss://broker.emqx.io:8084]
    end

    subgraph "🌐 GitHub Pages — Static Files"
      G[🎬 Game Board]
      A[🔒 Answer Key]
      S[⚙️ Setup]
    end

    subgraph "📱 Team Phones"
      P1[Team 1<br/>Buzzer]
      P2[Team 2<br/>Buzzer]
      P3[Team N<br/>Buzzer]
    end

    G <-.WSS.-> B
    A <-.WSS.-> B
    S <-.WSS.-> B
    P1 <-.WSS.-> B
    P2 <-.WSS.-> B
    P3 <-.WSS.-> B

    style G fill:#0a1466,stroke:#ffd24a,color:#fff
    style A fill:#1c8eff,stroke:#ffd24a,color:#fff
    style S fill:#28a745,stroke:#ffd24a,color:#fff
    style B fill:#ffd24a,stroke:#fff,color:#02041a
    style P1 fill:#ff5b6e,stroke:#fff,color:#fff
    style P2 fill:#ff5b6e,stroke:#fff,color:#fff
    style P3 fill:#ff5b6e,stroke:#fff,color:#fff
```

| Topic | Direction | Purpose |
|---|---|---|
| `jeopardy/<id>/buzz` | Phones → Board | Team buzzer presses |
| `jeopardy/<id>/control` | Board → Phones | Reset / disable commands |
| `jeopardy/<id>/question` | Board → Answer Key | Sync current question |
| `jeopardy/<id>/config` | Setup → All (retained) | Live configuration |

> 💡 **Hostname-namespaced** — `<id>` is auto-derived from `window.location.host`. Run multiple deployments side-by-side with zero config.

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## 🚀 Deploy in 60 seconds

</div>

<details>
<summary><b>👉 Step-by-step (click to expand)</b></summary>

```bash
# 1. Fork or clone
git clone https://github.com/kiskander/ciscolive-jeopardy.git
cd ciscolive-jeopardy

# 2. (optional) test locally
python3 -m http.server 8000
# → open http://localhost:8000/game.html

# 3. Push to your fork
git push origin main

# 4. Enable GitHub Pages
#    Settings → Pages → Source: main branch → Save

# 5. Wait ~30s, then visit:
#    https://<you>.github.io/<repo>/setup.html

# 6. Configure teams + branding → click "Save & Publish Live"
# 7. Share buzzer URLs (or QR codes) with players → 🎮 Showtime
```

</details>

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## 📂 What's in the box

</div>

```
🎬  game.html                Main game board (projector)
🔴  buzzer.html              Team buzzer (phone)
🔒  answer-key.html          Host answer display (password protected)
⚙️  setup.html               Live configuration UI
🧪  test-buzzers.html        Pre-session testing
🎨  showtime-shared.css      Shared Showtime theme
✨  showtime-stars.js        Starfield animation engine
🗂️  config.json              Default configuration
📚  data/
    ├── session_1.json       Question set 1
    ├── session_2.json       Question set 2
    └── session_3.json       Question set 3
🖼️  images/
    ├── learn-with-cisco.png Default logo
    └── teams/               Optional team logos
```

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## 📝 Add your own questions

</div>

Drop a new file under `data/` (e.g. `data/session_4.json`):

```json
{
  "finalJeopardy": {
    "q": "Your final question",
    "a": "What is the answer?"
  },
  "categories": [
    {
      "name": "Network Fabric",
      "questions": [
        { "q": "This protocol replaced STP for active-active...", "a": "What is TRILL?" },
        { "q": "...", "a": "..." }
      ]
    }
  ]
}
```

Load it via URL param:

```
game.html?board=session_4
```

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## ✅ Pre-show checklist

</div>

| | Check |
|---|---|
| 🟢 | Setup page connects to MQTT (green pill in header) |
| 👥 | Teams appear on game board after publishing config |
| 📱 | Buzzer pages show correct team info |
| 🔒 | First buzz locks all other buzzers |
| 💸 | Wrong answer allows other teams to steal |
| ✨ | Correct answer disables tile and reveals answer |
| 🎯 | Closing without answering keeps tile active |
| 🔑 | Answer key syncs question and shows buzzing team |
| 🏆 | Final Jeopardy button respects toggle setting |
| 🎨 | Logo, eyebrow, and title update live from setup |

<div align="center">

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

## 💡 Why it works on enterprise Wi-Fi

</div>

```
✓  WebSocket Secure (WSS) — port 443, indistinguishable from HTTPS
✓  No VPN, no firewall exceptions, no IT tickets
✓  Public MQTT broker handles every real-time message
✓  Pure client-side — nothing to host, nothing to maintain
```

<div align="center">

<br />

![divider](https://capsule-render.vercel.app/api?type=rect&color=ffd24a&height=2)

<sub>Built for live events · Powered by ⚡ MQTT + 🪄 GitHub Pages</sub>

<br />

<a href="https://kiskander.github.io/ciscolive-jeopardy/game.html">
  <img src="https://img.shields.io/badge/%F0%9F%8E%AC-START_THE_SHOW-ffd24a?style=for-the-badge&labelColor=02041a" />
</a>

<br /><br />

<sub>⭐ If this helped you run a great session, star the repo</sub>

</div>
