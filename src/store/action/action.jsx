


const add_product = (data) => {
    return (dispatch) => {

     
        dispatch({ type: "add", payload: data })



    }
}


export {
    add_product
}