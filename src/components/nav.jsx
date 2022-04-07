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


import { dark_red } from '../store/action/action';

const Example = (props) => {






    return (
      <div>
        <Navbar className='navbarr' color="light" light expand="md">
          <NavbarBrand  >IAD Mart Project</NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>


              <NavItem>
                <select onChange={() => props.dark_red()} className="btn btn-outline-light custom-select mr-sm-2" id="inlineFormCustomSelect">

                  <option defaultChecked value="1">☀️</option>
                  <option value="2">🌙</option>

                </select>
              </NavItem>



              <NavItem>
                <button className="btn btn-outline-secondary">Fetch Firebase Items</button>
              </NavItem>



              <NavItem>
                <button className="btn btn-outline-secondary">List Your Product</button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  
}





const mapDispatchToProps = (dispatch) => ({
     dark_red: () => dispatch(dark_red()),
})



export default connect(null , mapDispatchToProps) (Example)