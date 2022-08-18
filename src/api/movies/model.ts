import { CharacterMovie } from '../shared/charactersMovie/model';
import { BelongsToMany, Column, DataType,Model, PrimaryKey, Table } from "sequelize-typescript";
import { Character } from "../characters/model";
import { Gender } from "../gender/model";
import { GenderMovie } from "../shared/genderMovie/model";

@Table({tableName:"movie"})
export class Movie extends Model{
    @PrimaryKey
    @Column({type:DataType.UUID,defaultValue:DataType.UUIDV4})
    id!:string
    @Column
    image!:string
    @Column
    title!:string
    @Column
    history!:string
    @Column
    review!:number
    @BelongsToMany(()=>Character,()=>CharacterMovie)
    characters!:Character[]
    @BelongsToMany(()=>Gender,()=>GenderMovie)
    genders!:Gender[]
}