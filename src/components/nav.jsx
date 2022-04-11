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
import { getitems, dark_red } from '../store/action/action';

const Example = (props) => {

  let navigate = useNavigate();




  return (
    <div>
      <Navbar className='navbarr' color="light" light expand="md">
        <NavbarBrand  >IAD Mart Project</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>


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

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

}





const mapDispatchToProps = (dispatch) => ({
  dark_red: () => dispatch(dark_red()),
  getitems: () => dispatch(getitems())
})





export default connect( null , mapDispatchToProps)(Example)