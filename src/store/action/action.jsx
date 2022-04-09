
import {database} from "../../firebase/firebase"

import { ref, onValue} from "firebase/database";



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





const getitems = () => {



    return (dispatch) => {
        
        
        const starCountRef = ref(database, 'items/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            // console.log(data)

            const fbdata = Object.values(data)
            console.log(fbdata)

            dispatch( { type : "firebase" , payload: fbdata} )


       

        });




 
     

    }




}









export {
    add_product,
    dark_red,
    getitems
}