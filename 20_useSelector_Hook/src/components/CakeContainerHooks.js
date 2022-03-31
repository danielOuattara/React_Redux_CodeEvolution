
import { useSelector } from 'react-redux';


function CakeContainerHooks() {
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    return (
        <div>
            <h2> Hooks: Number of cakes : {numberOfCakes}</h2>
            <button>Buy cake</button>
            <hr />
        </div>
    )
}

export default CakeContainerHooks; 
 