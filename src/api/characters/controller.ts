import { Request, Response } from "express";
import CharacterService from "./dao";
import { findQueryCharacterMapper } from "./dto";
const characterController = {
  getCharacters: async function (req: Request, res: Response) {
    try {
      let characters = await CharacterService.getAllCharacters();
      return res.status(200).json(characters);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  findCharacterById: async function (req: Request, res: Response) {
    try {
      let characters = await CharacterService.findCharacter(req.body.id)
      if(!characters) return res.status(400).send("character was not found")
      return res.status(200).json(characters);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  createCharacter: async function (req: Request, res: Response) {
    try {
      await CharacterService.createCharacter(req.body);
      return res.status(201).send("character was created");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  deleteCharacter: async function (req: Request, res: Response) {
    try {
      await CharacterService.deleteCharacter(req.body);
      return res.status(200).send("character was deleted");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  updateCharacter: async function (req: Request, res: Response) {
    try {
      let character = await CharacterService.findCharacter(req.body.id);
      if (!character) return res.status(404).send("Character not Found");
      await CharacterService.updateCharacter(character, req.body);
      return res.status(201).send("Character was update");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  findCharacterByQuery: async function (req: Request, res: Response) {
    try {
      let character = await CharacterService.findCharacterByQuery(findQueryCharacterMapper(req.query));
      if (!character) return res.status(204).json(character);
      return res.status(201).json(character);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};

export default characterController;
