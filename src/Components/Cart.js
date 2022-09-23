// import React from "react";
// import {
//     Container,
//     ListGroup,
//     ListGroupItem,
//     Button,
//     CardHeader,
//     CardBody,
//     Card,
//     CardFooter,
//     Col,
//     Row
// } from "reactstrap";
// import CartItem from "./Cartitem";


// const Cart = ({cartItem, buyNow,removeItem }) =>{
//     let amount = 0;
//    console.log(cartItem);
//     cartItem.forEach(item => {
//         amount = parseFloat(amount) + parseFloat(item.productPrice)  
//         console.log("hello")   
//     });


//     return(
//         <Container fluid>
//             <h1 className="text-success"> Your cart</h1>
//             <ListGroup>
//                 {CartItem.item.map(item => (
//                     <ListGroupItem key={item.id}>
//                         <Row>
//                             <Col>
//                             <img 
//                             height={80}
//                             src={item.tinyImage} alt="laptop">
//                             </img>
//                             </Col>
//                             <Col className="text-center">
//                                 <div className="text-primary">
//                                     {item.productName}
//                                 </div>
//                                 <spam> price:- {item.productPrice}</spam>
//                                 <Button color="danger" onClick={() => {
//                                     removeItem(item)
//                                 }}>Remove</Button>
//                             </Col>
//                         </Row>
//                     </ListGroupItem>
                   
//                 ))}
//                  {/* /* if everything is empty */ }
                    
//                         {
//                             cartItem.length >= 1 ?(
//                                 <Card className="text-center mt-3">
//                                 <CardHeader>
//                                     Grand Total
//                                 </CardHeader>
//                                 <CardBody>
//                                 Your amount for {cartItem.length} us {amount}
//                                 </CardBody>
//                                 <CardFooter>
//                                     <Button color="success" onclick={buyNow}>
//                                         Pay here
//                                     </Button>
//                                 </CardFooter>
//                                 </Card>
//                             ) : (
//                                 <h1 className="text-warning">Cartitem is empty</h1>
//                             )
//                         }
                    
//             </ListGroup>
//         </Container>
//     )

// }


// export default Cart;



import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
} from "reactstrap";


const Cart = ({cartItem, buyNow,removeItem }) =>{
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)  
        console.log("hello")   
    });


    return(
        <Container fluid>
            <h1 className="text-success"> Your cart</h1>
            <ListGroup>
                {cartItem.map(item => (                   // error occuring at this line (error meassage : Cannot read properties of undefined (reading 'map'))
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img 
                            height={80}
                            src={item.tinyImage} alt="laptop">
                            </img>
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <spam> price:- {item.productPrice}</spam>
                                <Button color="danger" onClick={() => {
                                    removeItem(item)
                                }}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                   
                ))}
                 {/* /* if everything is empty */ }
                    
                        {
                            cartItem.length >= 1 ?(
                                <Card className="text-center mt-3">
                                <CardHeader>
                                    Grand Total
                                </CardHeader>
                                <CardBody>
                                Your amount for {cartItem.length} us {amount}
                                </CardBody>
                                <CardFooter>
                                    <Button color="success" onclick={buyNow}>
                                        Pay here
                                    </Button>
                                </CardFooter>
                                </Card>
                            ) : (
                                <h1 className="text-warning">Cartitem is empty</h1>
                            )
                        }
                    
            </ListGroup>
        </Container>
    )

}


export default Cart;