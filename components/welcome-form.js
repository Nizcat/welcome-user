import { LitElement, html, css } from "lit";
import "./welcome-user";
import "./access-denied";
export class WelcomeForm extends LitElement {
  static properties = {
    userName: { type: String },
    birthDate: { type: Date },
    validAge: { type: Boolean },
    showAnswer: { type: Boolean },
    showComponent: { type: Boolean },
  };

  constructor() {
    super();
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
        justify-content: flex-start;
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
    
      <div id="checkForm" class="checkForm">
        <h1>Welcome</h1>
        <input placeholder="Your Name " id="userName" />
        <br />
        <label>Your Birth Date</label><input type="date" id="date" />
        <br />
        
        <button id="checking" @click="${this.checkBirthDate}">Check</button>
      </div>
      
      </div>
      ${
        this.showAnswer
          ? html`
              ${this.validAge
                ? html`
                    <welcome-user username=${this.userName}></welcome-user>
                  `
                : html` <access-denied>
                    username=${this.userName}
                  </access-denied>`}
            `
          : html` <div></div>`
      }
     
    `;
  }

  checkBirthDate() {
    this.showAnswer=true;
    this.userName = this.shadowRoot.getElementById("userName").value;
    this.birthDate = new Date(
      this.shadowRoot.getElementById("date").value
    ).getTime();

    if (
      (new Date().getTime() - this.birthDate) / (1000 * 60 * 60 * 24) / 365 >
      18
    ) {
      console.log(
        (new Date().getTime() - this.birthDate) / (1000 * 60 * 60 * 24) / 365 >
          18,
        "mayor de edad"
      );
      this.validAge = true;

      /*const otherComponent = document.createElement("welcome-user");
      otherComponent.setAttribute("showComponent", "true");
      otherComponent.setAttribute("userName", this.userName);
      otherComponent.classList.add("checkForm");
      this.shadowRoot.getElementById("checkForm").after(otherComponent);*/
      /*const welcomeAlert = document.createElement("h3");
      welcomeAlert.classList.add("welcome");
      welcomeAlert.textContent = "Welcome " + this.userName;
      this.shadowRoot.getElementById("checkForm").append(welcomeAlert);
      //console.log("bienvenido");*/
    } else {
      /*const accessDenied = document.createElement("access-denied");
       accessDenied.setAttribute("showComponent", "true");
       accessDenied.classList.add("checkForm");
       this.shadowRoot.getElementById("checkForm").after(accessDenied);*/
      /*const deniedAccess = document.createElement("h3");
      deniedAccess.classList.add("deniedAccess");
      deniedAccess.textContent = "Access Denied";
      this.shadowRoot.getElementById("checkForm").append(deniedAccess);
    console.log("denied");*/
    }
  }
  yearDiff(dt1) {
    console.log(dt1, "soydt1");
    this.age =
      (new Date().getTime() - dt1.getTime()) / (1000 * 60 * 60 * 24) / 365;
    console.log(this.age, "es la edad");
    return Math.abs(Math.round(diffYear / 365.25));
  }
}

customElements.define("welcome-form", WelcomeForm);
