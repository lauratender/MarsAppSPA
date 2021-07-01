import React, { useState, useEffect } from 'react';
import CountClicks from './CountClicks';
import MarsPictures from './MarsPictures';


interface CountClickContextType {
    setCount: (count: number) => void;
    count: number;
    editCount: (count: number) => void;
}

export const CountClickContext = React.createContext<CountClickContextType>({
    count: 0,
    setCount: () => {},
    editCount: () => {}
})

function AppContent() {
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
        <CountClickContext.Provider value = {{count, setCount, editCount}}>
            <CountClicks/>
            <MarsPictures/>
        </CountClickContext.Provider>
    );
}

export default AppContent;