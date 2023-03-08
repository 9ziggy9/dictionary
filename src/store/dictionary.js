const initialState = {
  msgs: [],
};

export default function dictionaryReducer(state=initialState, action) {
  switch(action.type) {
  case "HELLO": {
    console.log("Hello, world!");
    return {"msg": "HELLO"};
  }
  case "GOODBYE": {
    console.log("Goodbye, moon!");
    return {"msg": "GOODBYE"};
  }
  default: {
    return state;
  }
  }
}
