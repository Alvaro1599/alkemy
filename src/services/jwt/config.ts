import {SignOptions} from "jsonwebtoken"
export const configOptions:SignOptions={
    algorithm:"HS256",
    expiresIn:"7 days",
}