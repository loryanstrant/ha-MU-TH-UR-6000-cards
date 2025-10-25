import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurWeatherCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .weather-container {
          padding: 8px 0;
        }

        .weather-current {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 16px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
          margin-bottom: 16px;
        }

        .weather-icon {
          font-size: 4em;
          line-height: 1;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .weather-main {
          flex: 1;
        }

        .weather-temp {
          font-size: 3em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 10px var(--muthur-glow-color);
          line-height: 1;
          margin-bottom: 8px;
        }

        .weather-temp-unit {
          font-size: 0.5em;
          margin-left: 4px;
        }

        .weather-condition {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .weather-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }

        .weather-detail {
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
        }

        .weather-detail-label {
          font-size: 0.75em;
          opacity: 0.7;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .weather-detail-value {
          font-size: 1.1em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .weather-forecast {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .forecast-title {
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          opacity: 0.9;
        }

        .forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 8px;
        }

        .forecast-item {
          padding: 12px 8px;
          background-color: rgba(0, 255, 65, 0.03);
          border: 1px solid var(--muthur-secondary-color);
          text-align: center;
        }

        .forecast-day {
          font-size: 0.75em;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.9;
        }

        .forecast-icon {
          font-size: 2em;
          margin: 8px 0;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .forecast-temp {
          font-size: 0.9em;
          font-family: var(--muthur-font-family);
          font-weight: bold;
        }

        .forecast-temp-low {
          font-size: 0.8em;
          opacity: 0.7;
          margin-left: 4px;
        }

        .attribution {
          font-size: 0.7em;
          opacity: 0.6;
          margin-top: 12px;
          text-align: center;
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
            <div class="weather-container">
              Entity ${entityId} not found
            </div>
          </div>
        </div>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || 'Weather';
    const showForecast = this.config.show_forecast !== false;
    
    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${name.toUpperCase()}</div>
          
          <div class="weather-container">
            ${this._renderCurrent(entity)}
            ${this._renderDetails(entity)}
            ${showForecast ? this._renderForecast(entity) : ''}
            ${entity.attributes.attribution ? html`
              <div class="attribution">${entity.attributes.attribution}</div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _renderCurrent(entity) {
    const temp = entity.attributes.temperature;
    const tempUnit = this.hass.config.unit_system.temperature;
    const condition = entity.state;
    const icon = this._getWeatherIcon(condition);

    return html`
      <div class="weather-current">
        <div class="weather-icon">${icon}</div>
        <div class="weather-main">
          <div class="weather-temp">
            ${temp}<span class="weather-temp-unit">${tempUnit}</span>
          </div>
          <div class="weather-condition">${condition}</div>
        </div>
      </div>
    `;
  }

  _renderDetails(entity) {
    const details = [];
    
    if (entity.attributes.humidity !== undefined) {
      details.push({ label: 'Humidity', value: `${entity.attributes.humidity}%` });
    }
    
    if (entity.attributes.pressure !== undefined) {
      details.push({ 
        label: 'Pressure', 
        value: `${entity.attributes.pressure} ${entity.attributes.pressure_unit || 'hPa'}` 
      });
    }
    
    if (entity.attributes.wind_speed !== undefined) {
      const windUnit = entity.attributes.wind_speed_unit || 'km/h';
      details.push({ label: 'Wind Speed', value: `${entity.attributes.wind_speed} ${windUnit}` });
    }
    
    if (entity.attributes.wind_bearing !== undefined) {
      const bearing = this._getWindDirection(entity.attributes.wind_bearing);
      details.push({ label: 'Wind Dir', value: bearing });
    }
    
    if (entity.attributes.visibility !== undefined) {
      const visUnit = entity.attributes.visibility_unit || 'km';
      details.push({ label: 'Visibility', value: `${entity.attributes.visibility} ${visUnit}` });
    }

    if (details.length === 0) return '';

    return html`
      <div class="weather-details">
        ${details.map(detail => html`
          <div class="weather-detail">
            <div class="weather-detail-label">${detail.label}</div>
            <div class="weather-detail-value">${detail.value}</div>
          </div>
        `)}
      </div>
    `;
  }

  _renderForecast(entity) {
    const forecast = entity.attributes.forecast;
    
    if (!forecast || forecast.length === 0) {
      return '';
    }

    const maxDays = this.config.forecast_days || 5;
    const forecastItems = forecast.slice(0, maxDays);

    return html`
      <div class="weather-forecast">
        <div class="forecast-title">FORECAST</div>
        <div class="forecast-grid">
          ${forecastItems.map(day => this._renderForecastDay(day))}
        </div>
      </div>
    `;
  }

  _renderForecastDay(day) {
    const date = new Date(day.datetime);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const icon = this._getWeatherIcon(day.condition);

    return html`
      <div class="forecast-item">
        <div class="forecast-day">${dayName}</div>
        <div class="forecast-icon">${icon}</div>
        <div class="forecast-temp">
          ${day.temperature}°
          ${day.templow !== undefined ? html`
            <span class="forecast-temp-low">${day.templow}°</span>
          ` : ''}
        </div>
      </div>
    `;
  }

  _getWeatherIcon(condition) {
    const iconMap = {
      'clear-night': '🌙',
      'cloudy': '☁️',
      'fog': '🌫️',
      'hail': '🌨️',
      'lightning': '⚡',
      'lightning-rainy': '⛈️',
      'partlycloudy': '⛅',
      'pouring': '🌧️',
      'rainy': '🌦️',
      'snowy': '❄️',
      'snowy-rainy': '🌨️',
      'sunny': '☀️',
      'windy': '💨',
      'windy-variant': '🌬️',
      'exceptional': '⚠️',
    };
    
    return iconMap[condition] || '🌡️';
  }

  _getWindDirection(degrees) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define a weather entity');
    }
    super.setConfig(config);
  }

  static getConfigElement() {
    return document.createElement('muthur-weather-card-editor');
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      show_forecast: true,
      forecast_days: 5
    };
  }
}

customElements.define('muthur-weather-card', MuthurWeatherCard);
