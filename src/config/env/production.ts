import { Dialect } from 'sequelize/types';
import { GlobalConfigI } from "../interface";

export const production:GlobalConfigI={
    app:{
        PORT:process.env.PORT_APP as string,
        JWT_SECRET:process.env.JWT_SECRET as string
    },
    db:{
        PORT:process.env.PORT_PROD as string,
        DATABASE:process.env.DATABASE_PROD as string,
        DIALECT:process.env.DIALECT_PROD as Dialect,
        USER:process.env.USER_PROD as string,
        PASSWORD:process.env.PASSWORD_PROD as string,
        HOST:process.env.HOST_PROD as string,
    }
}