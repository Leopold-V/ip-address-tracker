import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position: LatLngExpression = [51.505, -0.09]

export const Map = () => {
    return (
        <MapContainer style={{width: '100%', height: '100%', zIndex: 0}} center={position} zoom={13} scrollWheelZoom={false} placeholder>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
