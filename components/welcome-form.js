import { LitElement, html, css } from "lit";
import "./welcome-user";
import "./access-denied";
import "./welcome-slot";

export class WelcomeForm extends LitElement {
  static properties = {
    userName: { type: String },
    birthDate: { type: Date },
    validAge: { type: Boolean },
    showAnswer: { type: Boolean },
    sum1: { type: Number },
    sum2: { type: Number },
  };

  constructor() {
    super();
    this.birthDate = new Date();
    this.userName = "";
    this.validAge = false;
    this.showAnswer = false;
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        justify-content: space-around;
        background: linear-gradient(35deg, #c8d8ee, #030f4e);
      }
      .checkForm {
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        width: 20vw;
        height: fit-content;
        justify-content: center;
        align-items: space-around;
        border: none;
        padding: 2em;
        box-shadow: 0.6em 0.5em #7b819e;
        border-radius: 20px;
        background-color: white;
      }
      button {
        width: 6em;
        border-radius: 20px;
        background-color: white;
        border: 0.1em solid #7b819e;
        box-shadow: 0.2em 0.2em lightblue;
        cursor: pointer;
      }
      input {
        height: 2em;
        border-radius: 20px;
        border: 0.1em solid #7b819e;
        box-shadow: 0.2em 0.2em lightblue;
        text-align: center;
      }
      .deniedAccess {
        color: #cf0f58;
        font-size: 2em;
      }
      .welcome {
        color: #6573d9;
        font-size: 2em;
      }
      h1 {
        color: #6573d9;
      }
      .center {
        text-align: center;
      }
    `,
  ];

  render() {
    return html`
    ${console.log(this.validAge)}
      <div id="checkForm" class="checkForm">
        <h1>Welcome</h1>
        <input placeholder="Your Name " id="userName" />
        <br />
        <label>Your Birth Date</label><input type="date" id="date" />
        <br />
        <input placeholder="a number " id="sum1" /><p class="center">+</p><input placeholder="a number " id="sum2" />
        <button id="checking" @click="${this.checkBirthDate}">Check</button>
      </div>
      ${
        this.showAnswer
          ? html`<welcome-slot
              userName=${this.userName}
              birthDate=${this.birthDate}
              sum1=${this.sum1}
              sum2=${this.sum2}
            ></welcome-slot>`
          : html` <div></div> `
      }
      </div>
     
    `;
  }

  checkBirthDate() {
    this.showAnswer = true;
    this.userName = this.shadowRoot.getElementById("userName").value;
    this.birthDate = new Date(this.shadowRoot.getElementById("date").value);
    this.sum1 = this.shadowRoot.getElementById("sum1").value;
    this.sum2 = this.shadowRoot.getElementById("sum2").value;
    console.log(this.birthDate, "es el formato");
  }
}
customElements.define("welcome-form", WelcomeForm);
