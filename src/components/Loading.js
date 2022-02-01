import React from "react";
import '../styles/Planet.css'

export default function Loading() {
    return (
        <>
            <div>
                <img src={require('../images/loading.gif')} alt="loading..." className="loading-gif" />
            </div>
            <div>
                <img src={require('../images/sand-dunes.png')} alt="loading..." className="sand-background" />
            </div>
        </>
    )
}