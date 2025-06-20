
/*import * as actionType from '../constants/productConstant';

export const getProductsReducer = (state = {products : []},action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS :
            return {products : action.payload}
        case actionType.GET_PRODUCT_FAIL :
            return {error : action.payload}

        default : 
            return state
    }
}

export const getProductDetailsReducer = (state = {product : {}},action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST :
            return {loading:true}
        case actionType.GET_PRODUCT_DETAILS_SUCCESS :
            return {loading : false , product : action.payload}
        case actionType.GET_PRODUCT_DETAILS_FAIL :
            return {loading: false , error : action.payload}
        case actionType.GET_PRODUCT_DETAILS_RESET :
            return {product : {}}
        default :
            return state
    }
}*/
import * as actionType from '../constants/productConstant';

// Handles product list
export const getProductsReducer = (state = { products: [], error: null }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return { products: action.payload, error: null };
        case actionType.GET_PRODUCT_FAIL:
            return { products: [], error: action.payload };
        default:
            return state;
    }
};

// Handles individual product details
export const getProductDetailsReducer = (
    state = { product: {}, loading: false, error: null },
    action
) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload, error: null };
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return { product: {}, loading: false, error: null };
        default:
            return state;
    }
};

