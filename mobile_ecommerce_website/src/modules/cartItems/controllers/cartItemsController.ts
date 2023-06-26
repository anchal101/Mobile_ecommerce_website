
import { respHandler } from "../../../resp-handler"
import { RESPONSE_STATUS } from "../../../resp-handler/constants"
import cartItemsInstance from "../services/cartItems"

export class CartController {
    async addToCart(req, res) {
        cartItemsInstance.addToCart(req,res)
        .then((result: any) => {
        respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
    })
            .catch((err: any) => {
                respHandler.sendError(res, err)
            })
    }
    async getCartItems(req, res) {
        cartItemsInstance.getCartItems(req,res)
        .then((result) => {
        respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
    }).catch((err) => {
        respHandler.sendError(res, err)
    })

    }
    async updateCartItems(req, res) {
        cartItemsInstance.updateCartItems(req,res)
        .then((result) => {
        respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
    })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }
    async deleteCartItems(req, res) {
        cartItemsInstance.deleteCartItems(req,res)
        .then((result) => {
        respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
    })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }

}