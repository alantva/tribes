// React Imports
import { useState } from 'react'

// Molecules Imports
import AppBar from '../molecules/AppBar'
import MenuOverlay from '../molecules/MenuOverlay'

// Component
const AppMenu = ({ title }) => {
  // State
  const [open, setOpen] = useState(false)
  
  // Methods
  const handleToggleMenu = () => {
    setOpen(!open)
  }
  // Render
  return (
    <>
      <AppBar title={title} onToggleMenu={handleToggleMenu} />
      <MenuOverlay open={open} onToggleMenu={handleToggleMenu} />
    </>
  )
}

export default AppMenu
