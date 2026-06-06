// server/src/controller/uploadController.js
import { uploadBufferToCloudinary } from '../utils/cloudinary.js';

export const uploadMixtapeCover = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: 'Aucun fichier envoyé',
      });
    }

    const result = await uploadBufferToCloudinary({
      buffer: req.file.buffer,
    });

    res.json({
      filename: result.filename,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Erreur upload image',
    });
  }
};
