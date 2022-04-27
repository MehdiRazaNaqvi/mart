
import { connect } from "react-redux"
import Example from "./nav.jsx"

import "../css/cart.css"

const Cart = (props) => {


    

    let total = 0;



    props.cart.map((v) => {
        total = parseInt(v.price) + parseInt(total)

    })

    return (

        <div className= {props.darktheme == false? "cart0" :"cart0 dark"} >

            <Example />


            {props.cart.length > 0 ?


                <div className="cart1" >


                    {props.cart.map((v, i) => (
                        <span className= {props.darktheme== false?  "cartrow" : "cartrow dark" }  key={i} >
                            <p> {v.name} </p>



                            <img className="cartitemimg" src={v.img} />
                            <p> {v.price}</p>

                        </span>

                    ))}



                    <span className="cartrow lastrow" >
                        <p>"/-"</p>
                        <p>"/-" </p>





                        <p className="total" > {total} </p>

                    </span>

                    <button className="btn paybtn btn-outline-warning">Proceed to Checkout</button>

                </div>


                :
               <h6>Your Cart is empty</h6>
               
               }

        </div>

    )
}


const mapStateToProps = (state) => ({
    cart: state.cart,
    darktheme : state.darktheme
})

export default connect(mapStateToProps, null)(Cart)