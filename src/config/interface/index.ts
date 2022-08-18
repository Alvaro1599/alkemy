import { Dialect } from "sequelize/types"

export interface GlobalConfigI{
    db:{
        PORT:number | string,
        DATABASE:string,
        DIALECT:Dialect,
        USER:string,
        PASSWORD:string,
        HOST:string
    }
}