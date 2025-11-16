import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurGaugeCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .gauge-container {
          text-align: center;
          padding: 24px 16px;
        }

        .gauge-svg {
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }

        .gauge-background {
          fill: none;
          stroke: rgba(0, 255, 65, 0.1);
          stroke-width: 12;
        }

        .gauge-fill {
          fill: none;
          stroke: var(--muthur-primary-color);
          stroke-width: 12;
          stroke-linecap: round;
          transition: stroke-dasharray 0.5s ease;
          filter: drop-shadow(0 0 5px var(--muthur-glow-color));
        }

        .gauge-value {
          font-size: 2em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          fill: var(--muthur-text-color);
          text-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .gauge-unit {
          font-size: 0.5em;
          opacity: 0.8;
        }

        .gauge-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 16px;
        }

        .gauge-range {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          padding: 0 20px;
          font-size: 0.85em;
          opacity: 0.7;
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entityId = this.config.entity;
    const entity = this.hass.states[entityId];

    if (!entity) {
      return html`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="gauge-container">
              Entity ${entityId} not found
            </div>
          </div>
        </div>
      `;
    }

    const state = parseFloat(entity.state);
    const name = this.config.name || entity.attributes.friendly_name || entityId;
    const unit = this.config.unit || entity.attributes.unit_of_measurement || '';
    const min = this.config.min !== undefined ? this.config.min : 0;
    const max = this.config.max !== undefined ? this.config.max : 100;
    const title = this.config.title || 'GAUGE MONITOR';
    
    // Calculate gauge percentage
    const percentage = ((state - min) / (max - min)) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    // SVG circle calculations
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (clampedPercentage / 100) * circumference;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="gauge-container">
            <svg class="gauge-svg" viewBox="0 0 200 200">
              <circle
                class="gauge-background"
                cx="100"
                cy="100"
                r="${radius}"
              />
              <circle
                class="gauge-fill"
                cx="100"
                cy="100"
                r="${radius}"
                transform="rotate(-90 100 100)"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"
              />
              <text
                class="gauge-value"
                x="100"
                y="95"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                ${state.toFixed(1)}
              </text>
              <text
                class="gauge-value gauge-unit"
                x="100"
                y="115"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                ${unit}
              </text>
            </svg>
            
            <div class="gauge-name">${name}</div>
            
            <div class="gauge-range">
              <span>MIN: ${min}</span>
              <span>MAX: ${max}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return undefined;
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      title: 'GAUGE MONITOR',
      unit: '',
      min: 0,
      max: 100
    };
  }
}

customElements.define('muthur-gauge-card', MuthurGaugeCard);
