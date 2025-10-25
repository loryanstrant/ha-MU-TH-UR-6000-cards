# Visual Preview Guide

## Card Appearance

All MU/TH/UR 6000 cards feature:
- **Green monochrome display** (#00ff41 on #000000)
- **CRT scanline effects** for authentic retro feel
- **Glowing text** with shadow effects
- **Terminal-style borders** with subtle glow
- **Monospace fonts** (Courier New, Monaco)
- **Terminal prompts** (>) for headers
- **Blinking cursor** effects
- **Status indicators** with color-coded dots

## Status Card Example

```
┌────────────────────────────────────┐
│ > SYSTEM STATUS                    │
├────────────────────────────────────┤
│                                    │
│ ● MAIN ENTRANCE      │ open        │
│ ● AMBIENT TEMP       │ 22.5 °C     │
│ ● HUMIDITY LEVEL     │ 45 %        │
│ ● MOTION DETECT      │ off         │
│                                    │
│ ┌──────────────────────────────┐  │
│ │ MU/TH/UR 6000 :: STATUS MSG  │  │
│ │ ALL SYSTEMS OPERATIONAL█     │  │
│ └──────────────────────────────┘  │
│                                    │
└────────────────────────────────────┘
```

## Sensor Card Example

```
┌────────────────────────────────────┐
│ > SENSOR DATA                      │
├────────────────────────────────────┤
│                                    │
│          CORE TEMPERATURE          │
│                                    │
│              72.5 °C               │
│                                    │
│        STATE: MEASUREMENT          │
│                                    │
│ ──────────────────────────────     │
│ LEVEL: ████████████░░░░░░░ 72%     │
│                                    │
└────────────────────────────────────┘
```

## Button Card Example

```
┌────────────────────────────────────┐
│ > TERMINAL CONTROL                 │
├────────────────────────────────────┤
│                                    │
│ ┌──────────────┐ ┌──────────────┐ │
│ │ 💡 ILLUMINATION│ │ ☕ BEVERAGE │ │
│ │    ON         │ │    OFF       │ │
│ └──────────────┘ └──────────────┘ │
│                                    │
│ ┌──────────────────────────────┐  │
│ │      🔒 SECURITY              │  │
│ │         ARMED                 │  │
│ └──────────────────────────────┘  │
│                                    │
└────────────────────────────────────┘
```

## Text Card Example

```
┌────────────────────────────────────┐
│ > MESSAGE                          │
├────────────────────────────────────┤
│                                    │
│ > ATTENTION: CREW MEMBERS          │
│                                    │
│ > TRANSMISSION RECEIVED FROM       │
│   CORPORATE                        │
│                                    │
│ > ALL PERSONNEL REPORT TO BRIDGE   │
│                                    │
│ > - WEYLAND-YUTANI CORP            │
│                                    │
└────────────────────────────────────┘
```

## Color Scheme

### Primary Colors
- **Primary Green**: #00ff41 (Main text and borders)
- **Secondary Green**: #008f11 (Dimmed elements)
- **Background**: #000000 (Solid black)
- **Glow Effect**: rgba(0, 255, 65, 0.5)

### Status Indicators
- **Green Dot** (●): OK/On/Active
- **Yellow Dot** (●): Warning/Off/Inactive
- **Red Dot** (●): Error/Unavailable

## Effects

1. **Scanlines**: Horizontal lines overlay (every 4px)
2. **Text Glow**: 5px blur shadow in green
3. **Border Glow**: Box shadow with green glow
4. **Hover Effects**: Increased glow on interactive elements
5. **Cursor Blink**: 1s interval for blinking cursor (█)

## Typography

- **Font Family**: 'Courier New', 'Monaco', monospace
- **Letter Spacing**: 1-2px for uppercase text
- **Text Transform**: UPPERCASE for headers and labels
- **Line Height**: 1.6 for readability

## Integration with Weyland-Yutani Theme

These cards are designed to complement the ha-weylandyutani theme. When used together:
- Background colors match seamlessly
- Typography is consistent
- Color scheme is unified
- Overall aesthetic is cohesive

For best results, use both the cards and the theme together to create a complete Alien universe experience in Home Assistant.

## Customization Tips

1. Adjust `--muthur-scanline-opacity` to make scanlines more/less visible
2. Change `--muthur-primary-color` to use different terminal colors (amber, blue, etc.)
3. Modify font-family to use custom retro computer fonts
4. Adjust glow effects for different intensities

## Accessibility Note

While the retro aesthetic prioritizes authentic appearance, consider:
- High contrast mode available by increasing opacity
- Text is readable at standard sizes
- Interactive elements have clear hover states
- Color is not the only indicator (text labels included)
