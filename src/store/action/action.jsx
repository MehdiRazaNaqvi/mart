
import { database } from "../../firebase/firebase"

import { ref, onValue } from "firebase/database";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../../firebase/firebase"




const add_product = (data) => {
    return (dispatch) => {


        dispatch({ type: "add", payload: data })



    }
}




const dark_red = () => {
    return (dispatch) => {

        dispatch({ type: "theme" })

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

            dispatch({ type: "firebase", payload: fbdata })




        });







    }




}



const google_login = () => {
    return () => {

        console.log("hahahahhahahah")



        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                console.log(user.displayName)
            }).catch((error) => {

                // const errorCode = error.code;
                // const errorMessage = error.message;

                // const email = error.email;

                // const credential = GoogleAuthProvider.credentialFromError(error);

            });



    }
}






export {
    add_product,
    dark_red,
    getitems,
    google_login
}