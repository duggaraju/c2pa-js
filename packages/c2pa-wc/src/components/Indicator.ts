import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultStyles } from '../styles';
import '../../assets/svg/color/info.svg';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cai-indicator': any;
    }
  }
}

type Variant = 'info-light' | 'info-dark' | 'warning' | 'error';

@customElement('cai-indicator')
export class Indicator extends LitElement {
  /**
   * Image source - if set to undefined/null it will show a broken image icon
   */
  @property({ type: String })
  variant: Variant = 'info-light';

  static get styles() {
    return [
      defaultStyles,
      css`
        :host {
          display: inline-block;
          width: var(--cai-indicator-size, 24px);
          height: var(--cai-indicator-size, 24px);
        }
        .icon {
          --cai-icon-width: var(--cai-indicator-size, 24px);
          --cai-icon-height: var(--cai-indicator-size, 24px);
        }
      `,
    ];
  }

  render() {
    return html`<cai-icon-info class="icon" />`;
  }
}
