# MU/TH/UR 6000 Cards - Example Configurations

## Security Dashboard Example

```yaml
title: NOSTROMO SECURITY
type: vertical-stack
cards:
  # Header with system name
  - type: custom:muthur-text-card
    title: SYSTEM IDENTIFICATION
    content: |
      USCSS NOSTROMO - DECK A
      SECURITY MONITORING STATION
      WEYLAND-YUTANI CORP
    size: medium
    align: center
    show_prompt: false

  # Main security status
  - type: custom:muthur-status-card
    title: PERIMETER STATUS
    entities:
      - entity: binary_sensor.front_door
        name: MAIN AIRLOCK
      - entity: binary_sensor.back_door
        name: SERVICE ENTRANCE
      - entity: binary_sensor.garage_door
        name: CARGO BAY
      - entity: binary_sensor.motion_entrance
        name: CORRIDOR A
      - entity: binary_sensor.motion_hallway
        name: CORRIDOR B
    message: PERIMETER SECURE - ALL ACCESS POINTS MONITORED

  # Security controls
  - type: custom:muthur-button-card
    title: SECURITY PROTOCOL
    columns: 3
    buttons:
      - entity: alarm_control_panel.home
        name: ARM
        icon: 🛡️
      - entity: script.emergency_lockdown
        name: LOCKDOWN
        icon: 🚨
      - entity: light.exterior_lights
        name: EXTERIOR
        icon: 💡
```

## Climate Monitoring

```yaml
title: ENVIRONMENTAL CONTROL
type: vertical-stack
cards:
  - type: custom:muthur-text-card
    title: LIFE SUPPORT SYSTEMS
    content: ATMOSPHERIC PROCESSING UNIT - ONLINE
    align: center

  # Temperature and humidity sensors
  - type: horizontal-stack
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

  # Additional climate data
  - type: horizontal-stack
    cards:
      - type: custom:muthur-sensor-card
        entity: sensor.pressure
        name: PRESSURE
        show_graph: true
        max: 1050
      
      - type: custom:muthur-sensor-card
        entity: sensor.co2_level
        name: CO2 LEVEL
        show_graph: true
        max: 2000

  # Climate controls
  - type: custom:muthur-button-card
    title: ENVIRONMENTAL CONTROLS
    columns: 2
    buttons:
      - entity: climate.living_room
        name: HVAC SYSTEM
        action: toggle
      - entity: fan.ceiling_fan
        name: CIRCULATION
        action: toggle
```

## Power Management

```yaml
title: POWER SYSTEMS
type: vertical-stack
cards:
  # System header
  - type: custom:muthur-text-card
    title: REACTOR STATUS
    content: FUSION REACTOR - NOMINAL OUTPUT
    align: center
    show_prompt: false

  # Power monitoring
  - type: custom:muthur-status-card
    title: POWER DISTRIBUTION
    entities:
      - entity: sensor.power_consumption
        name: CURRENT DRAW
      - entity: sensor.voltage
        name: MAIN BUS VOLTAGE
      - entity: sensor.battery_level
        name: BACKUP CAPACITY
      - entity: binary_sensor.grid_status
        name: GRID CONNECTION
    message: POWER SYSTEMS NOMINAL

  # Individual circuit monitoring
  - type: horizontal-stack
    cards:
      - type: custom:muthur-sensor-card
        entity: sensor.living_room_power
        name: HABITAT
        unit: W
        show_graph: true
        max: 1000
      
      - type: custom:muthur-sensor-card
        entity: sensor.kitchen_power
        name: GALLEY
        unit: W
        show_graph: true
        max: 2000

  # Power controls
  - type: custom:muthur-button-card
    title: POWER MANAGEMENT
    columns: 3
    buttons:
      - entity: switch.main_breaker
        name: MAIN
      - entity: switch.backup_generator
        name: BACKUP
      - entity: script.power_save_mode
        name: CONSERVE
```

## Communication Station

```yaml
title: COMMUNICATIONS
type: vertical-stack
cards:
  - type: custom:muthur-text-card
    title: COMMS ARRAY
    content: |
      DEEP SPACE RELAY - ACTIVE
      SIGNAL STRENGTH: NOMINAL
      READY TO RECEIVE
    typing_effect: true

  # Network status
  - type: custom:muthur-status-card
    title: NETWORK STATUS
    entities:
      - entity: binary_sensor.internet_connection
        name: RELAY LINK
      - entity: sensor.wan_ip
        name: EXTERNAL ADDR
      - entity: sensor.router_status
        name: ROUTER STATUS
      - entity: sensor.bandwidth_usage
        name: BANDWIDTH
    message: COMMUNICATIONS ARRAY OPERATIONAL

  # Device connectivity
  - type: custom:muthur-status-card
    title: CONNECTED DEVICES
    entities:
      - entity: device_tracker.phone_1
        name: CREW MEMBER 1
      - entity: device_tracker.phone_2
        name: CREW MEMBER 2
      - entity: device_tracker.tablet
        name: DATAPAD
      - entity: device_tracker.laptop
        name: TERMINAL
    message: TRACKING 4 ACTIVE DEVICES
```

