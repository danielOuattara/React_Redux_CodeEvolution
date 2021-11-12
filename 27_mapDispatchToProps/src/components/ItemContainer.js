import React from 'react'
import { connect } from 'react-redux';

// this component display the number of both cakes and ice cream  in the store

function ItemContainer(props) {
    return (
        <div>
            <h2>Items : {props.item} </h2>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps ) => {
    const itemState = ownProps.cake ? 
        state.cake.numberOfCakes : state.iceCream.numberOfIceCreams;
    return {
        item : itemState
    };
}

export default connect(mapStateToProps) (ItemContainer);
