import React from 'react'

import Image from './Image'


function Logo({className}) {
    return (
        <Image
            className={className}
            src={require('../assets/images/waterfront-analytics-logo-white.png')}
            width={300}
            height={150}
            alt="Open" />
    )
}

export default Logo