import React, { useContext } from 'react';
import { CountClickContext } from './AppContent';

function MarsPicturesContainer() {
    const countContext = useContext(CountClickContext);

    return (
        <p>You clicked {countContext.count} times</p>
    );
}

export default MarsPicturesContainer;