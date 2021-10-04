import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { Footer, Header } from '@/components';
import BaseLayout from '../base';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <BaseLayout>
      <Header />
      {children}
      <Footer />
    </BaseLayout>
  );
}

export default memo(MainLLayout, IsEqual);
