import { Request, Response } from "express";
import MovieService from "./dao";
import { findQueryMovieMapper } from "./dto";
const movieController = {
  getMovie: async function (req: Request, res: Response) {
    try {
      let characters = await MovieService.getAllMovie();
      return res.status(200).json(characters);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  findMovieById: async function (req: Request, res: Response) {
    try {
      let characters = await MovieService.findMovie(req.body.id);
      if (!characters) return res.status(400).send("Movie was not found");
      return res.status(200).json(characters);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  createMovie: async function (req: Request, res: Response) {
    try {
      await MovieService.createMovie(req.body);
      return res.status(201).send("Movie was created");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  deleteMovie: async function (req: Request, res: Response) {
    try {
      if (!(await MovieService.deleteMovie(req.body)))
        return res.status(404).send("Movie wasn't found");
      return res.status(200).send("Movie was deleted");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  updateMovie: async function (req: Request, res: Response) {
    try {
      let movie = await MovieService.findMovie(req.body.id);
      if (!movie) return res.status(404).send("Movie not Found");
      await MovieService.updateMovie(movie, req.body);
      return res.status(201).send("Movie was update");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  findMovieByQuery: async function (req: Request, res: Response) {
    try {
      let character = await MovieService.findMovieByQuery(
        findQueryMovieMapper(req.query)
      );
      if (!character) return res.status(204).json(character);
      return res.status(201).json(character);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};

export default movieController;
