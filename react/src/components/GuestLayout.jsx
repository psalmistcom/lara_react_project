import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
    return (
        <div>
            This the guest outlet
            <Outlet />
        </div>
    )
}

export default GuestLayout