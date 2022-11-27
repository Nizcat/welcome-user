import { LitElement, html, css } from "lit";

export class AccessDenied extends LitElement {
  static properties = {
    showComponent: { type: Boolean },
    userName: { type: String },
  };

  constructor() {
    super();
    this.showComponent = false;
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20vw;
        justify-content: space-around;
        background: linear-gradient(35deg, #bb4277, #65022d);
        color: white;
        border-radius: 20px;
        box-shadow: 0.2em 0.2em #c8d8ee;
        padding: 0.5em;
        margin-top:3em;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <h2>Access Denied ${this.userName}</h2>
      </div>
    `;
  }
}
customElements.define("access-denied", AccessDenied);
