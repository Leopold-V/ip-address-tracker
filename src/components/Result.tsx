import React from 'react'
import { dataType } from '../type'

export const Result = ({data}: {data: dataType}) => {
    return (
        <div 
            className="absolute w-3/4 top-0 flex flex-col lg:flex-row lg:space-x-8 lg:divide-x-2 lg:divide-gray-200 lg:items-center bg-white rounded-lg py-3 lg:py-6 z-50" 
            style={{left: '50%', transform: 'translate(-50%, -50%)'}}
        >
            <div className="lg:w-1/4 text-center">
                <div className="px-4 lg:px-10 py-1 lg:py-0">
                    <h3 className="py-2 text-xs font-medium text-gray-400">IP ADDRESS</h3>
                    <div className="font-medium text-base">{data.query}</div>
                </div>
            </div>
            <div className="lg:w-1/4 text-center">
                <div className="px-4 lg:px-10 py-1 lg:py-0">
                    <h3 className="py-2 text-xs font-medium text-gray-400">LOCATION</h3>
                    <div className="font-medium text-base">{data.city} {data.zip}</div>
                </div>
            </div>
            <div className="lg:w-1/4 text-center">
                <div className="px-4 lg:px-10 py-1 lg:py-0">
                    <h3 className="py-2 text-xs font-medium text-gray-400">TIMEZONE</h3>
                    <div className="font-medium text-base">{data.timezone}</div>
                </div>
            </div>
            <div className="lg:w-1/4 text-center">
                <div className="px-4 lg:px-10 py-1 lg:py-0">
                    <h3 className="py-2 text-xs font-medium text-gray-400">ISP</h3>
                    <div className="font-medium text-base">{data.isp}</div>
                </div>
            </div>
        </div>
    )
}
