
import {useState  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import { Container, Row, Col,  } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import BuyPage  from './Components/Buypage';
import Cart from "./Components/Cart";



function App() {

// INTILIZING STATE

  const [cartItem, setCardItem] = useState([])

  // ADD ITEM IN CARD

  const addInCart = item => {
    // CHECKING WHEATHER THE ITEM IS ALREADY INSIDE

     const isAlreadyAdded = cartItem.findIndex(function (array) {

      return array.id === item.id
      
     })
// IF IT'S INSIDE EXECUTE THIS IF

     if(isAlreadyAdded !== -1){
      toast("Item already in the cart", {
        type: "error"
      })
      return;
     }

// OR IT WILL BE ADDED TO CARDITEM THROUGH SETCARD ITEM
     setCardItem([...cartItem,item])
  }

  // BUYNOW

  const buyNow = () => {
    //  and empting it
    setCardItem([])
//message
    toast("Purchase Complete",{
      type:"success"
    });
  }

  const removeItem = (item) => {
    // checking every item in array item in array if it's doing nothing if its isn't we adding it to the 
    //setcarditem with help of  filter 
    // hint counter-intivutive 
    setCardItem([cartItem.filter(singleItem => singleItem.id !== item.id)])
  }

  return (
   
   <Container fluid>
     
      <Row>
        <Col md="8">
          <BuyPage addIncart={addInCart}/>
        </Col>
        <Col  md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow ={buyNow} />
        </Col>
      </Row>
      <ToastContainer/>
   </Container>
      
  );
}

export default App;
