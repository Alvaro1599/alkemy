import { Character } from '../../characters/model';
import { Movie } from '../../movies/model';
import { Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
@Table({tableName:"charactermovie"})
export class CharacterMovie extends Model{
    @PrimaryKey
    @Column({type:DataType.UUID,defaultValue:DataType.UUIDV4})
    id!:string
    @ForeignKey(()=>Character)
    @Column
    characterId!:string
    @ForeignKey(()=>Movie)
    @Column
    movieId!:string
}
