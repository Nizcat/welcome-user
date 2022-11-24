import { LitElement, html, css } from "lit";

export default class WelcomeUser extends LitElement {
  static properties = {
    showComponent: { type: Boolean },
    userName: { type: String },
  };

  constructor(){
    super();
    this.showComponent = false;
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction:column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        justify-content: space-around;
        background: linear-gradient(35deg, #c8d8ee, #030f4e);
        color: white;
      }
    `,
  ];

  render() {
    return html`
      ${this.showComponent
        ? html` <div>
            <h2>Welcome ${this.userName}</h2>
          </div>`
        : html`
            <div>
              <h2>Access Denied</h2>
            </div>
          `}
    `;  
  }
}
customElements.define("welcome-user", WelcomeUser);
