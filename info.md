# MU/TH/UR 6000 Cards

![MU/TH/UR 6000 Logo](https://img.shields.io/badge/MU%2FTH%2FUR-6000-00ff41?style=flat-square)

Transform your Home Assistant dashboard into a retro terminal interface inspired by the MU/TH/UR 6000 mainframe computer from the Alien movie franchise.

## Features

🖥️ **Authentic Terminal Aesthetic** - Green monochrome display with CRT scanline effects  
📊 **Multiple Card Types** - Status, Sensor, Button, and Text cards  
⌨️ **Retro Typography** - Classic monospace terminal font styling  
🏢 **Weyland-Yutani Theme** - Compatible with the ha-weylandyutani theme  
⚙️ **Customizable** - Extensive configuration options  
⚡ **Lightweight** - Built with Lit for optimal performance

## Available Cards

### Status Card
Display multiple entity states with status indicators and system messages.

### Sensor Card  
Show individual sensor values with optional progress bars.

### Button Card
Control entities with terminal-style interactive buttons.

### Text Card
Display custom messages in classic terminal format.

## Quick Start

After installation, add a card to your dashboard:

```yaml
type: custom:muthur-status-card
title: SYSTEM STATUS
entities:
  - sensor.temperature
  - binary_sensor.motion
message: ALL SYSTEMS OPERATIONAL
```

## Documentation

Full documentation and examples available in the [README](https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards).

---

*"Building Better Worlds" - Weyland-Yutani Corporation*
