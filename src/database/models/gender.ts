import { GenderMovie } from './genderMovie';
import { Movie } from './movie';
import { BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Character } from "./character";

@Table({tableName:"gender"})
export class Gender extends Model{
    @PrimaryKey
    @Column({type:DataType.UUID,defaultValue:DataType.UUIDV4})
    id!:string
    @Column
    name!:string
    @Column
    image!:string
    @ForeignKey(()=>Character)
    @Column
    CharacterId!:number
    @BelongsToMany(()=>Movie,()=>GenderMovie)
    movies!:Movie[]
}