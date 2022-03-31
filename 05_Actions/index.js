
const BUY_CAKE = "BUY_CAKE";  // this way help to avoid spelling mistakes

//-------------------------------

const BUY_CAKE = "BUY_CAKE";  // this way help to avoid spelling mistakes

{ 
    type: BUY_CAKE
    info: 'First redux action'
}

//----------------------------------------------

const BUY_CAKE = "BUY_CAKE";  // this way help to avoid spelling mistakes

function buyCake() {  // Action :=  function that return an object of any shape
    return { 
        type: "BUY_CAKE",
        info: "First redux action"
    }
}
