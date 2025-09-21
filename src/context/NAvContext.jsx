import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export const NavbarContext = createContext()
export const NavColourContext = createContext()
const NAvContext = ({children}) => {
  
  const [navOpen, setNavOpen] = useState(false)
  const [navColour, setNavColour] = useState('white')

  const locate = useLocation().pathname
  useEffect(function(){
    if(locate == '/projects'){
      setNavColour('black')
    }
    else {
      setNavColour('white')
    }
  })
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavColourContext.Provider value={[navColour,setNavColour]}>
          {children}
        </NavColourContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NAvContext