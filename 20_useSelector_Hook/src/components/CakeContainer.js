import { connect } from 'react-redux'
import { buyCake } from './../redux/cakes/cakeAction'

function CakeContainer(props) {
    console.log(props)
    return (
        <div>
            <h2>Number of Cakes {props.numberOfCakes}</h2>
            <button onClick={() =>props.buyCake()}>Buy cake</button>
            <hr />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => { dispatch(buyCake())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
