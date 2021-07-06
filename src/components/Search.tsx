import React from 'react'

export const Search = () => {
    return (
        <div className="h-60 bg-cover bg-center" style={{backgroundImage: "url('images/pattern-bg.png')"}}>
            <form className="flex flex-col items-center space-y-4 py-6">
                <h1 className="text-white font-bold text-2xl">IP Address Tracker</h1>
                <div className="flex items-center rounded-lg overflow-hidden">
                    <input
                        className="w-96 px-5 py-3 flex"
                        type="text"
                        placeholder="Search for any IP address or Domain"
                    />
                    <button className="px-5 py-3 h-full bg-black flex items-center">
                        <img className="w-3 h-3" src="../../images/icon-arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </form>
        </div>
    )
}
