import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurGlanceCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .glance-container {
          padding: 8px 0;
        }

        .glance-grid {
          display: grid;
          gap: 12px;
        }

        .glance-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .glance-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .glance-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .glance-item {
          padding: 16px 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .glance-item:hover {
          background-color: rgba(0, 255, 65, 0.1);
          box-shadow: 0 0 10px var(--muthur-glow-color);
          border-color: var(--muthur-primary-color);
        }

        .glance-icon {
          font-size: 2em;
          margin-bottom: 8px;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .glance-name {
          font-size: 0.75em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .glance-state {
          font-size: 1.1em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .glance-unit {
          font-size: 0.8em;
          opacity: 0.7;
          margin-left: 4px;
        }

        .glance-unavailable {
          opacity: 0.5;
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'SYSTEM OVERVIEW';
    const entities = this.config.entities || [];
    const columns = this.config.columns || 3;
    const gridClass = `glance-grid-${Math.min(Math.max(columns, 2), 4)}`;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="glance-container">
            <div class="glance-grid ${gridClass}">
              ${entities.map(entityConf => this._renderEntity(entityConf))}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderEntity(entityConf) {
    const entityId = typeof entityConf === 'string' ? entityConf : entityConf.entity;
    const entity = this.hass.states[entityId];
    
    if (!entity) {
      return html`
        <div class="glance-item glance-unavailable">
          <div class="glance-name">${entityId}</div>
          <div class="glance-state">UNAVAILABLE</div>
        </div>
      `;
    }

    const name = (typeof entityConf === 'object' && entityConf.name) || 
                 entity.attributes.friendly_name || 
                 entityId;
    const icon = (typeof entityConf === 'object' && entityConf.icon) || 
                 entity.attributes.icon || 
                 '⚙';
    const state = entity.state;
    const unit = entity.attributes.unit_of_measurement || '';
    const isUnavailable = state === 'unavailable' || state === 'unknown';

    return html`
      <div 
        class="glance-item ${isUnavailable ? 'glance-unavailable' : ''}"
        @click=${() => this._handleClick(entityId)}
      >
        <div class="glance-icon">${icon}</div>
        <div class="glance-name">${name}</div>
        <div class="glance-state">
          ${state.toUpperCase()}<span class="glance-unit">${unit}</span>
        </div>
      </div>
    `;
  }

  _handleClick(entityId) {
    const event = new Event('hass-more-info', {
      bubbles: true,
      composed: true,
    });
    event.detail = { entityId };
    this.dispatchEvent(event);
  }

  setConfig(config) {
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define entities as an array');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return undefined;
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM OVERVIEW',
      entities: [],
      columns: 3
    };
  }
}

customElements.define('muthur-glance-card', MuthurGlanceCard);
