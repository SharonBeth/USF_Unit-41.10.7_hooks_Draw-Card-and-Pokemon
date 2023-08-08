import React, { useState } from 'react';

const useFlipState = (initialState = true) => {
    const [isFlipped, setFlipped] = useState(initialState);

    const flip = () => {
        setFlipped(isUp => !isUp)
    }
    return [isFlipped, flip]
}

export default useFlipState;