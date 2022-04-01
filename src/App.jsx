
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./App.css"






function App(props) {

  const [lightmode, setmode] = useState(true);
  const [search , setsearch] = useState({var : ""});

  let navigate = useNavigate()



  return (






    <div className={lightmode ? "parent" : "parent dark"}>



      <div className="left" >



        <form>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">

              <select onChange={() => setmode(!lightmode)} className={lightmode ? "btn btn-outline-dark custom-select mr-sm-2" : "btn btn-outline-light custom-select mr-sm-2"} id="inlineFormCustomSelect">

                <option defaultChecked value="1">Light</option>
                <option value="2">Dark</option>

              </select>
            </div>

          </div>
        </form>

        
      </div>




      <div className="center">

        <div className="search">
          <p>Search</p>
          <input onChange={(e) => {
            
            {props.state.map((v,i) =>  v.name == e.target.value? console.log("haaaaaaan") : console.log("naaaeee") )}

            // setsearch({var :e.target.value})
            // console.log(search)
            // {search.var == v.name?  console.log('yes') : console.log("no") }

        
        }} type="text" />
        </div>



        <div className="main">


          {props.state.map((v, i) => (

            <span key={i}>


              <div onClick={() => navigate(`/details/${v.id}`)} className="card">

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

      </div>

    </div >









  );
}


const mapStateToProps = (state) => ({
  state: state.products
})


export default connect(mapStateToProps, null)(App)

