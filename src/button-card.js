import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurButtonCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .button-container {
          display: grid;
          gap: 12px;
          padding: 8px 0;
        }

        .muthur-button {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 16px 24px;
          font-family: var(--muthur-font-family);
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .muthur-button:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 
            0 0 15px var(--muthur-glow-color),
            inset 0 0 15px var(--muthur-glow-color);
        }

        .muthur-button:active {
          background: rgba(0, 255, 65, 0.3);
          transform: scale(0.98);
        }

        .muthur-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .muthur-button:hover::before {
          left: 100%;
        }

        .button-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .button-icon {
          font-size: 1.2em;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .button-state {
          font-size: 0.75em;
          opacity: 0.7;
          margin-top: 4px;
        }

        .button-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .button-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'TERMINAL CONTROL';
    const buttons = this.config.buttons || [];
    const columns = this.config.columns || 1;
    const gridClass = columns > 1 ? `button-grid-${Math.min(columns, 3)}` : '';

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="button-container ${gridClass}">
            ${buttons.map(buttonConfig => this.renderButton(buttonConfig))}
          </div>
        </div>
      </div>
    `;
  }

  renderButton(buttonConfig) {
    const entity = buttonConfig.entity ? this.hass.states[buttonConfig.entity] : null;
    const name = buttonConfig.name || (entity ? entity.attributes.friendly_name : 'Button');
    const icon = buttonConfig.icon || (entity ? entity.attributes.icon : null);
    const showState = buttonConfig.show_state !== false;

    return html`
      <button 
        class="muthur-button"
        @click=${() => this.handleButtonClick(buttonConfig)}
      >
        <div class="button-content">
          ${icon ? html`<span class="button-icon">${icon}</span>` : ''}
          <span>${name}</span>
        </div>
        ${entity && showState ? html`
          <div class="button-state">
            ${entity.state.toUpperCase()}
          </div>
        ` : ''}
      </button>
    `;
  }

  handleButtonClick(buttonConfig) {
    if (buttonConfig.entity) {
      const serviceName = (buttonConfig.action || 'toggle').split('.')[1] || 'toggle';
      const entityDomain = buttonConfig.entity.split('.')[0];
      
      this.hass.callService(
        entityDomain,
        serviceName,
        {
          entity_id: buttonConfig.entity
        }
      );
    } else if (buttonConfig.service) {
      const [domain, service] = buttonConfig.service.split('.');
      this.hass.callService(
        domain,
        service,
        buttonConfig.service_data || {}
      );
    }
  }

  setConfig(config) {
    if (!config.buttons || !Array.isArray(config.buttons)) {
      throw new Error('You need to define buttons as an array');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return document.createElement('muthur-button-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'TERMINAL CONTROL',
      buttons: [],
      columns: 1
    };
  }
}

customElements.define('muthur-button-card', MuthurButtonCard);
