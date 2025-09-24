import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.number = "1234 5678 9101 1121";
  }

  static get styles() {
    return css`
      .card {
        display: inline-block;
        width: 320px;
        padding: 20px;
        border-radius: 16px;
        background-color: blue;
        color: white;
        font-family: system-ui, Segoe UI, Roboto, Arial, sans-serif;
      }

      .card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .chip {
        width: 44px;
        height: 32px;
        border-radius: 6px;
        background: linear-gradient(135deg, #d7d2cc, #304352);
        box-shadow: inset 0 2px 6px rgba(0,0,0,.25);
      }

      .card-image{
        opacity: .5;
        width: 44px;
        height: 32px;
      }

      .card.fancy{
        background-color: orange;
      }

      .brand {
        font-weight: 700;
        letter-spacing: .5px;
      }

      .number {
        margin: 20px 0;
        font-size: 20px;
        letter-spacing: 2px;
      }

      .card-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .valid .label {
        display: block;
        font-size: 10px;
        opacity: .8;
        margin-bottom: 2px;
      }
      
      .name-btn {
        background: white;
        color: #0b5bd3;
        padding: 10px 14px;
        border-radius: 12px;
        font-weight: 600;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0,0,0,.15);
        transition: transform .08s ease, box-shadow .12s ease;
      }

      .name-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(0,0,0,.2);
      }


      @media (max-width: 420px) {
        .name-btn { display: none; }
      }
    `;
  }

  render() {
    return html`
    <div class="card">
      <div class="card-top">
        <div class="chip">
          <img class="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9gJACNLV5RJ5RC8Me7u3GRvAQ-w8DHNqNw&s">
        </div>
        <div class="brand">${this.title}</div>
      </div>


      <div class="number">${this.number}</div>


      <div class="card-bottom">
        <div class="valid">
          <span class="label">VALID THRU</span>
          <span>08/28</span>
        </div>


        <a class="name-btn" href="https://hax.psu.edu" target="_blank" rel="noopener">
          Details
        </a>
      </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      number: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);