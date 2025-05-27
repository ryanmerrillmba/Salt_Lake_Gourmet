import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function generateMetadata({
  title = 'Salt Lake City Gourmet Recipes | Foodie Paradise',
  description = 'Discover exceptional gourmet recipes perfect for Salt Lake City food enthusiasts. From mountain-inspired cuisine to international flavors, elevate your culinary journey.',
  keywords = 'Salt Lake City recipes, gourmet cooking, Utah food, foodie recipes, mountain cuisine, culinary Salt Lake',
  image = '/images/salt-lake-gourmet-logo.png',
  url = 'https://saltlakegourmet.com',
  type = 'website'
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Salt Lake Gourmet Recipes',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type as 'website' | 'article',
    },    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
}
