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

function MapComponent({ users }) {
  const [position, setPosition] = useState();
  navigator.geolocation.watchPosition((position) => {
    setPosition([position.coords.latitude, position.coords.longitude]);
  });

  return (
    <>
      {position && (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {users.map((el, i) => {
            return (
              <Marker key={i} position={el.position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </>
  );
}

export default MapComponent;
