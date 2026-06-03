// src/components/Seo.tsx

import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
};

export default function Seo({
  title,
  description,
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />
    </Helmet>
  );
}