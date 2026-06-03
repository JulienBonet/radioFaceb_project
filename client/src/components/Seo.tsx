// client/src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  image?: string;
};

export default function Seo({
  title,
  description,
  image = '/images/Logo_radio_face_b-12_7.jpg',
}: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL;

  const fullImageUrl = image.startsWith('http')
    ? image
    : `${siteUrl}${image}`;

  const canonicalUrl = `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
}