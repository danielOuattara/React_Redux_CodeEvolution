
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeAction';



function CakeContainerHooks() {
    const numberOfCakes = useSelector(state => state.numberOfCakes);
    const dispatchHook = useDispatch();
    return (
        <div>
            <h2> Hooks - Number of cakes : {numberOfCakes}</h2>
            <button onClick={() => dispatchHook(buyCake())}>Buy cake</button>
            <hr />
        </div>
    )
}

export default CakeContainerHooks;  
 