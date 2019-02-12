import { html, LitElement } from "lit-element"
import "../components/x-map.js"

class XApp extends LitElement {
  firstUpdated() {
    fetch(`http://localhost:4000/api/ipaddresses`)
      .then(response => {
        return response.json()
      })
      .then(myJson => {
        this.xMapEl = myJson.map(doc => {
          return html`
            <x-map .coordinates=${[doc.x, doc.y]}></x-map>
          `
        })

        this.requestUpdate()

        // let map = new ol.Map({
        //   layers: [
        //     new ol.layer.Tile({
        //       source: new ol.source.OSM(),
        //     }),
        //   ],
        //   view: new ol.View({
        //     center: ol.proj.fromLonLat(this.coordinates),
        //     zoom: 4,
        //   }),
        // })
        // map.setTarget(this.shadowRoot.querySelector(`#map`))
      })
  }
  render() {
    return html`
      ${this.xMapEl}
    `
  }
}

customElements.define(`x-app`, XApp)

{
  /* <x-map .coordinates=${[37.41, 8.82]}></x-map> */
}
