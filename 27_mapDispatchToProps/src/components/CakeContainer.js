import { useState } from 'react'; 
import { connect } from 'react-redux';
import { buyCake } from './../redux/cakes/cakeAction';

function CakeContainer(props) {
    const[ cakeToBuy, setCakeToBuy] = useState(1);
    return (
        <div>
            <h2>Number of Cakes remaining :  {props.numberOfCakes}</h2>
            <label htmlFor="">
                Enter a number of Cake(s) : 
                <input 
                   type="number" 
                   min="1" 
                   onChange={(event) => setCakeToBuy(event.target.value)} 
                />
            </label>
            <button onClick={() =>props.buyCake(cakeToBuy)}>Buy {cakeToBuy} cakes</button>
        </div>
    )
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
