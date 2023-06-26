import { RESPONSE_STATUS } from "../../../resp-handler/constants";
import Exception from "../../../resp-handler/exception";
import CartItems from "../models/cartItems";

class CartItemsService {

    addToCart = async (req: any, res: any) => {
        const { productId, quantity, userId, cartId } = req.body
        try {
            let cartItem = await CartItems.findOne({ where: { userId: userId, cartId: cartId } })
            if (cartItem) {
                let newquantity: any

                if (cartItem.dataValues.quantity != null) {
                    newquantity = quantity + cartItem.dataValues.quantity
                }
                await CartItems.update({ quantity: newquantity, productId: productId }, { where: { cartId: cartId } })
            }
            return Promise.resolve(cartItem)
        } catch (err) {
            return Promise.reject(err)
        }
    }
    getCartItems = async (req: any, res: any) => {
        try {
            
            const carts: any = await CartItems.findAll()
            return Promise.resolve(carts)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
    updateCartItems = async (req: any, res: any) => {
        try {
            let cartId = req.params.id
            const { quantity } = req.body
            let cartExist = await CartItems.findOne({ where: { id: cartId } });
            if (!cartExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "cart not exist")
            }
            let updateObj: any = req.body
            await CartItems.update(updateObj, { where: { cartId: cartId } })
            let updatedCart = await CartItems.findOne({ where: { cartId: cartId } });

            return Promise.resolve(updatedCart)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
    deleteCartItems = async (req: any, res: any) => {
        try {
            const cartId = req.params.id
            let cartExist: any = await CartItems.findOne({ where: { cartId: cartId } })
            if (!cartExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "cart not exist")
            }

            //to delete cart
            await CartItems.destroy({ where: { cartId: cartId } })
            return Promise.resolve("cart deleted successfully.")
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

}
let cartItemsInstance = new CartItemsService
export default cartItemsInstance