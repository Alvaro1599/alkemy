import { GenderMovie } from './../models/genderMovie';
import { Gender } from './../models/gender';
import { CharacterMovie } from './../models/characterMovie';
import { models_dir } from '../__dir';
import { Sequelize } from "sequelize-typescript";
import { GlobalConfigI } from "../../config/interface";
import { CurrentDatabase } from "./base/base";
import path from 'path';
import { Character } from '../models/character';
import { Movie } from '../models/movie';

export class SequelizeDatabase implements CurrentDatabase{
    async init({db}:GlobalConfigI): Promise<Sequelize> {
        console.log();
        const sequelize= new Sequelize({
            database:db.DATABASE,
            dialect:db.DIALECT,
            username:db.USER,
            password:db.PASSWORD,
            logging:false,
            models:[Character,CharacterMovie,Gender,GenderMovie,Movie]
        })
        console.log("database is running");
        return await sequelize.sync()
    }
}