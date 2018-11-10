
const ratingFilter = (state = "",action)=>{
    
        return   action.rating !==undefined && action.type ==="RATE-FILTER" ? action.rating:1
        
    
}
export default ratingFilter