import User from "../models/user"
import Exception from "../../../resp-handler/exception"
import { ERROR_TYPE, RESPONSE_STATUS } from '../../../resp-handler/constants'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import CartItems from '../../cartItems/models/cartItems'
import { Request, Response } from "express";
import { logger } from "../../../logger";



const TOKEN_KEY = 'Mobile_Ecommerse_Site'

export class UserService {

    createUser = async (req: Request, res:Response) => {
        let email = req.body.email

        try {
            let emailExist = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (emailExist) {
                throw new Exception(RESPONSE_STATUS.ALREADY_EXISTS, 'email already exist:: ')
            }
            const encryptedPassword = bcrypt.hash(req.body.password, 10)
            let password = encryptedPassword
            let createUser = await User.create(req.body)
              await this.assignCartToUser(createUser)

            const token = jwt.sign(
                { user_id: createUser.dataValues.id, email },
                TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // save user token
            createUser.dataValues.token = token;
            await createUser.save();

            // return new user

            return Promise.resolve(createUser)
        }
        catch (err) {
            logger.info("error in creating user",err)
            return Promise.reject(err)
        }
    }

    login = async (req: Request, res: Response) => {
            let {email,password} = req.body
         try{
            let user = await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                throw new Exception(RESPONSE_STATUS.NOT_FOUND,'email not exist')
            }
           // const pwd = await bcrypt.compare(password,user?.dataValues?.password)
           if(password !== user?.dataValues?.password){
            throw new Exception(RESPONSE_STATUS.UNAUTHORIZED,'password not matched')
           }
           // console.log("pwd",pwd)
            // if(!pwd){
            //     throw new Exception(RESPONSE_STATUS.UNAUTHORIZED,'password not matched')
            // }
            if (user && (await password, user?.dataValues?.password)) {
                // Create token
                const token = jwt.sign(
                    { user_id: user?.dataValues?.id, email },
                    TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                // save user token
                user.dataValues.token = token;
                // user.roleName = userRole
                return Promise.resolve(user)
            }
        }catch(err){
             return Promise.reject(err)
        }
            

    }
    getUser = async (req:Request, res:Response) => {
        try {
            
           if(req.query.id){
            let data = await User.findOne({
                where:{
                    id:req.query.id
                }
            })
            if(data){
                return Promise.resolve(data) 
            }
            else{
                throw new Exception(RESPONSE_STATUS.NOT_FOUND,'id not found')
            }
           }
           let allData = await User.findAll()

            return Promise.resolve(allData)
        }
        catch (error) {
            return Promise.reject(error)
        }

    }
    updateUser = async (req:Request, res:Response) => {

        try {
            let userId = req.params.userId || req.params.id
            let userExist = await User.findOne({ 
                where:
                 { id: userId } 
                });
            if (!userExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "user not exist")
            }
            let updatedUser = await User.update(req.body, { where: { id: userId } })
            return Promise.resolve(updatedUser)
        }
        catch (error) {
            logger.info("Error in update User::",error)
            return Promise.reject(error)
        }

    }
    deleteUser = async (req:Request, res:Response) => {
        try {
            const userId = req.params.id
            let userExist: any = await User.findOne({ where: { id: userId } })
            if (!userExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "user not exist")
            }
            await User.destroy({ where: { id: userId } })
            return Promise.resolve("user deleted successfully.")
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
    async assignCartToUser(createUser:any) {
        try {
            const cartId = createUser.dataValues.cartItemId
            const userId = createUser.dataValues.id
            const cartCreate = await CartItems.create({
                userId: userId,
                cartId: cartId
            })
            cartCreate.save()
        } catch (err: any) {
            console.log(err)
        }
    }

}

