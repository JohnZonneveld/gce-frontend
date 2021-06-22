import React from 'react'
import cog_logo from '../gfx/cog_logo_bw.png'

function CogLogo() {
    const size = {
        height: 40,
        width: 40
    }
    return (
        // <>
            <img style={size} src={cog_logo} alt="cog_logo"></img>
        // </>
    )
}

export default CogLogo