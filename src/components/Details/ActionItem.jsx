import styled from "@emotion/styled";
import {Box, Button} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { addToCart } from "../../redux/actions/cartActions";

import {ShoppingCart as Cart,FlashOn as Flash} from "@mui/icons-material";
import { payUsingPaytm } from "../../service/api";

import {post} from "../../utils/paytm";

const LeftContainer = styled(Box)`
    min-width : 40%;
    padding : 40px 0 0 80px;
    margin-right : 10px;
    @media (max-width : 1200px){
        padding : 20px 40px;
    }
`


const Image = styled('img')({
    padding : '15px',
    width : '95%'
   
});

const StyledButton = styled(Button)`
    width : 48%;
    height : 50px;
    border-radius : 2px;
    @media (max-width : 1200px) {
        width : 47%;
    }
    @media (max-width:600px){
        width : 48%;
        padding : 0;
    }
    @media (max-width:1000px){
        padding : 5px;
    }
`

const ActionItem = ({product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity,setQuantity] = useState(1);

    const {id} = product;

    const addItemToCart = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    const buyNow = () => {
        // let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        // let information = {
        //     action: 'https://securegw-stage.paytm.in/order/process',
        //     params: response    
        // }
        // post(information);
        fetch("/create-checkout-session",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            mode : "cors",
            body : JSON.stringify({
                items : [
                    {
                        id : product.id,
                        price : product.price.cost,
                        quantity : product.quantity,
                        name : product.title.longTitle
                    }
                ]
            })
        })
        .then(res=>{
            if(res.ok) return res.json()
            return res.json().then(json=>Promise.reject(json));
        })
        .then(({url})=>{
            window.location = url
        })
        .catch(e=>{
            console.log(e.error)
        })
    }

    return (
        <LeftContainer>
            <Box style={{border : "1px solid #f0f0f0" ,padding : '15px 20px', marginBottom : 10}}>
                <Image src = {product.detailUrl} alt = "product-img" />
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemToCart()} style = {{marginRight : 10,background : "#ff9f00"}}><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={()=> buyNow()} style = {{background : "#fb541b"}}><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;