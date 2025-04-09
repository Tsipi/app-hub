import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-end mb-4">
      </div>
      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <div className="space-y-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {t('signIn')}
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-4">
          {t('signUp')}
        </button>
      </div>
    </main>
  );
} 