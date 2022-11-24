import { LitElement, html, css } from 'lit';

export class AccessDenied extends LitElement {
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
            background: linear-gradient(35deg, #bb4277, #65022d);
            color: white;
          }
        `,
      ];
    

    render() {
        return html`
        ${this.showComponent
          ? html` <div>
              <h2>Access Denied ${this.userName}</h2>
            </div>`
          : html`
              <div>
                <h2>Access Denied</h2>
              </div>
            `}
      `;
    }
}
customElements.define('access-denied', AccessDenied);
