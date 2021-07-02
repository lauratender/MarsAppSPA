import React, { useContext } from 'react';
import { CountClickContext } from './AppContent';

export function CountClicks() {
    const countContext = useContext(CountClickContext);
    return (
        <div>
            <button onClick={() => countContext.editCount(countContext.count)}>
                Click me!
            </button> 
        </div>
    );
}

export default CountClicks;