import React from 'react'
import { Map } from './Map'
import { Result } from './Result'

export const MainSection = () => {
    return (
    <div className="w-full flex-grow relative">
        <Result />
        <Map />
    </div>
    )
}
