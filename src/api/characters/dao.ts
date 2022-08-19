import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { Movie } from "../movies/model";
import {
  createCharacterMapper,
  deleteCharacterMapper,
  updateCharacterMapper,
} from "./dto";
import { Character } from "./model";
class CharacterService {
  createCharacter(data: any): Promise<Character> {
    let dataFormated = createCharacterMapper(data);
    return Character.create(dataFormated);
  }
  getAllCharacters() {
    return Character.findAll({ attributes: ["name", "image", "id"] });
  }
  deleteCharacter(data: any) {
    let dataFormated = deleteCharacterMapper(data);
    return Character.destroy({
      where: {
        id: dataFormated.id,
      },
    });
  }
  findCharacter(id: string) {
    return Character.findByPk(id, {
      include: Movie,
    });
  }
  updateCharacter(character: Character, data: any) {
    let dataFormated = updateCharacterMapper(data);
    return character.update({ ...dataFormated });
  }
  findCharacterByQuery({ field, value }: Record<string, string | number>) {
    let config: Record<string, string | number | Record<symbol, string>> | number| string= {};
    if (typeof value === "string") {
      config[field] = {
        [Op.iLike]: "%" + value + "%",
      };
    }
    config[field] =value
    return Character.findAll({
      where: config,
    });
  }
}
export default new CharacterService();
