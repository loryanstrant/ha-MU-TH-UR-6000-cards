import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurSensorCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .sensor-display {
          text-align: center;
          padding: 24px 16px;
        }

        .sensor-value {
          font-size: 3em;
          font-weight: bold;
          line-height: 1;
          margin: 16px 0;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .sensor-unit {
          font-size: 0.4em;
          margin-left: 8px;
          opacity: 0.8;
        }

        .sensor-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .sensor-state {
          font-size: 0.85em;
          opacity: 0.7;
          margin-top: 16px;
        }

        .sensor-graph {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .graph-bar {
          display: flex;
          align-items: center;
          margin: 8px 0;
        }

        .graph-label {
          width: 100px;
          font-size: 0.75em;
          text-transform: uppercase;
        }

        .graph-fill {
          flex: 1;
          height: 8px;
          background: linear-gradient(
            90deg,
            var(--muthur-primary-color),
            var(--muthur-secondary-color)
          );
          box-shadow: 0 0 5px var(--muthur-glow-color);
          transition: width 0.3s ease;
        }

        .graph-container {
          flex: 1;
          height: 8px;
          background-color: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--muthur-secondary-color);
          position: relative;
          overflow: hidden;
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
            <div class="sensor-display">
              Entity ${entityId} not found
            </div>
          </div>
        </div>
      `;
    }

    const state = entity.state;
    const name = this.config.name || entity.attributes.friendly_name || entityId;
    const unit = this.config.unit || entity.attributes.unit_of_measurement || '';
    // const icon = this.config.icon || entity.attributes.icon; // Reserved for future use
    const showGraph = this.config.show_graph !== false;
    
    // Calculate percentage for graph (if numeric)
    const numericState = parseFloat(state);
    const max = this.config.max || 100;
    const percentage = !isNaN(numericState) ? Math.min(100, (numericState / max) * 100) : 0;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">SENSOR DATA</div>
          
          <div class="sensor-display">
            <div class="sensor-name">${name}</div>
            <div class="sensor-value">
              ${state}<span class="sensor-unit">${unit}</span>
            </div>
            ${entity.attributes.state_class ? html`
              <div class="sensor-state">
                STATE: ${entity.attributes.state_class.toUpperCase()}
              </div>
            ` : ''}
          </div>

          ${showGraph && !isNaN(numericState) ? html`
            <div class="sensor-graph">
              <div class="graph-bar">
                <div class="graph-label">LEVEL</div>
                <div class="graph-container">
                  <div class="graph-fill" style="width: ${percentage}%"></div>
                </div>
              </div>
            </div>
          ` : ''}
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
    return document.createElement('muthur-sensor-card-editor');
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      unit: '',
      show_graph: true,
      max: 100
    };
  }
}

customElements.define('muthur-sensor-card', MuthurSensorCard);
