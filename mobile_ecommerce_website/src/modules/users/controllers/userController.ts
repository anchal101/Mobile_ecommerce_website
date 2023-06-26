
import { respHandler } from "../../../resp-handler"
import { RESPONSE_STATUS } from "../../../resp-handler/constants"
import { UserService } from "../services/user"
import { Request, Response } from "express"

const userServiceInstance = new UserService()
 class UserController {
   async createUser(req: Request, res: Response) {
        userServiceInstance.createUser(req, res)
            .then((result: any) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err: any) => {
                respHandler.sendError(res, err)
            })
    }
    async login(req: any, res: any) {
        userServiceInstance.login(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
            }).catch((err) => {
                respHandler.sendError(res, err)
            })
    }
    async getUser(req:Request, res:Response) {
        userServiceInstance.getUser(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
            }).catch((err) => {
                respHandler.sendError(res, err)
            })

    }
    async updateUser(req:Request, res:Response) {
        userServiceInstance.updateUser(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }
    async deleteUser(req:Request, res:Response) {
        userServiceInstance.deleteUser(req, res)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
            })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }

}

export default UserController