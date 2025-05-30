import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

import { addEllipsis } from "../../utils/common-utils";
import { useDispatch} from "react-redux";

import {removeFromCart} from "../../redux/actions/cartActions";

import GroupedButton from "./ButtonGroup";

const Component = styled(Box)`
    border-top : 1px solid #f0f0f0;
    display : flex;
    background-color : #fff;
`

const LeftComponent = styled(Box)`
    margin : 20px;
    display : flex;
    flex-direction : column;
`
const SellerText = styled(Typography)`
    color : #878787;
    font-size : 14px;
    margin-top : 10px;
`
const RemoveButton = styled(Button)`
    margin-top : 20px;
    font-size : 16px;
    color : #000;
    font-weight : 600;
`

const CartItem = ({item}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return(
        <Component>
            <LeftComponent>
                <img src = {item.url} alt = "product" style={{height:150}}/>
                <GroupedButton/>
            </LeftComponent>
            <Box style={{margin : 20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SellerText>Seller : SuperComNet
                    <Box component="span"><img src = {fassured} alt ="assured" style={{width : 50,marginLeft :10}}/></Box>
                </SellerText>
                <Typography style={{margin : "20px 0"}}>
                    <Box component="span" style={{fontWeight:600 ,fontSize : 18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style = {{color : "#878787"}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style = {{color : "#388E3C"}}>{item.price.discount}</Box>
                </Typography>
                <RemoveButton onClick={()=>removeItemFromCart(item.id)}>Remove</RemoveButton>
            </Box>
        </Component>
    )
}

export default CartItem;