import { LitElement, html, css } from "lit";

export default class WelcomeSLot extends LitElement {
  static properties = {
    userName: { type: String },
    birthDate: { type: Date },
    today: { type: Date },
    sum1: { type: Number },
    sum2: { type: Number },
    validAge: { type: Boolean },
  };

  constructor() {
    super();
    this.today = new Date();
    this.sum();
    this.validatingAge();
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      .welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20vw;
        justify-content: space-around;
        background: linear-gradient(35deg, #c8d8ee, #030f4e);
        color: white;
        border-radius: 20px;
        box-shadow: 0.2em 0.2em #c8d8ee;
        padding: 0.3em;
      }
      .denied {
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
      }
      .phrase {
        align-self: flex-end;
        padding: 0.3em;
      }
    `,
  ];

  render() {
    return html`
      ${this.validAge
        ? html`
            <div>
              <div class="welcome">
                <p class="phrase">rendering with a slot</p>
                <h2>Welcome ${this.userName}</h2>
                <p>the result = ${this.sum()}</p>
              </div>
            </div>
          `
        : html`
            <div>
              <div class="denied">
                <p class="phrase">rendering with a slot</p>
                <h2>Sorry ${this.userName}, access denied</h2>
              </div>
            </div>
          `}
    `;
  }

  validatingAge() {
    console.log("entraa validar", this.birthDate, "no aparece");
    if (
     this.yearDiff(this.birthDate) >18
    ) {
      this.validAge = true;
     
      /*const otherComponent = document.createElement("welcome-user");
      otherComponent.setAttribute("showComponent", "true");
      otherComponent.setAttribute("userName", this.userName);
      otherComponent.classList.add("checkForm");
      this.shadowRoot.getElementById("checkForm").after(otherComponent);*/
      //const welcomeAlert = document.createElement("h3");
      //welcomeAlert.classList.add("welcome");
      //welcomeAlert.textContent = "Welcome " + this.userName;
      //this.shadowRoot.getElementById("checkForm").append(welcomeAlert);
      //console.log("bienvenido");
    } else {
      /*const accessDenied = document.createElement("access-denied");
      accessDenied.setAttribute("showComponent", "true");
      accessDenied.classList.add("checkForm");
      this.shadowRoot.getElementById("checkForm").after(accessDenied);*/
      //const deniedAccess = document.createElement("h3");
      //deniedAccess.classList.add("deniedAccess");
      //deniedAccess.textContent = "Access Denied";
      //this.shadowRoot.getElementById("checkForm").append(deniedAccess);
      //console.log("denied");
    }
  }
  yearDiff(dt1) {
    console.log(dt1, "soydt1");
    var diffYear = (new Date().getTime() - dt1.getTime()) / 1000;
    diffYear /= 60 * 60 * 24;
    return Math.abs(Math.round(diffYear / 365.25));
  }

  sum() {
    console.log("sumaaa");
    return this.sum1 + this.sum2;
  }
}
customElements.define("welcome-slot", WelcomeSLot);
