import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadBufferToCloudinary = ({ buffer }) => {
  return new Promise((resolve, reject) => {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 8);

    const filename = `mixtape_${randomString}.jpg`;

    const publicId = filename.replace('.jpg', '');

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'radio/mixtapes',

        public_id: publicId,

        transformation: [
          {
            width: 500,
            height: 500,
            crop: 'fill',
            gravity: 'auto',
          },
        ],
      },

      (error, result) => {
        if (error) return reject(error);

        resolve({
          filename,
          url: result.secure_url,
        });
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const deleteFromCloudinary = async ({
  filename,
}) => {
  if (!filename) return;

  if (filename === 'default-mixtape.jpg') {
    return;
  }

  const publicId = filename.replace('.jpg', '');

  await cloudinary.uploader.destroy(
    `radio/mixtapes/${publicId}`
  );
};