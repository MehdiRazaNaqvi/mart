
import { database, auth } from "../../firebase/firebase"

import { ref, onValue, set, get, child, getDatabase } from "firebase/database";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";






// const add_product = (data) => {
//     return (dispatch) => {
//         // console.log(data)

//         // writeUserData(data)
//         dispatch({ type: "add", payload: data })



//     }
// }




const dark_red = () => {
    return (dispatch) => {

        dispatch({ type: "theme" })

    }
}





const getitems = () => {



    return (dispatch) => {

        console.log("chalrha")


        // const starCountRef = ref(database, 'items/');
        // onValue(starCountRef, (snapshot) => {
        //     const data = snapshot.val();
        //     // console.log(data)

        //     const fbdata = Object.values(data)
        //     // console.log(fbdata)

        //     dispatch({ type: "firebase", payload: fbdata })

        // });



        // const dbRef = ref(getDatabase());
        // get(child(dbRef, `items/`)).then((snapshot) => {
        //     if (snapshot.exists()) {
        //         // console.log(snapshot.val());

        //         const fbdata = Object.values(snapshot.val())
        //         // console.log(fbdata)
        //     dispatch({ type: "firebase", payload: fbdata })

        //     } else {
        //         console.log("No data available");
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });






        const db = getDatabase();


        return onValue(ref(db, '/items/'), (snapshot) => {
            const fbdata = Object.values(snapshot.val());


            // console.log(fbdata)
            dispatch({ type: "firebase", payload: fbdata })



        });
        // , {
        //     onlyOnce: true
        // });





    }




}




const google_login = () => {




    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*'
    }




    return (dispatch) => {





        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("hahahahhahahah")


                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                const client = { name: user.displayName, photo: user.photoURL }

                fetch('http://localhost:4000/adduser', {

                    method: 'post',
                    body: JSON.stringify(client),
                    headers: headers



                })


                dispatch({ type: "sign", payload: client })


            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // const email = error.email;

                // const credential = GoogleAuthProvider.credentialFromError(error);

            });






    }
}






const writeUserData = (data) => {

    return (dispatch) => {


        var rnd = "";
        var char = "ABJNDKJCDWCNCKNLWDjbjbdcnwkdncjwdnc"
        for (var i = 0; i < char.length; i++) {


            rnd += char.charAt(Math.floor(Math.random() * char.length))

        }


        set(ref(database, 'items/' + rnd), {

            name: data.name,
            img: data.img,
            id: rnd,
            des: data.des,
            price: data.price


        });


    }


}





const add_to_cart = (v) => {
    return (dispatch) => {

        dispatch({ type: "add_to_cart", payload: v })
    }
}





const filter = (searchword) => {

    return (dispatch) => {
        dispatch({ type: "filter", payload: searchword })
    }
}






export {
    // add_product,
    dark_red,
    getitems,
    google_login,
    writeUserData,
    add_to_cart,
    filter,
}