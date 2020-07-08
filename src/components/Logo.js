import React from 'react'
import {useLocation} from 'react-router-dom'

import Image from './Image'

function Logo({className}) {
    const location = useLocation()

    const logoFile = location.pathname === '/' ?
        ('waterfront-analytics-logo-white.png')
        :('waterfront-analytics-logo-black.png')

    return (
        <Image
            className={className}
            src={require(`../assets/images/${logoFile}`)}
            width={300}
            height={150}
            alt="Open" />
    )
}

export default Logo