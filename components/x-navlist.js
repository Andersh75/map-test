import { html, LitElement } from "lit-element"
import "../components/x-sublist-item.js"
import "../components/x-navlist-subheading.js"

class XNavlist extends LitElement {
  subheadingHandler(e) {
    this.isopen = e.detail.open
    this.ishidden = false
  }

  constructor() {
    super()
    this.isopen = false
    this.ishidden = true
  }

  static get properties() {
    return { isopen: { type: Boolean } }
  }

  render() {
    return html`
      <style>
        .subList {
          /* max-height: 600px; */
          overflow: hidden;
          animation-name: move-in-steps;
          animation-fill-mode: forwards;
          animation-duration: 1s;
          /* transition: height 0.3s ease-out; */
          /* transition: opacity 0.5s ease-in; */
          background-color: #1a212a;
        }
        .subList--hidden {
          overflow: hidden;
          animation-name: move-out-steps;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
          /* transition: height 0.3s ease-out; */
          /* transition: opacity 0.5s ease-in; */
        }
        x-sublist-item:first-child {
          padding-top: 5px;
        }

        x-sublist-item:last-child {
          padding-bottom: 30px;
        }

        .hidden {
          height: 0px;
        }

        @keyframes move-in-steps {
          0% {
            max-height: 0px;
          }
          100% {
            max-height: 600px;
          }
        }

        @keyframes move-out-steps {
          0% {
            max-height: 600px;
          }
          100% {
            max-height: 0px;
          }
        }
      </style>
      <x-navlist-subheading class="row--align-v-center" @subheading=${e => this.subheadingHandler(e)}
        >networking</x-navlist-subheading
      >
      <div class="subList ${!this.isopen ? `subList--hidden` : ``} ${this.ishidden ? `hidden` : ``}">
        <x-sublist-item class="subList__item">tech</x-sublist-item>
        <x-sublist-item class="subList__item">automotive</x-sublist-item>
        <x-sublist-item class="subList__item">UX research</x-sublist-item>
        <x-sublist-item class="subList__item">development</x-sublist-item>
      </div>
    `
  }
}

customElements.define(`x-navlist`, XNavlist)
