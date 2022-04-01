import { useNavigate, useParams } from "react-router-dom"
import { connect } from 'react-redux';
import "./details.css"

const Details = (props) => {

    // console.log(props.state)
    let product = {}
    const { id } = useParams()
    let navigate = useNavigate()
    


    { props.state.map((v) => { if (v.id == id) { product = v } }) }
    console.log(product)




    return (


        <div className="one">

            <div className="pic" >  <img className="details_img" src={product.img}  /> </div>

            <div className="content">
                <div className="itemm"> <h1>{product.name}</h1> </div>
                <div className="itemm"> <h4>{product.des}</h4> </div>
                <div className="itemm"> <h3>Select Color</h3> <div className="pallette"> <div className="color color1"></div> <div className="color color2"></div><div className="color color3"></div><div className="color color4"></div> </div> </div>
                <div className="itemm"> <h2>Rs. {product.price}</h2> </div>
                <div className="itemm item_last"> <button  className="btn btn-outline-success" >Add to cart</button> <button onClick={() => navigate("/") } className="btn btn-outline-dark" >Back to Mart</button> </div>
            </div>
            

        </div>
    )






}


const mapStateToProps = (state) => ({
    state: state.products
})

export default connect(mapStateToProps, null)(Details)