import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationItem.css'
import { IconButton } from '@mui/material'

const NavigationItem = ({icon, label, to}) => {
  return (
    <NavLink to={to} className="navigation-item">
        <IconButton>{icon}</IconButton>
        <span className='label'>{label}</span>
    </NavLink>
  )
}

export default NavigationItem