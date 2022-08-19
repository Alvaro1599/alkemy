import { CharacterMovie } from "../shared/charactersMovie/model";
import {
  Column,
  Model,
  Table,
  BelongsToMany,
  PrimaryKey,
  DataType,
  AllowNull,
} from "sequelize-typescript";
import { Movie } from "../movies/model";

@Table({ tableName: "character" })
export class Character extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id!: string;
  @Column({ type: DataType.STRING,validate:{
    notEmpty:true
  } })
  image!: string;
  @Column({ type: DataType.STRING,validate:{
    notEmpty:true
  } })
  name!: string;
  @Column({ type: DataType.INTEGER,validate:{
    notEmpty:true
  } })
  age!: number;
  @Column({ type: DataType.FLOAT,validate:{
    notEmpty:true
  } })
  weight!: string;
  @Column({ type: DataType.TEXT,validate:{
    notEmpty:true
  } })
  history!: string;
  @BelongsToMany(() => Movie, () => CharacterMovie)
  movies!: Movie[];
}
