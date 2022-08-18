import { User } from './../../../api/users/model';
import { Sequelize } from 'sequelize-typescript';
import { Character } from '../../../api/characters/model';
import { CharacterMovie } from '../../../api/shared/charactersMovie/model';
import { Gender } from '../../../api/gender/model';
import { GenderMovie } from '../../../api/shared/genderMovie/model';
import { Movie } from '../../../api/movies/model';
import { GlobalConfigI } from './../../../config/interface/index';
export const SequelizeConnection=({db}:GlobalConfigI):Promise<Sequelize>=>{
    const sequelize = new Sequelize({
        database: db.DATABASE,
        dialect: db.DIALECT,
        username: db.USER,
        password: db.PASSWORD,
        logging: false,
        models: [Character, CharacterMovie, Gender, GenderMovie, Movie,User],
      })
      return sequelize.sync();    
}