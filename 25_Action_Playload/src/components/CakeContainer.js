// import { useState } from 'react'; 
// import { connect } from 'react-redux';
// import { buyCake } from './../redux/cakes/cakeAction';

// function CakeContainer(props) {
//     const[ cakeToBuy, setCakeToBuy] = useState(1);
//     return (
//         <div>
//             <h2>Number of Cakes {props.numberOfCakes}</h2>
//             <label htmlFor="">
//                 Enter a number of Cake(s) : 
//                 <input 
//                    type="number" 
//                    min="1" 
//                    onChange={(event) => setCakeToBuy(event.target.value)} 
//                 />
//             </label>
//             <button onClick={() =>props.buyCake(cakeToBuy)}>Buy {cakeToBuy} cakes</button>
//         </div>
//     )
// }


// const mapStateToProps = (state) => {
//     return {
//         numberOfCakes: state.cake.numberOfCakes
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyCake: (cakeToBuy) => { dispatch(buyCake(cakeToBuy))}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);


//-------------------------------------------------------------------------------


import { useState } from 'react'; 
import { connect } from 'react-redux';
import { buyCake } from './../redux/cakes/cakeAction';



function CakeContainer(props) {
    const[ cakeToBuy, setCakeToBuy] = useState(1);

    const handleNumberToCommand = (event) => {
        setCakeToBuy(event.target.value)
    }
    const handleCakeCommand = (event) => {
        event.preventDefault();
        props.buyCake(cakeToBuy)
        setCakeToBuy(1)
    }

    return (
        <div>
            <h2>Number of Cakes {props.numberOfCakes}</h2>
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
    );
}


const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (cakeToBuy) => { dispatch(buyCake(cakeToBuy))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
