
import { Request, Response } from "express"
import { respHandler } from "../../../resp-handler"
import { RESPONSE_STATUS } from "../../../resp-handler/constants"
import productServiceInstance from "../services/product"

class ProductController {
    async createProduct(req: Request, res: Request) {
        productServiceInstance.createProduct(req, res)
            .then((result: any) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err: any) => {
                respHandler.sendError(res, err)
            })
    }
    async getProduct(req: Request, res: Response) {
        productServiceInstance.getProduct(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
            }).catch((err) => {
                respHandler.sendError(res, err)
            })

    }
    async updateProduct(req: Request, res: Response) {
        productServiceInstance.updateProduct(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }
    async deleteProduct(req: Request, res: Response) {
        productServiceInstance.deleteProduct(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
            })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }

}
export default ProductController