

import Products from "../model/product-Schema.js";
import Product from "../model/product-Schema.js";

export const getProducts = async(request,response) =>{
    try{
        const products =  await Products.find({});
        if(products){
            response.status(200).json(products);
        }
    }catch(error){
        response.status(500).json({message : error.message});
    }
}

export const getProductById = async(request,response) => {
    try{
        const id = request.params.id;
        const product = await Product.findOne({'id': id});
        
        if(product){
            response.status(200).json(product);
        }
    }catch(error){
        response.status(500).json({message : error.message});
    }
}