


const add_product = (data) => {
    return (dispatch) => {

     
        dispatch({ type: "add", payload: data })



    }
}




const dark_red = () => {
return(dispatch) => {
    
    dispatch({type : "theme"})

}
}








export {
    add_product,
    dark_red
}