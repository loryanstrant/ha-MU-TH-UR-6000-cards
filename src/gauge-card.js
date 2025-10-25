import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurGaugeCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .gauge-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
        }

        .gauge-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          text-align: center;
        }

        .gauge-display {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 16px 0;
        }

        .gauge-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .gauge-bg {
          fill: none;
          stroke: rgba(0, 255, 65, 0.1);
          stroke-width: 20;
        }

        .gauge-fill {
          fill: none;
          stroke: var(--muthur-primary-color);
          stroke-width: 20;
          stroke-linecap: round;
          transition: stroke-dasharray 0.5s ease;
          filter: drop-shadow(0 0 5px var(--muthur-glow-color));
        }

        .gauge-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.5em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .gauge-unit {
          font-size: 0.4em;
          margin-left: 4px;
          opacity: 0.8;
        }

        .gauge-info {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .gauge-stat {
          text-align: center;
          font-size: 0.85em;
        }

        .gauge-stat-label {
          opacity: 0.7;
          margin-bottom: 4px;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .gauge-stat-value {
          font-weight: bold;
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
    const min = this.config.min || 0;
    const max = this.config.max || 100;
    const severity = this.config.severity || {};

    // Calculate percentage for gauge
    const percentage = isNaN(state) ? 0 : Math.min(100, Math.max(0, ((state - min) / (max - min)) * 100));
    
    // Determine color based on severity thresholds
    let strokeColor = 'var(--muthur-primary-color)';
    if (severity.red !== undefined && state >= severity.red) {
      strokeColor = '#ff0000';
    } else if (severity.yellow !== undefined && state >= severity.yellow) {
      strokeColor = '#ffff00';
    }

    // SVG circle parameters
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">GAUGE MONITOR</div>
          
          <div class="gauge-container">
            <div class="gauge-name">${name}</div>
            
            <div class="gauge-display">
              <svg class="gauge-svg" viewBox="0 0 200 200">
                <circle
                  class="gauge-bg"
                  cx="100"
                  cy="100"
                  r="${radius}"
                />
                <circle
                  class="gauge-fill"
                  cx="100"
                  cy="100"
                  r="${radius}"
                  style="stroke: ${strokeColor}; stroke-dasharray: ${strokeDasharray};"
                />
              </svg>
              <div class="gauge-value">
                ${isNaN(state) ? 'N/A' : state.toFixed(this.config.decimals || 1)}
                <span class="gauge-unit">${unit}</span>
              </div>
            </div>

            <div class="gauge-info">
              <div class="gauge-stat">
                <div class="gauge-stat-label">MIN</div>
                <div class="gauge-stat-value">${min} ${unit}</div>
              </div>
              <div class="gauge-stat">
                <div class="gauge-stat-label">MAX</div>
                <div class="gauge-stat-value">${max} ${unit}</div>
              </div>
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
    return document.createElement('muthur-gauge-card-editor');
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      unit: '',
      min: 0,
      max: 100,
      decimals: 1,
      severity: {}
    };
  }
}

customElements.define('muthur-gauge-card', MuthurGaugeCard);
