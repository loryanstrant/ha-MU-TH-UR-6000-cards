import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurPictureCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .picture-container {
          padding: 8px 0;
        }

        .picture-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid var(--muthur-border-color);
          box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.1);
        }

        .picture-image {
          width: 100%;
          height: auto;
          display: block;
          filter: 
            grayscale(100%) 
            brightness(0.8) 
            contrast(1.2)
            sepia(100%)
            hue-rotate(50deg);
          opacity: 0.9;
        }

        .picture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 255, 65, 0.05) 2px,
            rgba(0, 255, 65, 0.05) 4px
          );
          pointer-events: none;
        }

        .picture-info {
          margin-top: 12px;
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
        }

        .picture-title {
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
          font-weight: bold;
        }

        .picture-caption {
          font-size: 0.85em;
          line-height: 1.4;
          opacity: 0.9;
          font-family: var(--muthur-font-family);
        }

        .picture-timestamp {
          font-size: 0.75em;
          opacity: 0.7;
          margin-top: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .entity-state {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
          padding: 8px 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
        }

        .entity-label {
          flex: 1;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .entity-value {
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .camera-refresh {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 8px 16px;
          font-family: var(--muthur-font-family);
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          margin-top: 12px;
          width: 100%;
          transition: all 0.3s ease;
        }

        .camera-refresh:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .loading {
          text-align: center;
          padding: 40px;
          font-size: 1em;
          opacity: 0.7;
        }

        .error {
          text-align: center;
          padding: 40px;
          color: #ff0000;
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      _imageUrl: { type: String },
      _loading: { type: Boolean },
      _error: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._imageUrl = '';
    this._loading = false;
    this._error = false;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
    if (changedProperties.has('config') || changedProperties.has('hass')) {
      this._updateImage();
    }
  }

  _updateImage() {
    if (!this.config || !this.hass) return;

    if (this.config.entity) {
      // Camera entity
      const entity = this.hass.states[this.config.entity];
      if (entity && entity.attributes.entity_picture) {
        this._imageUrl = entity.attributes.entity_picture;
        this._error = false;
      }
    } else if (this.config.image) {
      // Static image URL
      this._imageUrl = this.config.image;
      this._error = false;
    }
  }

  render() {
    if (!this.config) {
      return html``;
    }

    const title = this.config.title || 'VISUAL FEED';
    const caption = this.config.caption || '';
    const showTimestamp = this.config.show_timestamp === true;
    const entity = this.config.entity ? this.hass?.states[this.config.entity] : null;

    if (this._loading) {
      return html`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${title}</div>
            <div class="picture-container">
              <div class="loading">LOADING IMAGE...</div>
            </div>
          </div>
        </div>
      `;
    }

    if (this._error || !this._imageUrl) {
      return html`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${title}</div>
            <div class="picture-container">
              <div class="error">IMAGE UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="picture-container">
            <div class="picture-wrapper">
              <img 
                class="picture-image" 
                src="${this._imageUrl}" 
                alt="${title}"
                @error=${() => this._error = true}
              />
              <div class="picture-overlay"></div>
            </div>

            ${caption || entity || showTimestamp ? html`
              <div class="picture-info">
                ${caption ? html`
                  <div class="picture-caption">${caption}</div>
                ` : ''}
                
                ${entity ? html`
                  <div class="entity-state">
                    <span class="entity-label">STATUS</span>
                    <span class="entity-value">${entity.state.toUpperCase()}</span>
                  </div>
                ` : ''}

                ${showTimestamp ? html`
                  <div class="picture-timestamp">
                    CAPTURED: ${new Date().toLocaleString('en-US', {
    hour12: false,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).toUpperCase()}
                  </div>
                ` : ''}
              </div>
            ` : ''}

            ${this.config.entity ? html`
              <button 
                class="camera-refresh"
                @click=${() => this._refreshCamera()}
              >
                ⟳ REFRESH FEED
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _refreshCamera() {
    if (this.config.entity) {
      this._loading = true;
      this.requestUpdate();
      
      // Force image refresh by updating the URL with a timestamp
      setTimeout(() => {
        this._updateImage();
        this._loading = false;
        this.requestUpdate();
      }, 500);
    }
  }

  setConfig(config) {
    if (!config.entity && !config.image) {
      throw new Error('You need to define either an entity (camera) or image URL');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return document.createElement('muthur-picture-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'VISUAL FEED',
      entity: '',
      image: '',
      caption: '',
      show_timestamp: false
    };
  }
}

customElements.define('muthur-picture-card', MuthurPictureCard);
