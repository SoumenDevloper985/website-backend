
import { useState ,useContext} from "react";

import {Badge, Box,Button, Typography,styled} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";

import {Link} from "react-router-dom";

import { DataContext } from "../../context/DataProvider";

//components
import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";

const Wrapper = styled(Box)`
    display : flex;
    margin : 0 3% 0 auto;
    & > button,& > p,& > div {
        margin-right : 40px;
        font-size : 16px;
        align-items : center;
    }
    @media (max-width : 900px){
        display : block;
    }
`
const Container = styled(Link)`
    display : flex;
    text-decoration  : none;
    color : inherit;
    @media (max-width : 900px){
        display : block;
    }
`


const LoginButton = styled(Button)`
    color : #2874f0;
    background : white;
    text-transform : none;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow  : none;
    font-weight : 600;
    height : 32px;
    &:hover{
        color : #FFFFFF;
    }

`

const CustomButtons = ()=>{

    const [open,setOpen] = useState(false);

    const {account,setAccount} = useContext(DataContext);

    const {cartItems} = useSelector(state=>state.cart);

    const openDialog = () =>{
        setOpen(true);
    }

    return(
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            <Typography style = {{marginTop : 3,width : 135}}>Become a Seller</Typography>
            <Typography style = {{marginTop : 3}}>More</Typography>
            <Container to={'/cart'}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft : 10}}>Cart</Typography>
            </Container>
            <LoginDialog open ={open} setOpen={setOpen}/>
        </Wrapper>
    );
}

export default CustomButtons;