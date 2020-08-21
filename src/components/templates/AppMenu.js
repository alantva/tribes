import { useState } from 'react'
import AppBar from '../molecules/AppBar'
import MenuOverlay from '../molecules/MenuOverlay'

const AppMenu = ({ title }) => {
  const [open, setOpen] = useState(false)
  
  const handleToggleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar title={title} onToggleMenu={handleToggleMenu} />
      <MenuOverlay open={open} onToggleMenu={handleToggleMenu} />
    </>
  )
}

export default AppMenu
