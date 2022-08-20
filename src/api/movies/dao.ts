import { Op } from "sequelize";
import { Character } from "../characters/model";
import { Gender } from "../gender/model";
import { createMovieMapper, deleteMovieMapper, updateMovieMapper } from "./dto";
import {  Movie } from "./model";
class MovieService {
  createMovie(data: any): Promise<Movie> {
    let dataFormated = createMovieMapper(data);
    return Movie.create(dataFormated);
  }
  getAllMovie() {
    return Movie.findAll({ include:[Character,Gender]});
  }
  deleteMovie(data: any) {
    let dataFormated = deleteMovieMapper(data);
    return Movie.destroy({
      where: {
        id: dataFormated.id,
      }
    });
  }
  findMovie(id: string) {
    return Movie.findByPk(id, {
      include: Character,
    });
  }
  updateMovie(character: Movie, data: any) {
    let dataFormated = updateMovieMapper(data);
    return character.update({ ...dataFormated });
  }
  findMovieByQuery({ field, value }: Record<string, string | number>) {
    let config: Record<string, string | number | Record<symbol, string>> | number| string= {};
    if (typeof value === "string") {
      config[field] = {
        [Op.iLike]: "%" + value + "%",
      };
    }
    config[field] =value
    return Movie.findAll({
      where: config,
    });
  }
}
export default new MovieService