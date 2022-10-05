function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

function dispatch(action){
  state = changeState(state, action);
  render();
}

function render(){
  document.body.textContent = state.count;
}



console.log(dispatch({ type: "counter/increment"}));
console.log(dispatch({ type: "counter/increment"}));
console.log(dispatch({ type: "counter/increment"}));
console.log(dispatch({ type: "counter/increment"}));
console.log(dispatch({ type: "counter/increment"}));

// console.log(changeState(state, action));
// console.log(changeState(state, action));
// console.log(changeState(state, action));
// console.log(changeState(state, action));
