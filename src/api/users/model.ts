import { Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
@Table({tableName:"user"})
export class User extends Model{
    @PrimaryKey
    @Column({type:DataType.UUID,defaultValue:DataType.UUIDV4})
    id!:string;
    @Column({type:DataType.STRING,validate:{
        notEmpty:true
    }})
    name!:string
    @Column({type:DataType.STRING,validate:{
        notEmpty:true
    }})
    lastName!:string
    @Unique
    @Column({type:DataType.STRING,validate:{
        notEmpty:true,isEmail:true
    }})
    email!:string
    @Column({type:DataType.STRING,validate:{
        notEmpty:true,
    }})
    password!:string
}