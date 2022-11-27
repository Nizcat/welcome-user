import { LitElement, html, css } from "lit";

export default class WelcomeUser extends LitElement {
  static properties = {
    showComponent: { type: Boolean },
    userName: { type: String },
  };

  constructor() {
    super();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20vw;
        justify-content: space-around;
        margin-top:3em;
        background: linear-gradient(35deg, #c8d8ee, #030f4e);
        color: white;
        border-radius: 20px;
        box-shadow: 0.2em 0.2em #c8d8ee;
        padding: 0.3em;
      }
      
    `,
  ];

  render() {
    return html` <div >
      <h2>Welcome ${this.userName}</h2>
    </div>`;
  }
}
customElements.define("welcome-user", WelcomeUser);
