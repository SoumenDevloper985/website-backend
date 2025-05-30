
import {Box,Typography,styled} from "@mui/material";
import {navData} from "../../constants/data";

const Component = styled('Box')`
    display : flex;
    margin : 55px 130px 0 130px;
    justify-content : space-between;
    overflow : overlay; 
    @media (max-width : 1200px) {
        margin : 0;
    }

`

const Container  = styled(Box)`
    padding : 12px 8px;
    text-align : center
`

const Text = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    font-family : inherit;
`

const NavBar = () =>{
    return (
        <Box style={{backgroud: '#fff'}}>
            <Component>
                {
                    navData.map(data=>(
                        <Container>
                            <img src = {data.url} alt = "nav"  style={{width : 64}}/>
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}

export default NavBar;