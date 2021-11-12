
import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamAction';

function IceCreamContainerHooks() {
    const[ iceCreamToBuy, setIceCreamToBuy] = useState(1);
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2> Hooks - Number of ice cream remaining : {numberOfIceCreams}</h2>
            <label htmlFor="">
                Enter a number of ice-cream : 
                <input 
                   type="number" 
                   min="1" 
                   onChange={(event) => setIceCreamToBuy(event.target.value)} 
                />
            </label>
            <button onClick={() => dispatch(buyIceCream(iceCreamToBuy))}>Buy cake {iceCreamToBuy}</button>
        </div>
    )
}

export default IceCreamContainerHooks;  
 