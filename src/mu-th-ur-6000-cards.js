// MU/TH/UR 6000 Cards for Home Assistant
// Inspired by the Alien movie franchise computers

import './status-card.js';
import './sensor-card.js';
import './button-card.js';
import './text-card.js';
import './gauge-card.js';
import './clock-card.js';
import './glance-card.js';
import './light-card.js';
import './picture-card.js';
import './weather-card.js';
import './alarm-card.js';

// Register cards with Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'muthur-status-card',
  name: 'MU/TH/UR 6000 Status Card',
  description: 'Display system status in classic MU/TH/UR 6000 terminal style',
  preview: true,
});
window.customCards.push({
  type: 'muthur-sensor-card',
  name: 'MU/TH/UR 6000 Sensor Card',
  description: 'Display sensor data with retro terminal aesthetics',
  preview: true,
});
window.customCards.push({
  type: 'muthur-button-card',
  name: 'MU/TH/UR 6000 Button Card',
  description: 'Control entities with terminal-style buttons',
  preview: true,
});
window.customCards.push({
  type: 'muthur-text-card',
  name: 'MU/TH/UR 6000 Text Card',
  description: 'Display text messages in terminal format',
  preview: true,
});
window.customCards.push({
  type: 'muthur-gauge-card',
  name: 'MU/TH/UR 6000 Gauge Card',
  description: 'Display gauge visualization for numeric sensors',
  preview: true,
});
window.customCards.push({
  type: 'muthur-clock-card',
  name: 'MU/TH/UR 6000 Clock Card',
  description: 'Display current time in terminal format',
  preview: true,
});
window.customCards.push({
  type: 'muthur-glance-card',
  name: 'MU/TH/UR 6000 Glance Card',
  description: 'Compact multi-entity overview in terminal style',
  preview: true,
});
window.customCards.push({
  type: 'muthur-light-card',
  name: 'MU/TH/UR 6000 Light Card',
  description: 'Control lights with terminal-style interface',
  preview: true,
});
window.customCards.push({
  type: 'muthur-picture-card',
  name: 'MU/TH/UR 6000 Picture Card',
  description: 'Display images and camera feeds in terminal style',
  preview: true,
});
window.customCards.push({
  type: 'muthur-weather-card',
  name: 'MU/TH/UR 6000 Weather Card',
  description: 'Display weather information in terminal format',
  preview: true,
});
window.customCards.push({
  type: 'muthur-alarm-card',
  name: 'MU/TH/UR 6000 Alarm Card',
  description: 'Control alarm systems with terminal-style keypad',
  preview: true,
});

console.info(
  '%c MU/TH/UR 6000 CARDS %c v1.0.0 ',
  'color: #00ff41; background: #000; font-weight: bold;',
  'color: #000; background: #00ff41; font-weight: bold;'
);
console.info('Weyland-Yutani Corporation - Building Better Worlds');
