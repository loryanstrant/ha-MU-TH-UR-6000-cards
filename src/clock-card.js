import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurClockCard extends MuthurBaseCard {
  static get properties() {
    return {
      ...super.properties,
      _time: { type: String },
      _date: { type: String },
    };
  }

  static get styles() {
    return [
      baseStyles,
      css`
        .clock-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
        }

        .clock-title {
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          opacity: 0.8;
        }

        .clock-display {
          font-size: 3.5em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 15px var(--muthur-glow-color);
          margin: 16px 0;
          letter-spacing: 4px;
        }

        .clock-seconds {
          font-size: 0.6em;
          opacity: 0.8;
        }

        .date-display {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .date-separator {
          margin: 0 8px;
          opacity: 0.5;
        }

        .timezone-display {
          font-size: 0.85em;
          opacity: 0.7;
          margin-top: 12px;
        }

        .digital-separator {
          animation: blink-separator 1s infinite;
        }

        @keyframes blink-separator {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.3; }
        }
      `,
    ];
  }

  constructor() {
    super();
    this._time = '';
    this._date = '';
    this._updateTime();
  }

  connectedCallback() {
    super.connectedCallback();
    this._interval = setInterval(() => this._updateTime(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  _updateTime() {
    const now = new Date();
    const format24h = this.config?.format_24h !== false;
    
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    let period = '';
    if (!format24h) {
      period = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12;
    }
    
    this._time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}${period}`;
    this._seconds = String(seconds).padStart(2, '0');
    
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    const showDate = this.config?.show_date !== false;
    if (showDate) {
      const dayName = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();
      
      this._date = `${dayName} <span class="date-separator">//</span> ${month} ${date}, ${year}`;
    }
  }

  render() {
    if (!this.config) {
      return html``;
    }

    const title = this.config.title || 'SYSTEM TIME';
    const showSeconds = this.config.show_seconds !== false;
    const showDate = this.config.show_date !== false;
    const showTimezone = this.config.show_timezone === true;
    
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="clock-container">
            <div class="clock-display">
              ${this._time}${showSeconds ? html`<span class="digital-separator">:</span><span class="clock-seconds">${this._seconds}</span>` : ''}
            </div>

            ${showDate ? html`
              <div class="date-display">
                ${this.renderDateHTML(this._date)}
              </div>
            ` : ''}

            ${showTimezone ? html`
              <div class="timezone-display">${timezone}</div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  renderDateHTML(dateStr) {
    // Create a temporary div to parse HTML string
    const template = document.createElement('template');
    template.innerHTML = dateStr;
    return html`${template.content.textContent ? this._date : ''}`;
  }

  static getConfigElement() {
    return document.createElement('muthur-clock-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM TIME',
      format_24h: true,
      show_seconds: true,
      show_date: true,
      show_timezone: false
    };
  }
}

customElements.define('muthur-clock-card', MuthurClockCard);
