
const modalReducer = (state=false,action)=>{
 
    return action.type ==="TOGGLE-MODAL"  ? ! state : false

}
export default modalReducer