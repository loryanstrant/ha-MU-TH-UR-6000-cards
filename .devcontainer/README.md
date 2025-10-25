# MU/TH/UR 6000 Cards - Development Configuration

This devcontainer configuration sets up a Home Assistant development environment for testing the MU/TH/UR 6000 cards.

## Quick Start

1. Open this repository in VS Code
2. Install the "Dev Containers" extension
3. Click "Reopen in Container" when prompted
4. Wait for the container to build (first time only)
5. Home Assistant will be available at http://localhost:8123

## Testing the Cards

The cards are automatically mounted to the Home Assistant `www` directory. After starting the container:

1. Go to http://localhost:8123
2. Complete the Home Assistant onboarding
3. Go to Settings → Dashboards → Resources
4. Add a new resource:
   - URL: `/local/mu-th-ur-6000-cards/mu-th-ur-6000-cards.js`
   - Type: JavaScript Module

Or add to your `configuration.yaml`:

```yaml
lovelace:
  mode: yaml
  resources:
    - url: /local/mu-th-ur-6000-cards/mu-th-ur-6000-cards.js
      type: module
```

## Example Dashboard

Create a test dashboard with all card types:

```yaml
title: MU/TH/UR 6000 Test
views:
  - title: MAIN TERMINAL
    cards:
      # Status Card
      - type: custom:muthur-status-card
        title: SYSTEM STATUS
        entities:
          - entity: sun.sun
            name: SOLAR STATUS
          - entity: binary_sensor.updater
            name: SYSTEM UPDATE
        message: ALL SYSTEMS OPERATIONAL

      # Sensor Card
      - type: custom:muthur-sensor-card
        entity: sun.sun
        name: SUN ELEVATION
        show_graph: true
        max: 90

      # Button Card
      - type: custom:muthur-button-card
        title: TERMINAL CONTROL
        columns: 2
        buttons:
          - entity: sun.sun
            name: SUN STATUS
          - service: homeassistant.restart
            name: RESTART

      # Text Card
      - type: custom:muthur-text-card
        title: SYSTEM MESSAGE
        content: |
          WEYLAND-YUTANI CORPORATION
          MU/TH/UR 6000 MAINFRAME
          
          BUILDING BETTER WORLDS
        show_prompt: false
```

## Rebuilding

If you make changes to the source files:

1. Exit the devcontainer (or open a terminal outside)
2. Run `npm run build` in the repository root
3. Refresh Home Assistant (clear cache: Ctrl+Shift+R)

## Font Testing

The Thedus fonts are also mounted at `/local/mu-th-ur-6000-cards-fonts/`. To test with the custom font, add to your theme:

```yaml
themes:
  muthur_test:
    muthur-font-family: "'Thedus', 'Courier New', monospace"
```

## Troubleshooting

- **Cards not loading**: Check the browser console for errors (F12)
- **"Custom element doesn't exist"**: Ensure the resource is properly loaded
- **Changes not appearing**: Clear browser cache (Ctrl+Shift+R)
- **Port conflict**: Change the port mapping in `devcontainer.json`

## Notes

- The devcontainer uses the official Home Assistant development image
- All changes to card files require a rebuild (`npm run build`)
- The development environment is separate from your production Home Assistant
- See https://developers.home-assistant.io/docs/setup_devcontainer_environment/ for more details
