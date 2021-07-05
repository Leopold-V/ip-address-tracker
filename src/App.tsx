import React from 'react'
import { MainSection } from './components/MainSection'
import { Search } from './components/Search'

function App() {

  return (
    <div className="bg-pattern bg-cover bg-center text-red-400"  style={{backgroundImage: "url('images/pattern-bg.png')"}}>
     <Search />
     <MainSection /> 
    </div>
  )
}

export default App
