// server/src/controller/adminStatsController.js

import db from '../../db/db.js';

export const getStats = async (req, res) => {
  try {
    const [[mixtapes]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM mixtape
    `);

    const [[published]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM mixtape
      WHERE is_published = 1
    `);

    const [[draft]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM mixtape
      WHERE is_published = 0
    `);

    const [[genres]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM genre
    `);

    const [[users]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM user
    `);

    res.json({
      mixtapes: mixtapes.total,
      publishedMixtapes: published.total,
      draftMixtapes: draft.total,
      genres: genres.total,
      users: users.total,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Stats error',
    });
  }
};
