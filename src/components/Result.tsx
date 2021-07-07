import React from 'react'

export const Result = () => {
    return (
        <div 
            className="absolute flex space-x-8 divide-x-2 divide-gray-200 lg:w-3/4 top-0 bg-white rounded-lg py-6 z-50" 
            style={{left: '50%', transform: 'translate(-50%, -50%)'}}
        >
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">IP ADDRESS</h3>
                    <div className="font-medium text-xl">192.212.174.101</div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">LOCATION</h3>
                    <div className="font-medium text-xl">Brooklyn, NY 10001</div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">TIMEZONE</h3>
                    <div className="font-medium text-xl">UTC-05:00</div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="px-10">
                    <h3 className="py-2 text-xs font-medium text-gray-400">ISP</h3>
                    <div className="font-medium text-xl">SpaceX Starlink</div>
                </div>
            </div>
        </div>
    )
}
