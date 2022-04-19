import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,


} from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { getitems, dark_red, google_login } from '../store/action/action';












const Example = (props) => {


  let navigate = useNavigate();


  // console.log(props.user)
  

  return (

    <div>
      <Navbar className='navbarr' color="light" light expand="md">
        <NavbarBrand onClick={() => navigate("/mart")} >IAD Mart Project</NavbarBrand>


        { props.user.name ==""? <button className="btn signbtn btn-outline-light" onClick={() => props.google_login()} >Sign in</button> : <img className='choti_img signimg' src={props.user.photo} /> }


        {/* <NavbarToggler /> */}

        <Collapse navbar>
          <Nav className="ml-auto" navbar>


            <div className='nav1' >

              <NavItem>
                <select onChange={() => props.dark_red()} className="btn btn-outline-light custom-select mr-sm-2" id="inlineFormCustomSelect">

                  <option value="1">☀️</option>
                  <option value="2">🌙</option>

                </select>
              </NavItem>



              <NavItem>
                <button className="btn btn-outline-secondary" onClick={() => props.getitems()} >Fetch Firebase Items</button>
              </NavItem>

              <NavItem>
                <button className="btn btn-outline-secondary" onClick={() => navigate("/mart/add")} >List Your Product</button>
              </NavItem>

              <NavItem>
                <button className="btn btn-outline-secondary" onClick={() => props.google_login()} >Sign in</button>
              </NavItem>
            </div>



            <NavItem className='user nav2' >

              {props.user.name !== "" ? props.user.name : null}
              {props.user.name !== "" ? <img className='choti_img' src={props.user.photo} /> : null}
            
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

}





const mapDispatchToProps = (dispatch) => ({
  dark_red: () => dispatch(dark_red()),
  getitems: () => dispatch(getitems()),
  google_login: () => dispatch(google_login())
})


const mapStateToProps = (state) => ({
  user: state.user,
  cart : state.cart
})




export default connect(mapStateToProps, mapDispatchToProps)(Example)

































































