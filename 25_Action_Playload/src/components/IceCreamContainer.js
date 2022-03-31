// import { useState } from 'react';
// import { connect } from 'react-redux'
// import { buyIceCream } from '../redux/iceCream/iceCreamAction'

// function IceCreamContainer(props) {
//     const[ iceCreamToBuy, setIceCreamToBuy] = useState(1);

//     return (
//         <div>
//             <h2>Number of ice-cream remaining  : {props.numberOfIceCreams} </h2>
//             <label htmlFor="">
//                 Enter a number of ice-cream : 
//                 <input 
//                    type="number" 
//                    min="1" 
//                    onChange={(event) => setIceCreamToBuy(event.target.value)} 
//                 />
//             </label>
//             <button onClick={() => props.buyIceCream(iceCreamToBuy)}> Buy ice-cream {iceCreamToBuy} </button>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         numberOfIceCreams: state.iceCream.numberOfIceCreams
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch)
//     return {
//         buyIceCream: (quantity) => { dispatch(buyIceCream(quantity))}
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer);




import { useState } from 'react';
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'



function IceCreamContainer(props) {
    const[ iceCreamToBuy, setIceCreamToBuy] = useState(1);

    const handleNumberToCommand = (event) => {
        setIceCreamToBuy(event.target.value)
    }
    const handleIceCreamCommand = (event) => {
        event.preventDefault();
        props.buyIceCream(iceCreamToBuy)
        setIceCreamToBuy(1)
    }

    return (
        <div>
            <h2>Number of Cakes {props.numberOfIceCreams}</h2>
            <form onSubmit={handleIceCreamCommand} >
                <label htmlFor="numberOfCake">
                    Enter a number of Cake(s) : 
                    <input 
                        type="number" 
                        min="1" 
                        onChange={handleNumberToCommand} 
                        value={iceCreamToBuy}
                    />
                </label>
                <button type='submit'>Buy {iceCreamToBuy} cakes</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        buyIceCream: (quantity) => { dispatch(buyIceCream(quantity))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer);
