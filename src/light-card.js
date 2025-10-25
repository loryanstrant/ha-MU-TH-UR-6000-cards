import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurLightCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .light-container {
          padding: 8px 0;
        }

        .light-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .light-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          flex: 1;
        }

        .light-toggle {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 12px 24px;
          font-family: var(--muthur-font-family);
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .light-toggle:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 15px var(--muthur-glow-color);
        }

        .light-toggle.on {
          background: rgba(0, 255, 65, 0.3);
          box-shadow: 0 0 15px var(--muthur-glow-color);
        }

        .light-state {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0;
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
        }

        .light-icon {
          font-size: 2em;
        }

        .light-status {
          flex: 1;
        }

        .light-status-label {
          font-size: 0.75em;
          opacity: 0.7;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .light-status-value {
          font-size: 1.2em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .brightness-control {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .brightness-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .brightness-value {
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .brightness-slider {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          appearance: none;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--muthur-secondary-color);
          outline: none;
          cursor: pointer;
        }

        .brightness-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--muthur-primary-color);
          border: 2px solid var(--muthur-border-color);
          cursor: pointer;
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .brightness-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--muthur-primary-color);
          border: 2px solid var(--muthur-border-color);
          cursor: pointer;
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .brightness-bar {
          position: relative;
          height: 8px;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--muthur-secondary-color);
          margin-top: 8px;
          overflow: hidden;
        }

        .brightness-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--muthur-primary-color),
            var(--muthur-secondary-color)
          );
          box-shadow: 0 0 10px var(--muthur-glow-color);
          transition: width 0.3s ease;
        }

        .color-temp-control {
          margin-top: 16px;
        }

        .unavailable {
          opacity: 0.5;
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
            <div class="light-container">
              Entity ${entityId} not found
            </div>
          </div>
        </div>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || entityId;
    const isOn = entity.state === 'on';
    const isUnavailable = entity.state === 'unavailable';
    const brightness = entity.attributes.brightness;
    const supportsBrightness = entity.attributes.supported_color_modes?.includes('brightness') || brightness !== undefined;
    const brightnessPercent = brightness ? Math.round((brightness / 255) * 100) : 0;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">ILLUMINATION CONTROL</div>
          
          <div class="light-container ${isUnavailable ? 'unavailable' : ''}">
            <div class="light-header">
              <div class="light-name">${name}</div>
              <button 
                class="light-toggle ${isOn ? 'on' : ''}"
                @click=${() => this._toggle()}
                ?disabled=${isUnavailable}
              >
                ${isOn ? 'ON' : 'OFF'}
              </button>
            </div>

            <div class="light-state">
              <div class="light-icon">${isOn ? '💡' : '⚫'}</div>
              <div class="light-status">
                <div class="light-status-label">STATUS</div>
                <div class="light-status-value">
                  ${isUnavailable ? 'UNAVAILABLE' : (isOn ? 'ACTIVE' : 'INACTIVE')}
                </div>
              </div>
            </div>

            ${supportsBrightness && isOn ? html`
              <div class="brightness-control">
                <div class="brightness-label">
                  <span>BRIGHTNESS</span>
                  <span class="brightness-value">${brightnessPercent}%</span>
                </div>
                <input
                  type="range"
                  class="brightness-slider"
                  min="0"
                  max="100"
                  .value=${String(brightnessPercent)}
                  @input=${(e) => this._setBrightness(e.target.value)}
                  @change=${(e) => this._setBrightness(e.target.value)}
                />
                <div class="brightness-bar">
                  <div class="brightness-fill" style="width: ${brightnessPercent}%"></div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _toggle() {
    const entityId = this.config.entity;
    const entity = this.hass.states[entityId];
    const service = entity.state === 'on' ? 'turn_off' : 'turn_on';
    
    this.hass.callService('light', service, {
      entity_id: entityId
    });
  }

  _setBrightness(value) {
    const brightness = Math.round((value / 100) * 255);
    
    this.hass.callService('light', 'turn_on', {
      entity_id: this.config.entity,
      brightness: brightness
    });
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return document.createElement('muthur-light-card-editor');
  }

  static getStubConfig() {
    return {
      entity: '',
      name: ''
    };
  }
}

customElements.define('muthur-light-card', MuthurLightCard);
