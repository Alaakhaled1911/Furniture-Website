import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
// import { addtoCart } from '../store/ProductSlice';
import { BiCart } from "react-icons/bi";
import './header.css' 
import { PiUserSwitchFill } from "react-icons/pi";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { productData } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.products);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllProductsClick = () => {
    setSelectedCategory(null);
  };
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to='/'>
      <Navbar.Brand className="fur">FURNITURE</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link to='/'>
          <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Nav.Link  href="#about">
            AboutUs
             
            </Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>

         
          <Link to="/shipping">
          <div 
          style={{position:'relative'
            
          }}>
          <BiCart
          style={{
            height: '36px',
            width: '37px',
            color: '#66153b'
          }}
          />

         <span className="cartlength"> {productData.length}</span>
          </div>
          </Link>
       
          {
  userInfo ? (
    <Link to="/login"
    
    style={{
      display: 'flex',
      flexWrap: 'nowrap',
      alignitems: 'center',
      marginLeft:'-14px'
    }}
    >
      <img
        src={userInfo.image}
        alt="User Avatar"
        style={{
          height: '30px',
          width: '30px',
          borderRadius: '27px',
            marginTop:'7px'
        }}
      />
      <p style={{marginLeft:'22px',
        color:'rgb(86, 21, 59)',
        marginTop:'7px'
      }}>{userInfo.name}</p>
    </Link>
  ) : (
    <Link to="/login">
      <PiUserSwitchFill
        style={{
          height: '30px',
          width: '30px',
            marginTop:'4px',
            marginLeft:'-2px'
        }}
      />
    </Link>
  )
}
 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {/* <div className="headermain">
    <li>
      <a>Home</a>
      
      <a>About</a>
      <a>Products</a>
      
      <Link to="/shipping">
          <div 
          style={{position:'relative'
            
          }}>
          <BiCart
          style={{
            height: '36px',
            width: '37px',
            color: '#66153b'
          }}
          />

         <span className="cartlength"> {productData.length}</span>
          </div>
          </Link>
       
          {
  userInfo ? (
    <Link to="/login"
    
    style={{
      display: 'flex',
      flexWrap: 'nowrap',
      alignitems: 'center'
    }}
    >
      <img
        src={userInfo.image}
        alt="User Avatar"
        style={{
          height: '30px',
          width: '30px',
          borderRadius: '27px',
            marginTop:'7px'
        }}
      />
      <p style={{marginLeft:'22px',
        color:'rgb(86, 21, 59)',
        marginTop:'7px'
      }}>{userInfo.name}</p>
    </Link>
  ) : (
    <Link to="/login">
      <PiUserSwitchFill
        style={{
          height: '30px',
          width: '30px',
            marginTop:'4px'
        }}
      />
    </Link>
  )
}
    </li>
    
  </div> */}
  
  </>
  )
}

export default Header


   
