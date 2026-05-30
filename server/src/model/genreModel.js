// server/src/model/genreModel.js
import db from '../../db/db.js';

export const getAllGenres =
  async () => {
    const [rows] =
      await db.query(`
        SELECT *
        FROM genre
        ORDER BY name ASC
      `);

    return rows;
  };

export const getGenreById =
  async (id) => {
    const [[row]] =
      await db.query(
        `
        SELECT *
        FROM genre
        WHERE id = ?
      `,
        [id]
      );

    return row;
  };

export const createGenre =
  async (data) => {
    const { name, color } = data;

    const [result] =
      await db.query(
        `
        INSERT INTO genre
        (name, color)
        VALUES (?, ?)
      `,
        [name, color]
      );

    return result.insertId;
  };

export const updateGenre =
  async (id, data) => {
    await db.query(
      `
      UPDATE genre
      SET ?
      WHERE id = ?
    `,
      [data, id]
    );
  };

export const deleteGenre =
  async (id) => {
    await db.query(
      `
      DELETE FROM genre
      WHERE id = ?
    `,
      [id]
    );
  };