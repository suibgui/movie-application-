


const titleFilter=(state ="",action)=>{

   return    action.type === "TITLE-FILER" && action.title !== undefined ? action.title:state

}
export default titleFilter