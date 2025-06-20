import { useState,useContext } from 'react';

import {Box, Button, Dialog, TextField,Typography,styled} from '@mui/material';

import { authenticateLogin, authenticateSignup } from '../../service/api';

import { DataContext } from '../../context/DataProvider';



const Component = styled(Box)`
    height : 70vh;
    width : 83vh;
`

const Image = styled(Box)`
    background : #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') no-repeat center 85%;
    height : 90%;
    width : 28%;
    padding : 25px 35px;
    & > p , & > h5 {
        color : #FFFFFF;
        font-weight : 600;
    }
`

const Wrapper = styled(Box)`
    display : flex;
    flex-direction : column;
    padding : 20px 35px;
    margin-bottom : 25px;
    flex : 1;
    & > div , & > button , & > p {
        margin-top : 18px;
       
    }
`

const LoginButton = styled(Button)`
    text-transform : none;
    background : #FB641B;
    color : #fff;
    height : 48px;
    border-radius : 2px;
`

const OTPButton = styled(Button)`
    text-transform : none;
    background : #fff;
    color : #2874f0;
    height : 48px;
    border-radius : 2px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);

`

const Text = styled(Typography)`
    font-size : 12px;
    color : #878787;
`

const CreateAccount = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    color : #2874f0;
    text-align : center;
    cursor : pointer;
`

const Error = styled(Typography)`
    font-size : 10px;
    color : #ff6161;
    line-height : 0;
    margin-top : 10px;
    font-weight : 600;
`

const accountInitialValues = {
    login : {
        view : 'login',
        heading : "Login",
        subHeading : "Get access to your Orders, Wishlist and Recommendations"
    },
    signup : {
        view : 'signup',
        heading : "Looks like you're new here!",
        subHeading : "Sign up now to get started"
    }
};

const signupInitialValues = {
    firstname : "",
    lastname : "",
    username : "",
    email : "",
    password : "",
    phone : ""
}

const loginInitialValues = {
    username : "",
    password : ""
}

const LoginDialog = ({open,setOpen}) =>{

    const [account,toggleAccount] = useState(accountInitialValues.login);

    const [signup,setSignUp] = useState(signupInitialValues);

    const [login,setLogin] = useState(loginInitialValues);

    const [error,setError] = useState(false);

    const {acc,setAccount} = useContext(DataContext);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignUp = () =>{
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignUp({...signup , [e.target.name] : e.target.value});
    }

    const signupUser = async ()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({...login,[e.target.name] : e.target.value});
    }

    const loginUser = async ()=>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }

    }

    return(
        <Dialog open = {open} onClose={handleClose} PaperProps={{sz : {maxWidth : "unset"}}}>
           <Component>
                <Box style = {{display : "flex", height : "100%"}}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style = {{marginTop : 20}}>{account.subHeading}</Typography>
                    </Image>
                    {
                        (account.view ==='login')?
                       <Wrapper>
                            <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name = "username" label  = "Enter Username"/>
                            
                            <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name = "password" label  = "Enter Password"/>
                            
                            {error && <Error>Please Enter valid username or Password</Error>}
                            
                            <Text>By continuing you agree to RapidKart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Typography style = {{textAlign : "center"}}>OR</Typography>
                            <OTPButton>Request OTP</OTPButton>
                            <CreateAccount onClick={()=>{toggleSignUp()}}>New to RapidKart?Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' label  = "Enter First name" name='firstname' onChange={(e)=>{onInputChange(e)}}/>
                            <TextField variant='standard' label  = "Enter Last name" name='lastname' onChange={(e)=>{onInputChange(e)}}/>
                            <TextField variant='standard' label  = "Enter Username" name='username' onChange={(e)=>{onInputChange(e)}}/>
                            <TextField variant='standard' label  = "Enter Email" name='email' onChange={(e)=>{onInputChange(e)}}/>
                            <TextField variant='standard' label  = "Enter Password" name='password' onChange={(e)=>{onInputChange(e)}}/>
                            <TextField variant='standard' label  = "Enter Phone" name='phone' onChange={(e)=>{onInputChange(e)}}/>
                            
                            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                            
                        </Wrapper>
                    }
                </Box>
           </Component>
        </Dialog>
    )
}

export default LoginDialog;