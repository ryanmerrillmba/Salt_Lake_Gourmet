import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return {
    title: "Salt Lake City Gourmet Recipes | Foodie Paradise",
    description: "Discover exceptional gourmet recipes perfect for Salt Lake City food enthusiasts. From mountain-inspired cuisine to international flavors, elevate your culinary journey.",
    alternates: {
      canonical: `https://saltlakegourmet.com/${params.lang}`,
      languages: {
        'en': `https://saltlakegourmet.com/en`,
      },
    },
  };
}

export default function LangLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
