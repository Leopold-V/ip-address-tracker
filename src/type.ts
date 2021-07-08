import { LatLngExpression } from "leaflet";

export type dataType = {
    query: string,
    city: string,
    zip: string,
    position: LatLngExpression,
    timezone: string,
    isp: string
}
  