import React from 'react';

export const Counter = ({count})=>{
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button>+</button>
        </div>
    )
};