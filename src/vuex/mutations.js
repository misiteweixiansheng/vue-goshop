
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from "./mutations-type" 
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}) {
    state.foodCategotys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
}