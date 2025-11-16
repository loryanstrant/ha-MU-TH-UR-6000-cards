import { html, css } from 'lit';
import { MuthurBaseCard, baseStyles } from './base-card.js';

class MuthurTextCard extends MuthurBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .text-container {
          padding: 8px 0;
        }

        .text-content {
          font-family: var(--muthur-font-family);
          line-height: 1.6;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .text-small {
          font-size: 0.85em;
        }

        .text-medium {
          font-size: 1em;
        }

        .text-large {
          font-size: 1.2em;
        }

        .text-left {
          text-align: left;
        }

        .text-center {
          text-align: center;
        }

        .text-right {
          text-align: right;
        }

        .terminal-prompt::before {
          content: '> ';
          color: var(--muthur-primary-color);
        }

        /* Typing effect overrides multi-line behavior */
        .typing-effect {
          overflow: hidden;
          border-right: 2px solid var(--muthur-primary-color);
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: var(--muthur-primary-color); }
        }
      `,
    ];
  }

  render() {
    if (!this.config) {
      return html``;
    }

    const title = this.config.title || 'MESSAGE';
    const size = this.config.size || 'medium';
    const align = this.config.align || 'left';
    const showPrompt = this.config.show_prompt !== false;
    const typingEffect = this.config.typing_effect === true;

    // Determine content based on entity state if entity and state_content are defined
    let content = this.config.content || '';
    
    if (this.config.entity && this.config.state_content && this.hass) {
      const entity = this.hass.states[this.config.entity];
      if (entity) {
        const state = entity.state;
        
        // Check if there's a specific content for this state
        if (this.config.state_content[state]) {
          content = this.config.state_content[state];
        } else if (this.config.state_content.default) {
          // Fall back to default if provided
          content = this.config.state_content.default;
        }
        
        // Replace template variables in content
        content = this._replaceTemplates(content, entity);
      }
    }

    const contentClass = `text-content text-${size} text-${align}`;
    const promptClass = showPrompt ? 'terminal-prompt' : '';
    const effectClass = typingEffect ? 'typing-effect' : '';

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          
          <div class="text-container">
            <div class="${contentClass} ${promptClass} ${effectClass}">
              ${content}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _replaceTemplates(content, entity) {
    if (!content || !entity) return content;
    
    let result = content;
    
    // Replace {{state}} with entity state
    result = result.replace(/\{\{state\}\}/g, entity.state);
    
    // Replace {{friendly_name}} with entity friendly name
    if (entity.attributes.friendly_name) {
      result = result.replace(/\{\{friendly_name\}\}/g, entity.attributes.friendly_name);
    }
    
    // Replace {{unit}} with unit of measurement
    if (entity.attributes.unit_of_measurement) {
      result = result.replace(/\{\{unit\}\}/g, entity.attributes.unit_of_measurement);
    }
    
    // Replace any other attribute with {{attribute.name}} syntax
    result = result.replace(/\{\{attribute\.(\w+)\}\}/g, (match, attrName) => {
      return entity.attributes[attrName] || match;
    });
    
    return result;
  }

  static getConfigElement() {
    // Return undefined to prevent config editor errors
    return undefined;
  }

  static getStubConfig() {
    return {
      title: 'MESSAGE',
      content: 'ENTER YOUR MESSAGE HERE',
      entity: '',
      state_content: {},
      size: 'medium',
      align: 'left',
      show_prompt: true,
      typing_effect: false
    };
  }
}

customElements.define('muthur-text-card', MuthurTextCard);
