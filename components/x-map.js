import { html, LitElement } from "lit-element"

class XMap extends LitElement {
  constructor() {
    super()
    // this.coordinates = [37.41, 8.82]
  }

  static get properties() {
    return { coordinates: { type: Array } }
  }

  firstUpdated() {
    fetch(`http://localhost:4000/api/ipaddresses`)
      .then(response => {
        // return response.json();
        console.log(response)
        console.log(`hej`)
        return response.json()
      })
      .then(myJson => {
        console.log(myJson[0].x)
        console.log(myJson[0].y)

        this.coordinates = [myJson[0].x, myJson[0].y]
        // this.coordinates = [37.41, 8.82]

        let map = new ol.Map({
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM(),
            }),
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat(this.coordinates),
            zoom: 4,
          }),
        })
        map.setTarget(this.shadowRoot.querySelector(`#map`))
      })
  }
  render() {
    return html`
      <style>
        .map {
          width: 30vw;
        }
      </style>
      <div id="map" class="map"></div>
    `
  }
}

customElements.define(`x-map`, XMap)
