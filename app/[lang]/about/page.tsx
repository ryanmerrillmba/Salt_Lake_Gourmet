import { dictionaries } from '../../../lib/dictionaries';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

interface PageProps {
  params: {
    lang: string;
  };
}

export default function AboutPage({ params }: PageProps) {
  const dict = dictionaries[params.lang as keyof typeof dictionaries] || dictionaries.en;

  return (
    <div className="min-h-screen bg-white">
      <Navigation dict={dict} lang={params.lang} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {dict.about.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {dict.about.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {dict.about.story}
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              {dict.about.mission}
            </p>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={params.lang} />
    </div>
  );
}
