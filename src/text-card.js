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
    const content = this.config.content || '';
    const size = this.config.size || 'medium';
    const align = this.config.align || 'left';
    const showPrompt = this.config.show_prompt !== false;
    const typingEffect = this.config.typing_effect === true;

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

  static getConfigElement() {
    return document.createElement('muthur-text-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'MESSAGE',
      content: 'ENTER YOUR MESSAGE HERE',
      size: 'medium',
      align: 'left',
      show_prompt: true,
      typing_effect: false
    };
  }
}

customElements.define('muthur-text-card', MuthurTextCard);
