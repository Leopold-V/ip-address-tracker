import React from 'react'
import { dataType } from '../type'

export const Result = ({data}: {data: dataType}) => {
    return (
        <div 
            className="absolute flex space-x-8 divide-x-2 divide-gray-200 lg:w-3/4 top-0 bg-white rounded-lg py-6 z-50" 
            style={{left: '50%', transform: 'translate(-50%, -50%)'}}
        >
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">IP ADDRESS</h3>
                    <div className="font-medium text-xl">{data.query}</div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">LOCATION</h3>
                    <div className="font-medium text-xl">{data.city} {data.zip}</div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">TIMEZONE</h3>
                    <div className="font-medium text-xl">{data.timezone}</div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">ISP</h3>
                    <div className="font-medium text-xl">{data.isp}</div>
                </div>
            </div>
        </div>
    )
}
