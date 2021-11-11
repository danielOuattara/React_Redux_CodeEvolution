
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice-creams : {props.numberOfIceCreams} </h2>
            <button onClick={() => props.buyIceCream()}> Buy ice-cream</button>
        </div>
    )
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
        buyIceCream: () => { dispatch(buyIceCream())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer);
