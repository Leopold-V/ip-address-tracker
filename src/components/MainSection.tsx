import React from 'react'
import { dataType } from '../type'
import { Map } from './Map'
import { Result } from './Result'

export const MainSection = ({data}: {data: dataType | null}) => {
    return (
    <div className="w-full flex-grow relative">
        <Result />
        <Map />
    </div>
    )
}
