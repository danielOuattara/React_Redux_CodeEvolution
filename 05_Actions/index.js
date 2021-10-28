
const BUY_CAKE = "BUY_CAKE";

//-------------------------------

{ 
    type: BUY_CAKE
    info: 'First redux action'
}

//----------------------------------------------

function buyCake() {  // Action :=  function that return an object of any shape
    return { 
        type: "BUY_CAKE",
        info: "First redux action"
    }
}
