
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeAction';

function CakeContainerHooks() {
    const[ cakeToBuy, setCakeToBuy] = useState(1);
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2> Hooks - Number of cakes remaining : {numberOfCakes}</h2>
            <label htmlFor="">
                Enter a number of Cake(s) : 
                <input 
                   type="number" 
                   min="1" 
                   onChange={(event) => setCakeToBuy(event.target.value)} 
                />
            </label>
            <button onClick={() => dispatch(buyCake(cakeToBuy))}>Buy cake</button>
        </div>
    )
}

export default CakeContainerHooks;  
 