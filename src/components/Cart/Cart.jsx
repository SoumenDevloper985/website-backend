import { Box, Button, Grid, Typography ,styled} from "@mui/material";
import { useSelector } from "react-redux";
import { useState ,useEffect} from "react";

//components
import CartItem from "./CartItem.jsx";
import TotalBalance from "./TotalBalance.jsx";
import EmptyCart from "./EmptyCart.jsx";

const Component = styled(Grid)`
    padding : 30px 135px;
    @media (max-width:900px){
        padding : 15px 0px;
    }
`

const Header = styled(Box)`
    padding: 15px 24px;
    background-color : #fff;
`

const ButtonWrapper = styled(Box)`
    padding : 16px 22px;
    background-color : #fff;
    box-shadow : 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top : 1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
    display : flex;
    margin-left : auto;
    background : #fb641b;
    color : #fff;
    width : 250px;
    height : 51px;
    border-radius : 2px;
    &:hover{
        color : #000;
    }
`

const LeftComponent = styled(Grid)`
    padding-right : 15px;
    @media (max-width : 900px) {
        margin-bottom : 15px;
    }
`

export const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);

    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    

    const totalAmount = () => {
        let price = 0,discount = 0;
        cartItems.map(item=>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }

    useEffect(()=>{
        totalAmount();
    },[cartItems]);

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
                        id : 1,
                        price : price-discount+40,
                        quantity : 1,
                        name : "Cart Items"
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

    return(
        <>
            {
                cartItems.length ?
                    <Component container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item=>(
                                    <CartItem item = {item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton onClick={()=>buyNow()}>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems} />
                        </Grid>
                    </Component>
                : <EmptyCart />
                

            }
        </>
    )
}

export default Cart;