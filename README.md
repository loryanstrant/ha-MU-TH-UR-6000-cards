# MU/TH/UR 6000 Cards for Home Assistant

A series of custom cards for Home Assistant based on the appearance of the MU/TH/UR 6000 mainframe computer from the Alien movie franchise. These cards feature a retro green monochrome terminal aesthetic with scanline effects, terminal-style text, and the iconic Weyland-Yutani Corporation design language.

![MU/TH/UR 6000](https://img.shields.io/badge/MU%2FTH%2FUR-6000-00ff41?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Compatible-41BDF5?style=for-the-badge&logo=home-assistant)
![License](https://img.shields.io/badge/License-MIT-00ff41?style=for-the-badge)

## Features

- **Authentic Terminal Aesthetic**: Green monochrome display with CRT scanline effects
- **Multiple Card Types**: Status, Sensor, Button, and Text cards
- **Retro Typography**: Classic monospace terminal font styling
- **Weyland-Yutani Theme**: Compatible with the ha-weylandyutani theme
- **Customizable**: Extensive configuration options for each card type
- **Lightweight**: Built with Lit for optimal performance

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to "Frontend" section
3. Click the menu icon in the top right
4. Select "Custom repositories"
5. Add this repository URL: `https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards`
6. Select category: "Lovelace"
7. Click "Add"
8. Find "MU/TH/UR 6000 Cards" in the list and click "Install"
9. Restart Home Assistant

### Manual Installation

1. Download the `mu-th-ur-6000-cards.js` file from the latest release
2. Copy it to your `config/www` directory
3. Add the following to your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/mu-th-ur-6000-cards.js
      type: module
```

4. Restart Home Assistant

## Card Types

### 1. Status Card

Displays multiple entity states in a structured list format with status indicators.

#### Configuration

```yaml
type: custom:muthur-status-card
title: SYSTEM STATUS
entities:
  - entity: binary_sensor.front_door
    name: MAIN ENTRANCE
  - entity: sensor.temperature_living_room
    name: AMBIENT TEMP
  - entity: sensor.humidity_living_room
    name: HUMIDITY LEVEL
  - entity: binary_sensor.motion_hallway
    name: MOTION DETECT
message: ALL SYSTEMS OPERATIONAL
show_message: true
```

#### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `SYSTEM STATUS` | Card header text |
| `entities` | list | **required** | List of entities to display |
| `message` | string | `ALL SYSTEMS OPERATIONAL` | System status message |
| `show_message` | boolean | `true` | Show/hide the status message |

### 2. Sensor Card

Displays a single sensor value with optional progress bar visualization.

#### Configuration

```yaml
type: custom:muthur-sensor-card
entity: sensor.cpu_temperature
name: CORE TEMPERATURE
unit: "°C"
show_graph: true
max: 100
```

#### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entity` | string | **required** | Entity ID to display |
| `name` | string | entity name | Custom display name |
| `unit` | string | entity unit | Custom unit of measurement |
| `show_graph` | boolean | `true` | Show/hide progress bar |
| `max` | number | `100` | Maximum value for progress bar |

### 3. Button Card

Interactive buttons for controlling entities or triggering services.

#### Configuration

```yaml
type: custom:muthur-button-card
title: TERMINAL CONTROL
columns: 2
buttons:
  - entity: light.living_room
    name: ILLUMINATION
    icon: 💡
    action: toggle
    show_state: true
  - entity: switch.coffee_maker
    name: BEVERAGE SYS
    action: toggle
  - service: script.security_protocol
    name: SECURITY
    icon: 🔒
```

#### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `TERMINAL CONTROL` | Card header text |
| `columns` | number | `1` | Number of columns (1-3) |
| `buttons` | list | **required** | List of button configurations |

Button configuration:
- `entity`: Entity to control
- `name`: Button label
- `icon`: Optional icon/emoji
- `action`: Action to perform (toggle, turn_on, turn_off)
- `show_state`: Display entity state
- `service`: Alternative service call (instead of entity)
- `service_data`: Data for service call

### 4. Text Card

Displays text messages in terminal format.

#### Configuration

```yaml
type: custom:muthur-text-card
title: SYSTEM NOTICE
content: |
  ATTENTION: CREW MEMBERS
  
  TRANSMISSION RECEIVED FROM CORPORATE
  ALL PERSONNEL REPORT TO BRIDGE
  
  - WEYLAND-YUTANI CORP
size: medium
align: left
show_prompt: true
typing_effect: false
```

#### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `MESSAGE` | Card header text |
| `content` | string | **required** | Text content to display |
| `size` | string | `medium` | Text size (small, medium, large) |
| `align` | string | `left` | Text alignment (left, center, right) |
| `show_prompt` | boolean | `true` | Show terminal prompt (>) |
| `typing_effect` | boolean | `false` | Animated typing effect |

## Styling

All cards use CSS custom properties for easy theming:

```css
--muthur-primary-color: #00ff41;        /* Main green color */
--muthur-secondary-color: #008f11;      /* Darker green */
--muthur-background-color: #000000;     /* Background */
--muthur-border-color: #00ff41;         /* Border color */
--muthur-text-color: #00ff41;           /* Text color */
--muthur-glow-color: rgba(0, 255, 65, 0.5);  /* Glow effect */
--muthur-font-family: 'Courier New', 'Monaco', monospace;
--muthur-scanline-opacity: 0.1;         /* CRT scanline effect */
```

You can override these in your theme configuration.

## Examples

### Security Dashboard

```yaml
type: vertical-stack
cards:
  - type: custom:muthur-text-card
    title: SECURITY SYSTEM
    content: WEYLAND-YUTANI SECURITY PROTOCOL ACTIVE
    size: large
    align: center
    
  - type: custom:muthur-status-card
    title: PERIMETER STATUS
    entities:
      - binary_sensor.front_door
      - binary_sensor.back_door
      - binary_sensor.garage_door
      - binary_sensor.motion_entrance
    message: PERIMETER SECURE
    
  - type: custom:muthur-button-card
    title: SECURITY CONTROLS
    columns: 3
    buttons:
      - entity: alarm_control_panel.home
        name: ARM SYSTEM
      - entity: script.panic_mode
        name: ALERT
      - entity: light.exterior_lights
        name: LIGHTS
```

### Climate Control

```yaml
type: horizontal-stack
cards:
  - type: custom:muthur-sensor-card
    entity: sensor.temperature_living_room
    name: AMBIENT TEMP
    show_graph: true
    max: 40
    
  - type: custom:muthur-sensor-card
    entity: sensor.humidity_living_room
    name: HUMIDITY
    show_graph: true
    max: 100
```

## Design Inspiration

These cards are inspired by:
- The MU/TH/UR 6000 mainframe computer from *Alien* (1979)
- The typography and design analysis from [Typeset in the Future](https://typesetinthefuture.com/2014/12/01/alien/)
- Classic CRT terminal aesthetics
- Weyland-Yutani Corporation design language

## Compatibility

- **Home Assistant**: 2023.1.0 or newer
- **Browser**: Any modern browser with ES6 support
- **Theme**: Works standalone or with ha-weylandyutani theme

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Credits

Created by Loryan Strant

Inspired by the Alien franchise © 20th Century Studios

*"Building Better Worlds" - Weyland-Yutani Corporation*

---

**Special Operations Division Clearance Required**
