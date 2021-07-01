import React, { useState, useEffect } from 'react';

export function CountClicks() {

    const [count, setCount] = useState(0); 

    useEffect(() => {
        const countValue: string = localStorage.getItem("clickCount") || "0";
        const count: number = parseInt(countValue);
        setCount(count);
    }, []);

    function editCount(count: number){
        localStorage.setItem("clickCount", (count + 1).toString());
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p> 
            <button onClick={() => editCount(count)}>
                Click me!
            </button> 
        </div>
    );
}

export default CountClicks;