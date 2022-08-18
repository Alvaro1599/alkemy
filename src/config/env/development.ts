import { Dialect } from 'sequelize/types';
import { GlobalConfigI } from "../interface";

export const development:GlobalConfigI={
    app:{
        PORT:process.env.PORT_APP as string,
        JWT_SECRET:process.env.JWT_SECRET as string,
        CRYPTO_SECRET:process.env.CRYPTO_SECRET as string

    },
    db:{
        PORT:process.env.PORT as string,
        DATABASE:process.env.DATABASE as string,
        DIALECT:process.env.DIALECT as Dialect,
        USER:process.env.USER as string,
        PASSWORD:process.env.PASSWORD as string,
        HOST:process.env.HOST as string,
    }
}