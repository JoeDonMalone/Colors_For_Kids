import React from "react";

export default function Square() {
    return (
        <main >
            
            <div className="square main-content" style={{
            display: 'inline-block',
            boxSizing: 'border-box',
            position: 'absolute',
            backgroundColor: 'red',
            width: `300px`,
            height: `300px`,
            left: `0%`,
            top: `0%`,
            // borderRadius: "50%",
        }}/>

        </main>)
}