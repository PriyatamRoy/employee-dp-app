import React from 'react'
import "../App.css";

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '1px',
        backgroundColor: "#0093ff",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle} className="mrgnbtm">
            <h1>Employee Database</h1>
        </div>
    )
}