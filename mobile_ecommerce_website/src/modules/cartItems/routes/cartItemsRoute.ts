import { Router } from "express"
import {CartController} from "../controllers/cartItemsController";
import CartValidator from "../Validator/validator"

class MainRouter {

    router: Router;
    cart: CartController
    constructor() {
        this.cart = new CartController()
        this.router = Router({ mergeParams: true })
        this.cartRouters()

    }

    cartRouters(){
        this.router.route(`/api/v1/addtoCart`).post(this.cart.addToCart)
        this.router.route(`/api/v1/getCartItems`).get(this.cart.getCartItems)
        this.router.route(`/api/v1/updateCartItems/:id`).put(this.cart.updateCartItems)
        this.router.route(`/api/v1/deleteItems/:id`).delete(this.cart.deleteCartItems)
    }
}

export default  new MainRouter().router

