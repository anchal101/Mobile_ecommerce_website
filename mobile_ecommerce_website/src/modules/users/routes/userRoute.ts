import {Router} from "express"
import UserController from "../controllers/userController"
import UserValidator from "../Validator/validator"

class MainRouter {

    router: Router;
    user: UserController
    constructor() {
        this.user = new UserController()
        this.router = Router({ mergeParams: true })
        this.userRouters()
    }

    userRouters() {
       // const valid = new UserValidator()
        this.router.route('/api/v1/createUser')
            .post(this.user.createUser)
            this.router.route(`/api/v1/login`)
            .post(this.user.login)
            this.router.route(`/api/v1/getUser`)
            .get(this.user.getUser)
        this.router.route(`/api/v1/updateUser/:id`)
            .patch(this.user.updateUser)
        this.router.route(`/api/v1/deleteUser/:id`)
            .delete(this.user.deleteUser)
        

    }

}

export default new MainRouter().router

