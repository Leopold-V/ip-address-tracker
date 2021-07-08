import { Icon, LatLngExpression, Map, map } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { dataType } from "../type";
import iconMarker from "/images/icon-location.svg";

// @ts-ignore
const icon: Icon = L.icon({
  iconUrl: iconMarker,
});

export const Carte = ({ data, map, setMap }: { data: dataType, map: Map, setMap: (map: Map) => void }) => {
  const [position, setPosition] = useState(data.position);

  useEffect(() => {
    setPosition(data.position);
  }, [data.position]);
  
  return (
    <MapContainer
      style={{ width: "100%", height: "100%", zIndex: 0 }}
      whenCreated={setMap}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      placeholder
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
