// client/src/admin/api/upload.api.ts

const API_URL = import.meta.env.VITE_API_URL as string;

export const uploadMixtapeCover = async (
  file: File,
): Promise<{ filename: string }> => {
  const formData = new FormData();
  formData.append('cover', file);

  const token = localStorage.getItem('admin_token');

  const res = await fetch(`${API_URL}/upload/mixtape-cover`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      // ⚠️ ne PAS mettre Content-Type
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Error uploading image');
  }

  return res.json();
};