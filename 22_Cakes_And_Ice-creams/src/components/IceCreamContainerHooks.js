
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamAction';

function IceCreamContainerHooks() {
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2> Hooks - Number of cakes : {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy cake</button>
        </div>
    )
}

export default IceCreamContainerHooks;  
 