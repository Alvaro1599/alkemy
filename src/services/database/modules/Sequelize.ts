import { User } from './../../../api/users/model';
import { Sequelize } from 'sequelize-typescript';
import { Character } from '../../../api/characters/model';
import { CharacterMovie } from '../../../api/shared/charactersMovie/model';
import { Gender } from '../../../api/gender/model';
import { GenderMovie } from '../../../api/shared/genderMovie/model';
import { Movie } from '../../../api/movies/model';
import { GlobalConfigI } from './../../../config/interface/index';
export const SequelizeConnection=async({db}:GlobalConfigI)=>{
    const sequelize = new Sequelize({
        database: db.DATABASE,
        dialect: db.DIALECT,
        username: db.USER,
        password: db.PASSWORD,
        logging: false,
        models:[User,CharacterMovie,Gender,GenderMovie,Movie,Character]
      })
      return await sequelize.sync({force:false});    
}