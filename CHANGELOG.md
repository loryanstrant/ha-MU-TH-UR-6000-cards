# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2025-11-16

### Fixed
- **Alarm Card**: Corrected Home Assistant service names from `alarm_armed_away`/`alarm_armed_home` to `alarm_arm_away`/`alarm_arm_home`
- **Text Card**: Fixed multi-line text display and alignment issues
  - Added explicit `.text-left` class for proper left alignment
  - Added `word-wrap: break-word` to handle long text properly
  - Clarified that typing effect intentionally uses single-line display
- **Picture Card**: Fixed image display logic
  - Properly set error flag when entity has no `entity_picture` attribute
  - Ensured static images (config.image) work correctly
- **Button Card**: Fixed entity friendly name retrieval using optional chaining
- **Config Editor Errors**: Fixed "this._configElement.setConfig is not a function" error on all 11 cards
  - All cards now return `undefined` from `getConfigElement()` instead of creating non-existent editor elements
  - Affects: status, sensor, button, text, gauge, clock, glance, light, picture, weather, and alarm cards

## [1.1.0] - 2025-11-15

### Added
- **Alarm Card**: New dedicated card for alarm_control_panel entities with terminal-style keypad
  - Numeric keypad (0-9, CLR, OK buttons)
  - ARM AWAY/HOME quick action buttons
  - Visual state indicators (green/red/yellow/flashing)
  - Code entry with masked display
  - Error feedback for invalid codes
- **Button Card - tap_action Support**: Advanced interaction capabilities
  - Navigate to Home Assistant views
  - Open external URLs
  - Show more-info dialogs
  - Call any service
  - Full backward compatibility with existing configurations
- **Status Card - Theme Variants**: Color scheme options for different contexts
  - Red theme for warnings/errors
  - Yellow theme for caution states
  - Original green theme (default)
- **Picture Card - Auto-Refresh**: Automatic camera feed updates
  - Configurable refresh interval
  - Automatic cache-busting for camera images
  - Proper lifecycle management
- **Text Card - Dynamic Content**: State-based text display
  - Display different messages based on entity state
  - Template variable replacement ({{state}}, {{friendly_name}}, {{unit}}, {{attribute.name}})
  - Fallback to default content

### Changed
- Updated README with comprehensive documentation for all new features
- Enhanced card registration system to include new alarm card

### Fixed
- Improved error handling in alarm card service calls

## [1.0.0] - 2025-10-25

### Added
- Initial release of MU/TH/UR 6000 Cards
- Status Card for displaying multiple entity states with status indicators
- Sensor Card for single sensor value display with optional progress bar
- Button Card for entity control with terminal-style buttons
- Text Card for displaying messages in terminal format
- Authentic MU/TH/UR 6000 terminal aesthetic with:
  - Green monochrome display (#00ff41 on #000000)
  - CRT scanline effects
  - Glowing text and borders
  - Terminal-style typography
  - Status indicators with color coding
- Base card styling system with CSS custom properties
- Comprehensive documentation and examples
- HACS integration support
- Build system with Rollup and Babel
- ESLint configuration for code quality
- GitHub Actions workflow for automated builds

### Design Influences
- MU/TH/UR 6000 mainframe computer from Alien (1979)
- Typography analysis from "Typeset in the Future"
- Classic CRT terminal aesthetics
- Weyland-Yutani Corporation design language

[1.1.1]: https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards/releases/tag/v1.0.0
