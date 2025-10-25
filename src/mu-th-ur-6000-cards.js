// MU/TH/UR 6000 Cards for Home Assistant
// Inspired by the Alien movie franchise computers

import './status-card.js';
import './sensor-card.js';
import './button-card.js';
import './text-card.js';

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

console.info(
  '%c MU/TH/UR 6000 CARDS %c v1.0.0 ',
  'color: #00ff41; background: #000; font-weight: bold;',
  'color: #000; background: #00ff41; font-weight: bold;'
);
console.info('Weyland-Yutani Corporation - Building Better Worlds');
