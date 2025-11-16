import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurClockCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .clock-container {
          text-align: center;
          padding: 24px 16px;
        }

        .clock-time {
          font-size: 4em;
          font-weight: bold;
          line-height: 1;
          margin: 16px 0;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 15px var(--muthur-glow-color);
          letter-spacing: 0.1em;
        }

        .clock-seconds {
          font-size: 0.4em;
          opacity: 0.8;
          margin-left: 0.2em;
        }

        .clock-date {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .clock-timezone {
          font-size: 0.85em;
          opacity: 0.7;
          margin-top: 16px;
        }

        .clock-divider {
          width: 60%;
          margin: 20px auto;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--muthur-border-color),
            transparent
          );
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      _time: { type: String },
      _date: { type: String },
    };
  }

  constructor() {
    super();
    this._time = '';
    this._date = '';
    this._updateTime();
  }

  connectedCallback() {
    super.connectedCallback();
    this._startClock();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopClock();
  }

  _startClock() {
    this._updateTime();
    this._clockInterval = setInterval(() => this._updateTime(), 1000);
  }

  _stopClock() {
    if (this._clockInterval) {
      clearInterval(this._clockInterval);
    }
  }

  _updateTime() {
    const now = new Date();
    const showSeconds = this.config?.show_seconds !== false;
    
    const timeFormat = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: this.config?.format_12h || false
    };
    
    if (showSeconds) {
      timeFormat.second = '2-digit';
    }
    
    this._time = now.toLocaleTimeString('en-US', timeFormat);
    this._date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    this.requestUpdate();
  }

  render() {
    if (!this.config) {
      return html``;
    }

    const title = this.config.title || 'SYSTEM CHRONOMETER';
    const showTimezone = this.config.show_timezone !== false;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="clock-container">
            <div class="clock-date">${this._date.toUpperCase()}</div>
            <div class="clock-divider"></div>
            <div class="clock-time">${this._time}</div>
            ${showTimezone ? html`
              <div class="clock-timezone">${timezone}</div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  setConfig(config) {
    super.setConfig(config);
  }

  static getConfigElement() {
    return undefined;
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM CHRONOMETER',
      show_seconds: true,
      show_timezone: true,
      format_12h: false
    };
  }
}

customElements.define('muthur-clock-card', MuthurClockCard);
