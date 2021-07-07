import React, { useState } from 'react'
import { MainSection } from './components/MainSection'
import { Search } from './components/Search'
import { dataType } from './type';


function App() {
  const [data, setData] = useState<dataType | null>(null);

  return (
    <div className="flex flex-col h-screen" >
      <Search setData={setData} />
      <MainSection data={data} /> 
    </div>
  )
}

export default App
