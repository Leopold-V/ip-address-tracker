import React, { FormEvent, useRef } from 'react'
import { dataType } from '../type';

const API_URL = 'http://ip-api.com/json'

export const Search = ({setData}: {setData: (data: dataType) => void}) => {
    const input_ref = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (input_ref.current?.value) {
            try {
                const response = await fetch(`${API_URL}/${input_ref.current.value}`);
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="h-60 bg-cover bg-center" style={{backgroundImage: "url('images/pattern-bg.png')"}}>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 py-6">
                <h1 className="text-white font-medium text-2xl">IP Address Tracker</h1>
                <div className="flex items-center rounded-lg overflow-hidden">
                    <input
                        ref={input_ref}
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
