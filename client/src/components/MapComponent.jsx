import { useEffect, useState } from "react";
import {
  Circle,
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";

function MapComponent({ users }) {
  const [position, setPosition] = useState();
  navigator.geolocation.watchPosition((position) => {
    setPosition([position.coords.latitude, position.coords.longitude]);
  });

  // aturan marker
  const markerIcon = new L.Icon({
    iconUrl: "../../public/redMarker.png",
    iconSize: [40, 40],
    iconAnchor: [17, 30],
    popupAnchor: [1, -30],
  });
  const name = localStorage.getItem("name");

  return (
    <>
      {position && (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {users.map((el, i) =>
            name === el.name ? (
              <Marker key={i} position={el.position} icon={markerIcon}>
                <Popup>{el.name}</Popup>
              </Marker>
            ) : (
              <Marker key={i} position={el.position}>
                <Popup>{el.name}</Popup>
              </Marker>
            )
          )}
        </MapContainer>
      )}
    </>
  );
}

export default MapComponent;
