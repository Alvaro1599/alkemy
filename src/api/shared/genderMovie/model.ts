import { Movie } from '../../movies/model';
import { Gender } from '../../gender/model';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
@Table({tableName:"gendermovie"})
export class GenderMovie extends Model{
    @ForeignKey(()=>Gender)
    @Column
    genderId!:string
    @ForeignKey(()=>Movie)
    @Column
    movieId!:string
}
