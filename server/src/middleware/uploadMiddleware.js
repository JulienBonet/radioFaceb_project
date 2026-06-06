// server/src/middleware/uploadMiddleware.js
import multer from 'multer';

const storage = multer.memoryStorage();

export const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },

  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new Error(
          'Format invalide. Utilisez JPG, PNG ou WEBP.'
        )
      );
    }

    cb(null, true);
  },
});