
// import {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { buyCake } from '../redux/cakes/cakeAction';



// function CakeContainerHooks() {
//     const[ cakeToBuy, setCakeToBuy] = useState(1);
//     const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
//     const dispatch = useDispatch();
//     return (
//         <div>
//             <h2> Hooks - Number of cakes remaining : {numberOfCakes}</h2>
//             <label htmlFor="">
//                 Enter a number of Cake(s) : 
//                 <input 
//                    type="number" 
//                    min="1" 
//                    onChange={(event) => setCakeToBuy(event.target.value)} 
//                 />
//             </label>
//             <button onClick={() => dispatch(buyCake(cakeToBuy))}>Buy cake</button>
//         </div>
//     )
// }

// export default CakeContainerHooks;  
 



import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeAction';



function CakeContainerHooks() {
    const[ cakeToBuy, setCakeToBuy] = useState(1);
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();

    const handleNumberToCommand = (event) => {
        setCakeToBuy(event.target.value)
    }

    const handleCakeCommand = (event) => {
        event.preventDefault();
        dispatch(buyCake(cakeToBuy))
        setCakeToBuy(1)
    }
    
    return (
        <div>
            <h2>Number of Cakes {numberOfCakes}</h2>
            <form onSubmit={handleCakeCommand} >
                <label htmlFor="numberOfCake">
                    Enter a number of Cake(s) : 
                    <input 
                        type="number" 
                        min="1" 
                        onChange={handleNumberToCommand} 
                        value={cakeToBuy}
                    />
                </label>
                <button type='submit'>Buy {cakeToBuy} cakes</button>
            </form>
        </div>
    )
}

export default CakeContainerHooks;  
 