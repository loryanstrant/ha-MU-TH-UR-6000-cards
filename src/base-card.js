import { LitElement, css } from 'lit';

// Base card styling inspired by MU/TH/UR 6000 terminal
export const baseStyles = css`
  :host {
    --muthur-primary-color: #00ff41;
    --muthur-secondary-color: #008f11;
    --muthur-background-color: #000000;
    --muthur-border-color: #00ff41;
    --muthur-text-color: #00ff41;
    --muthur-glow-color: rgba(0, 255, 65, 0.5);
    --muthur-font-family: 'Courier New', 'Monaco', monospace;
    --muthur-scanline-opacity: 0.1;
  }

  .card {
    background-color: var(--muthur-background-color);
    color: var(--muthur-text-color);
    border: 2px solid var(--muthur-border-color);
    box-shadow: 
      0 0 10px var(--muthur-glow-color),
      inset 0 0 20px rgba(0, 255, 65, 0.1);
    padding: 16px;
    border-radius: 4px;
    font-family: var(--muthur-font-family);
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 2px,
      rgba(0, 255, 65, var(--muthur-scanline-opacity)) 2px,
      rgba(0, 255, 65, var(--muthur-scanline-opacity)) 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  .card-content {
    position: relative;
    z-index: 2;
    text-shadow: 0 0 5px var(--muthur-glow-color);
  }

  .card-header {
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--muthur-border-color);
    font-weight: bold;
  }

  .card-header::before {
    content: '> ';
    color: var(--muthur-primary-color);
  }

  .blinking-cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  .status-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0 0 5px currentColor;
  }

  .status-ok {
    background-color: var(--muthur-primary-color);
  }

  .status-warning {
    background-color: #ffff00;
  }

  .status-error {
    background-color: #ff0000;
  }

  /* Icon styling to align with green monochrome theme */
  .muthur-icon {
    filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
    display: inline-block;
  }
`;

export class MuthurBaseCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  setConfig(config) {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this.config = config;
  }

  getCardSize() {
    return 3;
  }
}
