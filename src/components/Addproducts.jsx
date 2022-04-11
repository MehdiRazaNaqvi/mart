import { connect } from 'react-redux';

import { useNavigate } from "react-router-dom"
import "../css/add.css";
import { useState } from 'react';
import { add_product } from "../store/action/action"



const App = (props) => {

    let navigate = useNavigate();

    const [data, setdata] = useState({});





    return (




        <body className={props.darktheme? "dark bara" : "bara"} >
            
        

        <div className="add" >  <h1>List Your Product To Millions of Customers </h1>

            <div className="upper" >

                <div className="pehla" >

                    <input onChange={(e) => setdata({ ...data, name: e.target.value })} className="form-control" id="exampleInputEmail1" type="text" placeholder="Enter Name" />

                    <input onChange={(e) => setdata({ ...data, des: e.target.value })} className="form-control" id="exampleInputEmail1" type="text" placeholder="Enter Details" />

                    <input onChange={(e) => setdata({ ...data, price: e.target.value })} className="form-control" id="exampleInputEmail1" type="text" placeholder="Enter Price" />


                </div>


                <div className="dosra">


                    <input onChange={(e) => setdata({ ...data, img: e.target.value })} className="form-control" id="exampleInputEmail1" type="text" placeholder="Enter Image" />

                    <input onChange={(e) => setdata({ ...data, id: e.target.value })} className="form-control" id="exampleInputEmail1" type="text" placeholder="Enter Id" />

                    <input className="form-control" id="exampleInputEmail1" type="text" placeholder="Enter Brand" />


                </div>


            </div>


            <button onClick={() => { props.add_product(data); navigate("/mart") }} className="btn btn-outline-success">Add to Our Mart</button>
        </div>


        </body>


        
    )
}






const mapStateToProps = (state) => ({
            darktheme : state.darktheme
})



const mapDispatchToProps = (dispatch) => ({
    add_product: (data) => dispatch(add_product(data)),

})

export default connect( mapStateToProps , mapDispatchToProps)(App)