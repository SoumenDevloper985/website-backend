
import { AppBar, Toolbar, styled, Box, Typography,Drawer, IconButton, List, ListItem } from '@mui/material';
// import { yellow } from '@mui/material/colors';

import {Menu} from "@mui/icons-material";

import { Link } from 'react-router-dom';

import { useState } from 'react';

//components

import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
  `
const Component = styled(Link)`
    margin-left : 12%;
    line-height : 0;
    text-decoration : none;
    color : inherit;
`

const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic;
    font-weight : bold;
    color : black;
`
const PlusImage = styled('img')({
    width: 10,
    height : 10,
    marginLeft : 4

})

const CustomButtonWrapper = styled('Box')`
    margin : 0 5% 0 auto;
    @media (max-width : 900px){
        display : none;
    }
`

const MenuButton = styled(IconButton)`
    display : none;
    @media (max-width : 900px){
        display : block;
    }
`


const Header = () => {

    const logoURL = 'https://i.ibb.co/61hypw8/rapidkart-low-resolution-logo-color-on-transparent-background.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    
    const list = () => {
        return(
            <Box style = {{width : 200}} onClick={handleClose}>
                <List>
                    <ListItem>
                        <CustomButtons />
                    </ListItem>
                </List>
            </Box>
        )
    }

    return (
        <StyledHeader>
            <Toolbar style = {{minHeight:55}}>
                <MenuButton color = "inherit" onClick={handleOpen}>
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to = {'/'}>
                    <img src={logoURL} alt="logo" style={{ width: 110 }} />
                    <Box style={{display :'flex'}}>

                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: "yellow" }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;