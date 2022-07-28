import { useNavigate, useParams } from "react-router-dom"
import { connect } from 'react-redux'
import "../css/details.css"

import { add_to_cart } from "../store/action/action"

import Example from './nav'

const Details = (props) => {

    // console.log(props.state)
    let product = {}
    const { name } = useParams()
    let navigate = useNavigate()



    

    { props.state.map((v) => { if (v.id == name) { product = v } }) }

    // console.log(product)




    return (


        <div className={props.darktheme ? "one dark" : "one"} >


            <div className="nav">

                <Example />

            </div>






            <div className="details_div">

                <div className="pic" >  <img className="details_img" src={product.img} /> </div>

                <div className="content">
                    <div className="itemm"> <h1>{product.name}</h1> </div>
                    <div className="itemm"> <h4>{product.des}</h4> </div>

                    {/* <div><input type="number" placeholder="quantity" /></div> */}
                    {/* <div className="itemm"> <h3>Select Color</h3> <div className="pallette"> <div className="color color1"></div> <div className="color color2"></div><div className="color color3"></div><div className="color color4"></div> </div> </div> */}
                    <div className="itemm"> <h2>Rs. {product.price}</h2> </div>
                    <div className="itemm item_last"> <button className="btn add_btn btn-outline-success" onClick={() => props.add_to_cart(product)} >Add to cart</button> <button onClick={() => navigate("/mart")} className={props.darktheme ? "btn back_btn btn-outline-light" : "btn back_btn btn-outline-dark"} >Back to Mart</button> </div>
                </div>




            </div>

        </div>
    )






}


const mapStateToProps = (state) => ({
    state: state.products,
    darktheme: state.darktheme
})



const mapDispatchToProps = (dispatch) => ({
    add_to_cart: (product) => dispatch(add_to_cart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)