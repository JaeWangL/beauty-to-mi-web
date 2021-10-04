import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { Footer, Header, PageHero } from '@/components';
import BaseLayout from '../base';
import { InnerPageWrapper } from './styles';

type InnerLayoutProps = {
  title: string;
  description: string;
  heroImagePath: string;
  children: React.ReactNode;
};

function InnerLayout(props: InnerLayoutProps): JSX.Element {
  const { children, description, heroImagePath, title } = props;

  return (
    <BaseLayout>
      <Header />
      <PageHero title={title} description={description} heroImagePath={heroImagePath} />
      <InnerPageWrapper>{children}</InnerPageWrapper>
      <Footer />
    </BaseLayout>
  );
}

export default memo(InnerLayout, IsEqual);
