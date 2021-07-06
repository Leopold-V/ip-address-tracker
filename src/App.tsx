import React from 'react'
import { MainSection } from './components/MainSection'
import { Search } from './components/Search'

function App() {

  return (
    <div className="flex flex-col h-screen" >
      <Search />
      <MainSection /> 
    </div>
  )
}

export default App
