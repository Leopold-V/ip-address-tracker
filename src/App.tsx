import { Map } from 'leaflet';
import React, { useState } from 'react'
import { MainSection } from './components/MainSection'
import { Search } from './components/Search'
import { dataType } from './type';


function App() {
  const [map, setMap] = useState<Map | null>(null);
  const [data, setData] = useState<dataType>({
    query: "192.212.174.101",
    city: "Rosemead",
    zip: "91770",
    position: [34.0536, -118.084],
    timezone: "America/Los_Angeles",
    isp: "Southern California Edison"
});

  return (
    <div className="flex flex-col h-screen" >
      <Search setData={setData} map={map} />
      <MainSection data={data} map={map} setMap={setMap} /> 
    </div>
  )
}

export default App
