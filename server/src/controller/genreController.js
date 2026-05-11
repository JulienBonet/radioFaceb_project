import db from '../../db/db.js';

import * as model from '../model/genreModel.js';

import {
  genreSchema,
} from '../validation/genreSchema.js';

export const getAll =
  async (req, res) => {
    try {
      const data =
        await model.getAllGenres();

      res.json(data);
    } catch (err) {
      console.error(err);

      res.status(500).json({
        error:
          'Erreur récupération genres',
      });
    }
  };

export const getById =
  async (req, res) => {
    try {
      const data =
        await model.getGenreById(
          req.params.id
        );

      res.json(data);
    } catch (err) {
      console.error(err);

      res.status(500).json({
        error:
          'Erreur récupération genre',
      });
    }
  };

export const create =
  async (req, res) => {
    try {
      const parsed =
        genreSchema.safeParse(
          req.body
        );

      if (!parsed.success) {
        return res
          .status(400)
          .json({
            error:
              'Validation error',
            details:
              parsed.error.flatten(),
          });
      }

      const { name } =
        parsed.data;

      // UNIQUE CHECK

      const existing =
        await db.query(
          `
          SELECT id
          FROM genre
          WHERE name = ?
        `,
          [name]
        );

      if (
        existing[0].length > 0
      ) {
        return res
          .status(400)
          .json({
            error:
              'Genre already exists',
          });
      }

      const id =
        await model.createGenre(
          parsed.data
        );

      res.json({ id });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        error:
          'Erreur création genre',
      });
    }
  };

export const update =
  async (req, res) => {
    try {
      const parsed =
        genreSchema.partial().safeParse(
          req.body
        );

      if (!parsed.success) {
        return res
          .status(400)
          .json({
            error:
              'Validation error',
            details:
              parsed.error.flatten(),
          });
      }

      if (parsed.data.name) {
        const existing =
          await db.query(
            `
            SELECT id
            FROM genre
            WHERE name = ?
            AND id != ?
          `,
            [
              parsed.data.name,
              req.params.id,
            ]
          );

        if (
          existing[0].length >
          0
        ) {
          return res
            .status(400)
            .json({
              error:
                'Genre already exists',
            });
        }
      }

      await model.updateGenre(
        req.params.id,
        parsed.data
      );

      res.json({
        success: true,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        error:
          'Erreur update genre',
      });
    }
  };

export const remove =
  async (req, res) => {
    try {
      await model.deleteGenre(
        req.params.id
      );

      res.json({
        success: true,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        error:
          'Erreur suppression genre',
      });
    }
  };