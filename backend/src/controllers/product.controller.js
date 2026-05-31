import productModel from '../models/product.model.js';


export async function createProduct(req,res) {

 const{title,description,priceAmount,priceCurrency}=req.body;

 const seller=req.user;
 





}