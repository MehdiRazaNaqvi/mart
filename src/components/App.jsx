
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../css/App.css";
import { add_product, dark_red, getitems , filter } from "../store/action/action";
import Example from "./nav"


import { useLayoutEffect } from 'react';






function App(props) {


  let navigate = useNavigate()




   



  useEffect(() => {

    console.log("arha hai apun")
    // setTimeout( navigate("/mart/loader") , 5000);


    if (props.state.length < 9) {
      props.getitems()

    }



  }, [])





  const [search, setsearch] = useState({ var: "", bool: false });


 





  return (

    <div className="maha">




      <div className="nav">
        <Example />
      </div>



      <div className={props.darktheme ? "parent dark" : "parent"}>



        <div className="left" >
          <button onClick={() => props.filter()}>FILTER</button>
          {/* <select onChange={() => props.dark_red() } className="btn btn-outline-light custom-select mr-sm-2" id="inlineFormCustomSelect">

            <option defaultChecked value="1">☀️</option>
            <option value="2">🌙</option>

          </select> */}


          {/* <button className='btn btn-outline-light' onClick={() => props.getitems()}>Fetch</button> */}




        </div>




        <div className="center">



          <div className="search">

            {/* <img src="https://images.priceoye.pk/pakistan-priceoye-slider-1sh6x.png" className='cover' />  */}
            <img src="https://images.priceoye.pk/pakistan-priceoye-slider-1sh6x.png" className='cover' />



            {/* <input placeholder='Search' className="form-control" id="exampleInputEmail1" onChange={(e) => {


              setsearch({ var: e.target.value })




            }} type="text" /> */}

          </div>



          <div className="main">



            {props.state.map((v, i) => (


              <span className={search.var == "" ? "span" : "span invisible"} key={i}>


                {/* {search.var.includes(v.name) ? setsearch({ ...search, bool: true }) : null} */}


                <div onClick={() => navigate(`/mart/details/${v.name}`)} className="card">

                  <img src={v.img} className="card-img" />
                  <div className="card-img-overlay">
                    <h6 className="card-title">{v.name}</h6>
                    <h6 className='price'>Rs. {v.price}</h6>
                  </div>

                </div>



              </span>

            )




            )}

          </div>





        </div>





        <div className="right">
          {/* <button className="btn btn-outline-light" onClick={() => navigate("/mart/add")} >List your product</button> */}
        </div>


      </div >










    </div>





  )
}


const mapStateToProps = (state) => ({
  state: state.products,
  darktheme: state.darktheme
})


const mapDispatchToProps = (dispatch) => ({
  add_product: () => dispatch(add_product()),
  dark_red: () => dispatch(dark_red()),
  getitems: () => dispatch(getitems()),
  filter: () => dispatch(filter())


})

export default connect(mapStateToProps, mapDispatchToProps)(App)