## Medical Bay

```yaml
title: MEDICAL STATION
type: vertical-stack
cards:
  - type: custom:muthur-text-card
    title: MEDICAL MONITORING
    content: |
      MEDLAB SYSTEMS ONLINE
      DIAGNOSTIC SUITE READY
      HYPERSLEEP CHAMBERS: STANDBY
    align: center

  # Health metrics (using example sensors)
  - type: horizontal-stack
    cards:
      - type: custom:muthur-sensor-card
        entity: sensor.health_metric_1
        name: VITAL SIGN A
        show_graph: true
        max: 200
      
      - type: custom:muthur-sensor-card
        entity: sensor.health_metric_2
        name: VITAL SIGN B
        show_graph: true
        max: 100

  # Medical controls
  - type: custom:muthur-button-card
    title: MEDICAL CONTROLS
    columns: 2
    buttons:
      - service: script.medication_reminder
        name: MED ALERT
        icon: 💊
      - service: script.emergency_medical
        name: EMERGENCY
        icon: 🚑
```

## Complete Bridge View

```yaml
title: USCSS NOSTROMO - MAIN BRIDGE
type: vertical-stack
cards:
  # Main system identification
  - type: custom:muthur-text-card
    title: MU/TH/UR 6000 MAINFRAME
    content: |
      UNITED STATES COMMERCIAL STARSHIP NOSTROMO
      REGISTRATION: 180924609
      WEYLAND-YUTANI CORPORATION
      
      "BUILDING BETTER WORLDS"
    align: center
    size: large
    show_prompt: false

  # Critical systems grid
  - type: horizontal-stack
    cards:
      - type: custom:muthur-sensor-card
        entity: sensor.system_uptime
        name: UPTIME
      
      - type: custom:muthur-sensor-card
        entity: sensor.cpu_usage
        name: CPU LOAD
        show_graph: true
        max: 100
      
      - type: custom:muthur-sensor-card
        entity: sensor.memory_usage
        name: MEMORY
        show_graph: true
        max: 100

  # All systems status
  - type: custom:muthur-status-card
    title: SYSTEMS DIAGNOSTIC
    entities:
      - entity: binary_sensor.power_status
        name: POWER PLANT
      - entity: binary_sensor.life_support
        name: LIFE SUPPORT
      - entity: binary_sensor.nav_computer
        name: NAVIGATION
      - entity: binary_sensor.comms_array
        name: COMMUNICATIONS
      - entity: binary_sensor.defense_grid
        name: DEFENSE GRID
      - entity: binary_sensor.cargo_systems
        name: CARGO SYSTEMS
    message: ALL SHIP SYSTEMS OPERATIONAL - CREW CLEARANCE ALPHA

  # Quick access controls
  - type: custom:muthur-button-card
    title: COMMAND FUNCTIONS
    columns: 3
    buttons:
      - service: script.ship_status_report
        name: STATUS
        icon: 📊
      - service: script.system_diagnostic
        name: DIAGNOSE
        icon: 🔍
      - service: script.crew_alert
        name: ALERT
        icon: 📢
      - service: script.emergency_protocol
        name: EMERGENCY
        icon: 🚨
      - service: script.lockdown
        name: LOCKDOWN
        icon: 🔒
      - service: script.all_lights_on
        name: ILLUMINATE
        icon: 💡
```

## Minimal Example

```yaml
# Simple status card
type: custom:muthur-status-card
title: QUICK STATUS
entities:
  - light.living_room
  - switch.coffee_maker
  - binary_sensor.front_door
message: SYSTEMS READY
```

## Tips for Best Results

1. **Use ALL CAPS** for titles and messages for authentic terminal feel
2. **Keep entity names short** and technical (e.g., "MAIN AIRLOCK" instead of "Front Door")
3. **Use technical terminology** where appropriate (HVAC, REACTOR, ARRAY, etc.)
4. **Group related cards** using vertical-stack or horizontal-stack
5. **Combine with Weyland-Yutani theme** for complete immersion
6. **Use monospace fonts** in your Home Assistant theme for consistency
7. **Keep backgrounds dark** - the green-on-black aesthetic is essential

## Customization Ideas

- Create custom scripts with names like "SECURITY_PROTOCOL_7" or "EMERGENCY_SHUTDOWN"
- Use binary_sensor templates to create fictional ship systems
- Add automation announcements using the text card
- Create "status reports" that update with current time and system info
- Use the typing_effect for dramatic message displays
