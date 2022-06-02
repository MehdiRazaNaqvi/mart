
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../css/App.css";
import { dark_red, getitems, filter } from "../store/action/action";
import Example from "./nav"


import { useLayoutEffect } from 'react';








function App(props) {


  let navigate = useNavigate()








  useEffect(() => {

    console.log("fetching items")

    props.getitems()


  }, [])






  const [searchword, setsearchword] = useState("");




  return (


    <div className="maha">




      <div className="nav">
        <Example />
      </div>



      <div className={props.darktheme ? "parent dark" : "parent"}>



        <div className="left" >
          {/* <select onChange={() => props.dark_red() } className="btn btn-outline-light custom-select mr-sm-2" id="inlineFormCustomSelect">

            <option defaultChecked value="1">☀️</option>
            <option value="2">🌙</option>

          </select> */}


          {/* <button className='btn btn-outline-light' onClick={() => props.getitems()}>Fetch</button> */}




        </div>




        <div className="center">



          <div className="search">



            <img src="https://images.priceoye.pk/pakistan-priceoye-slider-1sh6x.png" className='cover' />

            <span className='search-span'>
              <input onChange={(e) => setsearchword(e.target.value)} type="text" className='form-control' placeholder='Search' />
              <button className='search-btn btn btn-outline-primary' onClick={() => searchword != "" ? props.filter(searchword) : null}>Go</button>
            </span>

          </div>



          <div className="main">



            {props.state.map((v, i) => (


              <span className="span" key={i}>


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
  // add_product: () => dispatch(add_product()),
  dark_red: () => dispatch(dark_red()),
  getitems: () => dispatch(getitems()),
  filter: (searchword) => dispatch(filter(searchword))


})

export default connect(mapStateToProps, mapDispatchToProps)(App)

