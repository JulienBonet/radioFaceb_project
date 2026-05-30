// VERIF : A EFFACER CAR DESORMAIS DANS src/admin/api
// Check que tout se plug bien et bye

const API_URL =
  import.meta.env
    .VITE_API_URL as string;

export const uploadMixtapeCover =
  async (
    file: File
  ): Promise<{
    filename: string;
  }> => {
    const formData =
      new FormData();

    formData.append(
      'cover',
      file
    );

    const res = await fetch(
      `${API_URL}/upload/mixtape-cover`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error(
        'Error uploading image'
      );
    }

    return res.json();
  };