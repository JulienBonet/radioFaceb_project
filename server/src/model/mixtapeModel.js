// server/src/model/mixtapeModel.js
import db from '../../db/db.js';

export const getAllMixtapes = async () => {
  const [rows] = await db.query(`
    SELECT m.*, g.name AS genre_name, g.color as genre_color
    FROM mixtape m
    JOIN genre g ON m.genre_id = g.id
    ORDER BY m.created_at DESC
  `);
  return rows;
};

export const getMixtapeById = async (id) => {
  const [[row]] = await db.query(
    `SELECT m.*, g.name AS genre_name, g.color as genre_color
    FROM mixtape m
    JOIN genre g ON m.genre_id = g.id
    WHERE m.id = ?`,
    [id]
  );
  return row;
};

export const getMixtapeCoverById = async (id) => {
  const [[row]] = await db.query(
    `
    SELECT cover
    FROM mixtape
    WHERE id = ?
    `,
    [id]
  );

  return row;
};

export const createMixtape = async (data) => {
  const {
    title,
    slug,
    cover,
    embed_ref,
    platform,
    presentation,
    tracklist,
    genre_id,
    is_published,
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO mixtape (
      title,
      slug,
      cover,
      embed_ref,
      platform,
      presentation,
      tracklist,
      genre_id,
      is_published
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      title,
      slug,
      cover,
      embed_ref,
      platform,
      presentation,
      tracklist,
      genre_id,
      is_published,
    ]
  );

  return result.insertId;
};

export const updateMixtape = async (id, data) => {
  await db.query(
    `UPDATE mixtape SET ? WHERE id = ?`,
    [data, id]
  );
};

export const deleteMixtape = async (id) => {
  await db.query(`DELETE FROM mixtape WHERE id = ?`, [id]);
};