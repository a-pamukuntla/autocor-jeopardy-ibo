# What's The Question? - Changelog

## Overview
Interactive quiz game with real-time team buzzers, configurable teams, and live branding updates via MQTT.

## Features

### Real-Time Buzzer System
- Team members buzz from their phones via MQTT over WebSockets
- First buzz locks all other teams
- Wrong answers allow other teams to steal
- Works on enterprise WiFi (WSS on port 443)

### Smart Scoring
- Quick correct/wrong buttons for fast judging
- Judge before revealing the answer to the audience
- Auto-reset buzzers between questions
- Manual score override controls (+/- per team)

### Private Answer Key
- Separate password-protected display for the host
- Real-time question sync when host clicks a tile
- Large, readable answer text
- Shows which team buzzed

### Dynamic Team Configuration
- Any number of teams (not limited to 5)
- Custom team names, colors, and images
- Auto-generated initial icons when no image is set
- Managed through the setup page with drag-to-reorder

### Live Branding
- Configurable header title and logo
- Changes pushed live via retained MQTT messages
- All connected pages update instantly
- No redeploy needed for config changes

### Final Jeopardy
- Toggle on/off from the setup page
- Custom question and answer fields
- Session JSON can provide defaults (overridable from setup)

### Multi-Deployment Isolation
- MQTT topics namespaced by hostname automatically
- Deploy the same code to multiple GitHub Pages sites with zero interference

---

## Quick Start

### Local Development
```bash
python3 -m http.server 8000
```

### Pages
```
http://localhost:8000/game.html           Game board (projector)
http://localhost:8000/answer-key.html     Host answer display
http://localhost:8000/setup.html          Configure teams & branding
http://localhost:8000/test-buzzers.html   Pre-session MQTT test
http://localhost:8000/buzzer.html?team=<id>  Team buzzer (phone)
```

---

## Files

- `game.html` - Main game board
- `buzzer.html` - Team buzzer page (phone, via QR code)
- `answer-key.html` - Private answer display (password protected)
- `setup.html` - Team and branding configuration
- `test-buzzers.html` - Pre-session testing page
- `config.json` - Default configuration (teams + branding)
- `data/*.json` - Question sets

---

## Technical Details

- **MQTT Broker**: `wss://broker.emqx.io:8084/mqtt` (public)
- **Topics** (per deployment):
  - `jeopardy/<instance-id>/buzz` - Team buzzer presses
  - `jeopardy/<instance-id>/control` - Reset/disable commands
  - `jeopardy/<instance-id>/question` - Question/answer sync
  - `jeopardy/<instance-id>/config` - Live configuration (retained)
- **No backend required** - pure client-side with MQTT
- **Works on enterprise WiFi** - WebSocket Secure on port 443
