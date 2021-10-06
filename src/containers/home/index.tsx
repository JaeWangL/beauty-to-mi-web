import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { SectionPricing } from '@/components';
import { MainLayout } from '@/layouts';

function Home(): JSX.Element {
  const { t } = useTranslation(['common']);

  return (
    <MainLayout>
      <p>Test</p>
      <SectionPricing />
    </MainLayout>
  );
}

export default memo(Home, IsEqual);
