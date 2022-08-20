import { CharacterMovie } from "../shared/charactersMovie/model";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { Character } from "../characters/model";
import { Gender } from "../gender/model";
import { GenderMovie } from "../shared/genderMovie/model";

@Table({ tableName: "movie" })
export class Movie extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id!: string;
  @Column({
    type: DataType.STRING,
    validate: {
      isUrl: true,
      notEmpty: true,
    },
  })
  image!: string;
  @Unique
  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  title!: string;
  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  history!: string;
  @Column({
    type: DataType.NUMBER,
    validate: {
      min: 1,
      max: 5,
      notEmpty: true,
    },
  })
  review!: number;
  @BelongsToMany(() => Character, () => CharacterMovie)
  characters!: Character[];
  @BelongsToMany(() => Gender, () => GenderMovie)
  genders!: Gender[];
}
