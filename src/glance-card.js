import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurGlanceCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .glance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          padding: 8px 0;
        }

        .glance-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .glance-item:hover {
          background-color: rgba(0, 255, 65, 0.1);
          border-color: var(--muthur-border-color);
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .glance-icon {
          font-size: 2em;
          margin-bottom: 8px;
        }

        .glance-state {
          font-size: 1.4em;
          font-weight: bold;
          margin: 4px 0;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .glance-unit {
          font-size: 0.7em;
          margin-left: 2px;
          opacity: 0.8;
        }

        .glance-name {
          font-size: 0.75em;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
          margin-top: 4px;
          opacity: 0.9;
        }

        .glance-indicator {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          box-shadow: 0 0 5px currentColor;
        }

        .columns-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .columns-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .columns-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .columns-5 {
          grid-template-columns: repeat(5, 1fr);
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'SYSTEM GLANCE';
    const entities = this.config.entities || [];
    const columns = this.config.columns;
    const showName = this.config.show_name !== false;

    let gridClass = '';
    if (columns && columns >= 2 && columns <= 5) {
      gridClass = `columns-${columns}`;
    }

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="glance-grid ${gridClass}">
            ${entities.map(entityConf => this.renderEntity(entityConf, showName))}
          </div>
        </div>
      </div>
    `;
  }

  renderEntity(entityConf, showName) {
    const entityId = typeof entityConf === 'string' ? entityConf : entityConf.entity;
    const entity = this.hass.states[entityId];
    
    if (!entity) {
      return html`
        <div class="glance-item">
          <div class="glance-state">N/A</div>
          ${showName ? html`<div class="glance-name">${entityId}</div>` : ''}
        </div>
      `;
    }

    const name = (typeof entityConf === 'object' && entityConf.name) || 
                 entity.attributes.friendly_name || entityId;
    const icon = (typeof entityConf === 'object' && entityConf.icon) || 
                 entity.attributes.icon || this._getDefaultIcon(entity);
    const state = entity.state;
    const unit = entity.attributes.unit_of_measurement || '';

    // Determine indicator color
    let indicatorColor = 'var(--muthur-primary-color)';
    if (state === 'unavailable' || state === 'unknown') {
      indicatorColor = '#ff0000';
    } else if (state === 'off' || state === 'closed') {
      indicatorColor = '#666666';
    }

    return html`
      <div class="glance-item" @click=${() => this._handleClick(entityId)}>
        <span class="glance-indicator" style="background-color: ${indicatorColor};"></span>
        ${icon ? html`<div class="glance-icon">${this._renderIcon(icon)}</div>` : ''}
        <div class="glance-state">
          ${state.toUpperCase()}
          ${unit ? html`<span class="glance-unit">${unit}</span>` : ''}
        </div>
        ${showName ? html`<div class="glance-name">${name}</div>` : ''}
      </div>
    `;
  }

  _renderIcon(icon) {
    // If icon starts with mdi: it's a material design icon, render as emoji fallback
    // For now just show emoji or text representation
    const iconMap = {
      'mdi:lightbulb': '💡',
      'mdi:thermometer': '🌡️',
      'mdi:water-percent': '💧',
      'mdi:fan': '🌀',
      'mdi:door': '🚪',
      'mdi:motion-sensor': '🔍',
      'mdi:power': '⚡',
    };
    
    return iconMap[icon] || icon;
  }

  _getDefaultIcon(entity) {
    const domain = entity.entity_id.split('.')[0];
    const iconMap = {
      'light': '💡',
      'switch': '⚡',
      'binary_sensor': '🔍',
      'sensor': '📊',
      'climate': '🌡️',
      'fan': '🌀',
      'cover': '🚪',
      'lock': '🔒',
    };
    
    return iconMap[domain] || '📍';
  }

  _handleClick(entityId) {
    const event = new CustomEvent('hass-more-info', {
      bubbles: true,
      composed: true,
      detail: { entityId }
    });
    this.dispatchEvent(event);
  }

  setConfig(config) {
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define entities as an array');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return document.createElement('muthur-glance-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM GLANCE',
      entities: [],
      columns: null,
      show_name: true
    };
  }
}

customElements.define('muthur-glance-card', MuthurGlanceCard);
