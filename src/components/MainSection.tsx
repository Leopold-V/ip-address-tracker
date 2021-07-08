import React from 'react'
import { dataType } from '../type'
import { Carte } from './Carte'
import { Result } from './Result'

export const MainSection = ({data, map, setMap}: {data: dataType, map: any, setMap: any}) => {
    return (
    <div className="w-full flex-grow relative">
        <Result data={data} />
        <Carte data={data} map={map} setMap={setMap} />
    </div>
    )
}
