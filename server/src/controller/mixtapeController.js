// server/src/controller/mixtapeController.js
import db from '../../db/db.js';
import * as model from '../model/mixtapeModel.js';
import { slugify } from '../utils/slugify.js';
import { DEFAULT_MIXTAPE_COVER } from '../constants/mixtape.js';
import { deleteFromCloudinary } from '../utils/cloudinary.js';
import {
  createMixtapeSchema,
  updateMixtapeSchema,
} from '../validation/mixtape.schema.js';

export const getAll = async (req, res) => {
  const data = await model.getAllMixtapes();
  res.json(data);
};

export const getById = async (req, res) => {
  const data = await model.getMixtapeById(req.params.id);
  res.json(data);
};

export const create = async (req, res) => {
  try {
    const parsed = createMixtapeSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: 'Validation error',
        details: parsed.error.flatten(),
      });
    }

    const { title } = parsed.data;

    // 🔵 TITLE UNIQUE CHECK
    const existing = await db.query('SELECT id FROM mixtape WHERE title = ?', [
      title,
    ]);

    if (existing[0].length > 0) {
      return res.status(400).json({
        error: 'Title already exists',
      });
    }

    // 🔵 SLUG
    const slug = slugify(title);

    // 🔵 OPTIONAL SLUG UNIQUENESS CHECK (RECOMMENDED)
    const existingSlug = await db.query(
      'SELECT id FROM mixtape WHERE slug = ?',
      [slug]
    );

    if (existingSlug[0].length > 0) {
      return res.status(400).json({
        error: 'Slug already exists',
      });
    }

    const data = {
      ...parsed.data,
      slug,
      cover: parsed.data.cover || DEFAULT_MIXTAPE_COVER,
    };

    const id = await model.createMixtape(data);

    res.json({ id });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Erreur création mixtape',
    });
  }
};

export const update = async (req, res) => {
  try {
    const parsed = updateMixtapeSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: 'Validation error',
        details: parsed.error.flatten(),
      });
    }

    const data = parsed.data;

    // 🔵 TITLE UNIQUE CHECK
    if (data.title) {
      const existing = await db.query(
        'SELECT id FROM mixtape WHERE title = ? AND id != ?',
        [data.title, req.params.id]
      );

      if (existing[0].length > 0) {
        return res.status(400).json({
          error: 'Title already exists',
        });
      }

      data.slug = slugify(data.title);
    }

    // 🔵 COVER DELETE LOGIC
    const current = await model.getMixtapeCoverById(req.params.id);

    const oldCover = current.cover;
    const newCover = data.cover;

    if (newCover && oldCover && newCover !== oldCover) {
      await deleteFromCloudinary({
        filename: oldCover,
      });
    }

    await model.updateMixtape(req.params.id, data);

    res.json({ success: true });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Erreur update mixtape',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const mixtape = await model.getMixtapeCoverById(req.params.id);

    if (mixtape?.cover) {
      await deleteFromCloudinary({
        filename: mixtape.cover,
      });
    }

    await model.deleteMixtape(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Erreur suppression mixtape',
    });
  }
};
