import L from "leaflet";
import './L.css';



export function createPhotoMarker(image: string) {
    return L.divIcon({
        className: "custom-marker",
        html: `
      <div class="marker-wrapper">
        <img src="${image}" />
      </div>
    `,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
    });
}
