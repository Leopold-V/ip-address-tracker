import { Map } from 'leaflet'
import React from 'react'
import { dataType } from '../type'
import { Carte } from './Carte'
import { Result } from './Result'

export const MainSection = ({data, setMap}: {data: dataType, setMap: (map: Map) => void}) => {
    return (
    <div className="w-full flex-grow relative">
        <Result data={data} />
        <Carte data={data} setMap={setMap} />
    </div>
    )
}
