import { Movie } from '../../movies/model';
import { Gender } from '../../gender/model';
import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
@Table({tableName:"gendermovie"})
export class GenderMovie extends Model{
    @PrimaryKey
    @Column({type:DataType.UUID,defaultValue:DataType.UUIDV4})
    id!:string
    @ForeignKey(()=>Gender)
    @Column
    genderId!:string
    @ForeignKey(()=>Movie)
    @Column
    movieId!:string
}
