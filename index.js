import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from 'body-parser';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

// import stripe from "stripe";


import Connection from './database/db.js';

import defaultData from "./default.js";
import DefaultData from './default.js';

import Router from "./routes/route.js";

import {v4 as uuid} from "uuid";

import path from 'path';

const __dirname =path.resolve();

const app = express();

dotenv.config();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/',Router);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);
    })
})

////

app.use(express.json())


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// stripe.(process.env.STRIPE_PRIVATE_KEY);

app.post(`/create-checkout-session`,async(req,res)=>{
    try{

        const session = await stripe.checkout.sessions.create({
            payment_method_types : ["card"],
            mode : "payment",
            line_items : req.body.items.map(item=>{
                return{
                    price_data:{
                        currency : "inr",
                        product_data : {
                            name : item.name
                        },
                        unit_amount : (item.price)*100,
                    },
                    quantity : 1
                }
            }),
            success_url : `https://long-newt-overshirt.cyclic.app/success`,
            cancel_url : `https://long-newt-overshirt.cyclic.app/cancel`
        })

        res.json({url:session.url})

    }catch(error){
        res.status(500).json({error : error.message})
    }
})

///

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);


app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT} helo`));

DefaultData();

// export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTM_MID;
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
// paytmParams['ORDER_ID'] = uuid();
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
// paytmParams['TXN_AMOUNT'] = '100';
// // paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
// paytmParams['EMAIL'] = 'codeforinterview01@gmail.com';
// paytmParams['MOBILE_NO'] = '1234567890';
