import { Dialect } from "sequelize/types"

export interface GlobalConfigI{
    app:{
        PORT:number | string
        JWT_SECRET:string
        CRYPTO_SECRET:string
    },
    db:{
        PORT:number | string,
        DATABASE:string,
        DIALECT:Dialect,
        USER:string,
        PASSWORD:string,
        HOST:string
    }
}