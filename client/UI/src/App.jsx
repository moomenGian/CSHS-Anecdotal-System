import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import { AuthContext } from './Hooks/AuthContext'


function App() {
  return (
    <>  
        <AuthContext.Provider>
          <Homepage/>
        </AuthContext.Provider>
        
    </>
  )
}

export default App