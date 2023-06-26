import { Request, Response } from "express"
import { logger } from "../../../logger"
import { RESPONSE_STATUS } from "../../../resp-handler/constants"
import Exception from "../../../resp-handler/exception"
import Product from "../models/products"

class ProductService {
//createProduct
    createProduct = async (req: any, res) => {
        try {
            let createproduct = await Product.create(req.body)
            return Promise.resolve(createproduct)
            } 
        catch (err) {
            logger.info("Error in creating Product::",err)
            return Promise.reject(err)
        }
    }
//getProduct    
    getProduct = async (req: any, res: any) => {
        try {
            if(req.query.id){
                let getById = await Product.findOne({
                    where:{
                        id:req.query.id
                    }
                })
                return Promise.resolve(getById)
            }
            const products: any = await Product.findAll()
            return Promise.resolve(products)
        }
        catch (error) {
            logger.info("Error in get Product::",error)
            return Promise.reject(error)
        }
    }
//updateProduct    
    updateProduct = async (req: Request, res: any) => {
        try {
            let productId =  req.params.id
            console.log("pudfsdf",productId)
            let productExist = await Product.findOne({ where: { id: productId } });
            if (!productExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "product not exist")
            }
            let updateObj: any = req.body
            await Product.update(updateObj, { where: { id: productId } })
            let updatedProduct = await Product.findOne({ where: { id: productId } });

            return Promise.resolve(updatedProduct)
        }
        catch (error) {
            logger.info("Error in updating product::",error)
            return Promise.reject(error)
        }
    }
//deleteProduct    
    deleteProduct = async (req: Request, res: any) => {
        try {
            const productId = req.params.id
            let productExist: any = await Product.findOne({ where: { id: productId } })
            if (!productExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "product not exist")
            }
            await Product.destroy({ where: { id: productId } })
            return Promise.resolve("product deleted successfully ::")
        }
        catch (error) {
            logger.info("Error in deleting Product:: ",error)
            return Promise.reject(error)
        }
    }
}
let productServiceInstance = new ProductService
export default productServiceInstance