import {Box,Table,TableBody,TableCell,TableRow,Typography} from "@mui/material";

import {LocalOffer as Badge} from "@mui/icons-material";
import styled from "@emotion/styled";

const SmallText = styled(Box)`
    font-size : 14px;
    vertical-align : baseline;
    & > p {
        font-size : 14px;
        margin-top : 10px;
    }
`

const StyledBadge = styled(Badge)`
    margin-right : 10px;
    color : #00CC00;
    font-size : 15px;
`

const ColumnText = styled(TableRow)`
    font-size : 14px;
    vertical-align : baseline;
    & > td {
        font-size : 14px;
        margin-top : 10px;
        border : none;
    }
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime() + (5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style = {{marginTop : 5,color : "#878787",fontSize : 14}}>
                8 ratings & 1 review
                <Box component="span">
                    <img src = {fassured} alt ="assured" style={{width : 77,marginLeft : 20}}/>
                </Box>
            </Typography> 
            <Typography>
                <Box component="span" style={{fontSize : 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style = {{color : "#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style = {{color : "#388E3C"}}>{product.price.discount}</Box>
            </Typography>
            <Typography>Availbale Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer 10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge />Bank Offer Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999 T&C</Typography>
                <Typography><StyledBadge />Bank Offer 5% off on RapidKart Axis Bank Credit Card and EMI Trxns, up to ₹750, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge />Partner Offer Apply & get ₹10,000 Times Prime benefits + ₹1,000 Gift Card* with RapidKart Axis Bank Credit Card Know More</Typography>
                <Typography><StyledBadge />Partner Offer Sign-up for RapidKart Pay Later & get free Times Prime Benefits worth ₹10,000* Know More</Typography>
                <Typography><StyledBadge />Partner Offer Purchase now & get 1 surprise cashback coupon in Future Know More</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{coloe : '#878787'}}>Delivery</TableCell>
                        <TableCell style ={{fontWeight : '600'}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{coloe : '#878787'}}>Warranty</TableCell>
                        <TableCell>3 Months Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{coloe : '#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color : '#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice availbale</Typography>
                            <Typography>7 days Return Policy</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="super-coin" style={{width : 390}}/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{coloe : '#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;