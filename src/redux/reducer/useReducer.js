import { ADDCARD } from "../action/types"
import { REMOVECARD } from "../action/types"


export const initialState = {
    addBasket :JSON.parse(localStorage.getItem("addBasket"))|| []
}
const reducer = (state = initialState,action) =>{
    switch(action.type){
        case ADDCARD:
       
  return {
    addBasket:[...state.addBasket,action.foods]
  }
case REMOVECARD:
  return {
    addBasket:[...state.addBasket.filter(product=>product !==action.data.id)]

  }

  default:
  return state
    }
}
export default reducer