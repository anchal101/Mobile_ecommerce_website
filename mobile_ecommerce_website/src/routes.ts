import { Router } from "express"
import userRoutes from "../src/modules/users/routes/userRoute"
import productRoutes from "../src/modules/products/routes/productRoute"
import cartRoutes from "../src/modules/cartItems/routes/cartItemsRoute"
const mainRouter = Router()

mainRouter.use(userRoutes)
mainRouter.use(productRoutes)
mainRouter.use(cartRoutes)


export default mainRouter
