import { Character } from './character';
import { Movie } from './movie';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
@Table({tableName:"charactermovie"})
export class CharacterMovie extends Model{
    @ForeignKey(()=>Character)
    @Column
    characterId!:string
    @ForeignKey(()=>Movie)
    @Column
    movieId!:string
}