
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./App.css"
import { add_product } from "./store/action/action";





function App(props) {

  const [lightmode, setmode] = useState(true);
  const [search, setsearch] = useState({ var: "", bool: false });



  let navigate = useNavigate()



  return (






    <div className={lightmode ? "parent" : "parent dark"}>



      <div className="left" >



        <select onChange={() => setmode(!lightmode)} className={lightmode ? "btn btn-outline-dark custom-select mr-sm-2" : "btn btn-outline-light custom-select mr-sm-2"} id="inlineFormCustomSelect">

          <option defaultChecked value="1">☀️</option>
          <option value="2">🌙</option>

        </select>




      </div>




      <div className="center">

        <div className="search">
          <p>Search</p>
          <input onChange={(e) => {


            setsearch({ var: e.target.value })
            // console.log(search)



          }} type="text" />
        </div>



        <div className="main">



          {props.state.map((v, i) => (


            <span className={search.var == "" ? null : "invisible"} key={i}>


              {/* {search.var.includes(v.name) ? setsearch({ ...search, bool: true }) : null} */}


              <div onClick={() => navigate(`/mart/details/${v.id}`)} className="card">

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
        <button className="btn btn-outline-warning" onClick={() => navigate("/mart/add")} >Sell</button>
      </div>


    </div >









  );
}


const mapStateToProps = (state) => ({
  state: state.products
})


const mapDispatchToProps = (dispatch) => ({
  add_product: () => dispatch(add_product())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

