import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadBufferToCloudinary = ({ buffer }) => {
  return new Promise((resolve, reject) => {
    const randomString = Math.random().toString(36).substring(2, 8);

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'radio/mixtapes',
        public_id: `mixtape_${randomString}`,
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
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const deleteFromCloudinary = async ({ public_id }) => {
  if (!public_id) return;
  await cloudinary.uploader.destroy(public_id);
};