import { Router } from "express"
import ProductController from "../controllers/productController";
import ProductValidator from "../Validator/validator"
class MainRouter {

    router: Router;
    product: ProductController
    constructor() {
        this.product = new ProductController()
        this.router = Router({ mergeParams: true })
        this.productRouters()
        
    }
productRouters(){
    this.router.route(`/api/v1/createProduct`).post(this.product.createProduct)
    this.router.route(`/api/v1/getProduct`).get(this.product.getProduct)
    this.router.route(`/api/v1/updateProduct/:id`).put(this.product.updateProduct)
    this.router.route(`/api/v1/deleteProduct/:id`).delete(this.product.deleteProduct)
}
}

export default new MainRouter().router

