import React from "react";
import{
    Card,
    CardImg,
    CardText,
    CardTitle,
    Button,
    CardBody,
} from "reactstrap";



// CREATE CARD
 const CartItem = ({product, addInCart}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg
            top
            height="250"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText>
                     Price Rs: {product.productPrice}
                     </CardText>
                     <Button className="sucsess" onClick={() => {
                        addInCart(product)
                     }}>Buynow</Button>
            </CardBody>
        </Card>
    )

 }

 export default CartItem;
