import { CharacterMovie } from './characterMovie';
import { Column, Model, Table, BelongsToMany, PrimaryKey, DataType } from "sequelize-typescript";
import { Movie } from "./movie";

@Table({tableName:"character"})
export class Character extends Model{
    @PrimaryKey
    @Column({type:DataType.UUID,defaultValue:DataType.UUIDV4})
    id!:string
    @Column
    image!:string;
    @Column
    name!:string
    @Column
    age!:number
    @Column
    weight!:string
    @Column
    history!:string
    @BelongsToMany(()=>Movie,()=>CharacterMovie)
    movies!:Movie[]
}