import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurAlarmCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .alarm-container {
          padding: 8px 0;
        }

        .alarm-status {
          text-align: center;
          margin-bottom: 16px;
          padding: 16px;
          background-color: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1.1em;
          font-weight: bold;
        }

        .alarm-status.armed_away,
        .alarm-status.armed_home,
        .alarm-status.armed_night,
        .alarm-status.armed_vacation,
        .alarm-status.armed_custom_bypass {
          background-color: rgba(255, 0, 0, 0.1);
          border-color: #ff0000;
          color: #ff0000;
          --muthur-text-color: #ff0000;
        }

        .alarm-status.pending,
        .alarm-status.arming {
          background-color: rgba(255, 255, 0, 0.1);
          border-color: #ffff00;
          color: #ffff00;
          --muthur-text-color: #ffff00;
        }

        .alarm-status.triggered {
          background-color: rgba(255, 0, 0, 0.2);
          border-color: #ff0000;
          color: #ff0000;
          --muthur-text-color: #ff0000;
          animation: alarm-flash 0.5s infinite;
        }

        @keyframes alarm-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .code-display {
          text-align: center;
          margin-bottom: 16px;
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
          font-family: var(--muthur-font-family);
          font-size: 1.5em;
          letter-spacing: 8px;
          min-height: 2em;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }

        .key {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 16px;
          font-family: var(--muthur-font-family);
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .key:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 
            0 0 10px var(--muthur-glow-color),
            inset 0 0 10px var(--muthur-glow-color);
        }

        .key:active {
          background: rgba(0, 255, 65, 0.3);
          transform: scale(0.95);
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .action-button {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 12px;
          font-family: var(--muthur-font-family);
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .action-button:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .action-button.arm {
          border-color: #ff0000;
          color: #ff0000;
        }

        .action-button.arm:hover {
          background: rgba(255, 0, 0, 0.2);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }

        .error-message {
          text-align: center;
          padding: 8px;
          color: #ff0000;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      _code: { type: String },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this._code = '';
    this._error = '';
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'SECURITY SYSTEM';
    const entity = this.hass.states[this.config.entity];
    
    if (!entity) {
      return html`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${title}</div>
            <div class="error-message">ENTITY UNAVAILABLE</div>
          </div>
        </div>
      `;
    }

    const state = entity.state;
    const stateDisplay = this._getStateDisplay(state);

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="alarm-container">
            <div class="alarm-status ${state}">
              ${stateDisplay}
            </div>

            ${this.config.show_keypad !== false ? html`
              <div class="code-display">
                ${this._code ? '•'.repeat(this._code.length) : 'ENTER CODE'}
              </div>

              <div class="keypad">
                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 0, 'OK'].map(key => html`
                  <button 
                    class="key"
                    @click=${() => this._handleKeyPress(key)}
                  >
                    ${key}
                  </button>
                `)}
              </div>
            ` : ''}

            ${this._error ? html`
              <div class="error-message">${this._error}</div>
            ` : ''}

            <div class="action-buttons">
              ${state === 'disarmed' ? html`
                <button 
                  class="action-button arm"
                  @click=${() => this._armAlarm('armed_away')}
                >
                  ARM AWAY
                </button>
                <button 
                  class="action-button arm"
                  @click=${() => this._armAlarm('armed_home')}
                >
                  ARM HOME
                </button>
              ` : html`
                <button 
                  class="action-button"
                  @click=${() => this._disarmAlarm()}
                >
                  DISARM
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _getStateDisplay(state) {
    const stateMap = {
      'disarmed': 'DISARMED',
      'armed_away': 'ARMED - AWAY',
      'armed_home': 'ARMED - HOME',
      'armed_night': 'ARMED - NIGHT',
      'armed_vacation': 'ARMED - VACATION',
      'armed_custom_bypass': 'ARMED - CUSTOM',
      'pending': 'PENDING',
      'arming': 'ARMING',
      'disarming': 'DISARMING',
      'triggered': '⚠ ALARM TRIGGERED ⚠',
      'unavailable': 'UNAVAILABLE',
      'unknown': 'UNKNOWN'
    };
    return stateMap[state] || state.toUpperCase();
  }

  _handleKeyPress(key) {
    if (key === 'CLR') {
      this._code = '';
      this._error = '';
    } else if (key === 'OK') {
      // Submit code based on current state
      const entity = this.hass.states[this.config.entity];
      if (!entity) return;

      if (entity.state === 'disarmed') {
        // Don't need code to arm (usually)
        this._code = '';
      } else {
        // Need code to disarm
        this._disarmAlarm();
      }
    } else {
      // Add digit to code
      if (this._code.length < 10) { // Max 10 digits
        this._code += key.toString();
        this._error = '';
      }
    }
    this.requestUpdate();
  }

  _armAlarm(mode) {
    const code = this._code || undefined;
    
    this.hass.callService('alarm_control_panel', `alarm_${mode}`, {
      entity_id: this.config.entity,
      code: code
    }).then(() => {
      this._code = '';
      this._error = '';
      this.requestUpdate();
    }).catch(() => {
      this._error = 'INVALID CODE';
      this._code = '';
      this.requestUpdate();
    });
  }

  _disarmAlarm() {
    if (!this._code && this.config.show_keypad !== false) {
      this._error = 'CODE REQUIRED';
      this.requestUpdate();
      return;
    }

    this.hass.callService('alarm_control_panel', 'alarm_disarm', {
      entity_id: this.config.entity,
      code: this._code
    }).then(() => {
      this._code = '';
      this._error = '';
      this.requestUpdate();
    }).catch(() => {
      this._error = 'INVALID CODE';
      this._code = '';
      this.requestUpdate();
    });
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an alarm_control_panel entity');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return document.createElement('muthur-alarm-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'SECURITY SYSTEM',
      entity: '',
      show_keypad: true
    };
  }
}

customElements.define('muthur-alarm-card', MuthurAlarmCard);
