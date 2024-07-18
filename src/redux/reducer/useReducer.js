import { ADDCARD } from "../action/types"

export const initialState = {
    addBasket :JSON.parse(localStorage.getItem("addBasket"))|| []
}
const reducer = (state = initialState,action) =>{
    switch(action.type){
        case ADDCARD:
            localStorage.setItem("addBasket",JSON.stringify([...state.addBasket,action.foods]))
  return {
    addBasket:[...state.addBasket,action.foods]
  }
  default:
  return state
    }
}
export default reducer