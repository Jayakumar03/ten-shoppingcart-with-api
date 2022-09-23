import React, {useState, useEffect } from "react";

import Axios   from "axios";

/* import {random, commerce }from "faker"; not supporting new libarary   {npm install @faker-js/faker} 
  import command import{faker, random, commerce} from "@faker.js/faker" */

import{faker} from "@faker-js/faker";

import {Container, Col, Row  } from "reactstrap";
import userEvent from "@testing-library/user-event";
import CardItem from "./Cartitem";

// const apiKey = "insert your key here"

// const url = " https:// api.pexels.com/v1/search?querry=laptop&per_page=66&page=1";
const localUrl = "http://myjson.dit.upm.es/api/bins/fpwk"




const Buypage = ({addIncart}) => {

    const [product, setProduct] = useState([])

  /*  const fetchPhotos  = async () => {
        const response  = await Axios.get(url,{
        header : {
                Authorization : apiKey
             }
         })
    } */


    // using local api 
    const fetchPhotos  = async () => {
        const {data}  = await Axios.get(localUrl)
    
    const{photos} = data;


    const allProducts = photos.map((photo) => ({

        smallImage : photo.src.medium,
        tinyImage : photo.src.tiny,
        productName:faker.random.word(),
        productPrice: faker.commerce.price(),
        id:faker.datatype.uuid()
    }))
    
    setProduct(allProducts);
}

    useEffect ( () => {
        fetchPhotos()
    }, [])


    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map( (product) => {
                  return(
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={addIncart}/>
                    </Col>
                  )
                  

                })}
            </Row>
        </Container>
    )
}

export default Buypage