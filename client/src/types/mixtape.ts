export type Mixtape = {
  id: number;
  title: string;
  slug: string;
  cover: string;
  embed_ref: string;
  platform: 'mixcloud' | 'hearthis';
  presentation: string | null;
  tracklist: string | null;
  genre_id: number;
  genre_name: string;
  genre_color: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};