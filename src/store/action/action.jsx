
import { database, auth } from "../../firebase/firebase"

import { ref, onValue, set } from "firebase/database";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";






const add_product = (data) => {
    return (dispatch) => {

        writeUserData(data)
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
            console.log(data)

            const fbdata = Object.values(data)
            // console.log(fbdata)

            dispatch({ type: "firebase", payload: fbdata })




        });







    }




}



const google_login = () => {
    return (dispatch) => {

        // console.log("hahahahhahahah")



        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                const client = { name: user.displayName, photo: user.photoURL }
                dispatch({ type: "sign", payload: client })


            }).catch((error) => {

                // const errorCode = error.code;
                // const errorMessage = error.message;

                // const email = error.email;

                // const credential = GoogleAuthProvider.credentialFromError(error);

            });





    }
}






const writeUserData = (data) => {



        var rnd = "";
        var char = "ABJNDKJCDWCNCKNLWDjbjbdcnwkdncjwdnc"
        for (var i = 0 ; i < char.length ; i++  ){


                rnd += char.charAt(Math.floor(Math.random() * char.length))

        }


      set(ref(database, 'items/' + rnd  ), {

        name : data.name,
        img : data.img,
        id : rnd,
        des : data.des,
        price : data.price


      });


}






export {
    add_product,
    dark_red,
    getitems,
    google_login,
    writeUserData
}