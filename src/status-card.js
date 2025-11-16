import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurStatusCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .status-grid {
          display: grid;
          gap: 12px;
        }

        .status-item {
          display: flex;
          align-items: center;
          padding: 8px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
        }

        .status-label {
          flex: 1;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.85em;
          letter-spacing: 1px;
        }

        .status-value {
          font-family: var(--muthur-font-family);
          font-size: 1.1em;
          margin-left: 8px;
        }

        .system-status {
          margin-top: 16px;
          padding: 12px;
          border: 1px solid var(--muthur-secondary-color);
          background-color: rgba(0, 255, 65, 0.03);
        }

        .system-status-header {
          font-size: 0.75em;
          margin-bottom: 8px;
          opacity: 0.8;
        }

        .system-message {
          font-family: var(--muthur-font-family);
          line-height: 1.6;
        }

        /* Red/Warning theme styles */
        .card.theme-red {
          --muthur-primary-color: #ff0000;
          --muthur-secondary-color: #8f0000;
          --muthur-border-color: #ff0000;
          --muthur-text-color: #ff0000;
          --muthur-glow-color: rgba(255, 0, 0, 0.5);
        }

        .card.theme-red .status-item {
          background-color: rgba(255, 0, 0, 0.05);
          border-left-color: #ff0000;
        }

        .card.theme-red .system-status {
          border-color: #8f0000;
          background-color: rgba(255, 0, 0, 0.03);
        }

        /* Yellow/Caution theme styles */
        .card.theme-yellow {
          --muthur-primary-color: #ffff00;
          --muthur-secondary-color: #8f8f00;
          --muthur-border-color: #ffff00;
          --muthur-text-color: #ffff00;
          --muthur-glow-color: rgba(255, 255, 0, 0.5);
        }

        .card.theme-yellow .status-item {
          background-color: rgba(255, 255, 0, 0.05);
          border-left-color: #ffff00;
        }

        .card.theme-yellow .system-status {
          border-color: #8f8f00;
          background-color: rgba(255, 255, 0, 0.03);
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entities = this.config.entities || [];
    const title = this.config.title || 'SYSTEM STATUS';
    const message = this.config.message || 'ALL SYSTEMS OPERATIONAL';
    const theme = this.config.theme || 'green'; // green, red, yellow
    const themeClass = theme !== 'green' ? `theme-${theme}` : '';

    return html`
      <div class="card ${themeClass}">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="status-grid">
            ${entities.map(entityConf => {
    const entityId = typeof entityConf === 'string' ? entityConf : entityConf.entity;
    const entity = this.hass.states[entityId];
    const name = (typeof entityConf === 'object' && entityConf.name) || 
                           (entity ? entity.attributes.friendly_name : entityId);
              
    if (!entity) {
      return html`
                  <div class="status-item">
                    <span class="status-indicator status-error"></span>
                    <span class="status-label">${name}</span>
                    <span class="status-value">UNAVAILABLE</span>
                  </div>
                `;
    }

    const state = entity.state;
    const unit = entity.attributes.unit_of_measurement || '';
              
    // Determine status indicator color
    let statusClass = 'status-ok';
    if (state === 'unavailable' || state === 'unknown') {
      statusClass = 'status-error';
    } else if (state === 'off' || state === 'closed' || parseFloat(state) === 0) {
      statusClass = 'status-warning';
    }

    return html`
                <div class="status-item">
                  <span class="status-indicator ${statusClass}"></span>
                  <span class="status-label">${name}</span>
                  <span class="status-value">${state} ${unit}</span>
                </div>
              `;
  })}
          </div>

          ${this.config.show_message !== false ? html`
            <div class="system-status">
              <div class="system-status-header">MU/TH/UR 6000 :: STATUS MESSAGE</div>
              <div class="system-message">
                ${message}<span class="blinking-cursor">█</span>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  setConfig(config) {
    if (!config.entities) {
      throw new Error('You need to define entities');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return undefined;
  }

  static getStubConfig() {
    return {
      entities: [],
      title: 'SYSTEM STATUS',
      message: 'ALL SYSTEMS OPERATIONAL',
      show_message: true,
      theme: 'green'
    };
  }
}

customElements.define('muthur-status-card', MuthurStatusCard);
