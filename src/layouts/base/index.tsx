import { memo, useEffect } from 'react';
import IsEqual from 'react-fast-compare';
import { useSettingsStore } from '@/hooks';

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;
  const settings = useSettingsStore();

  useEffect(() => {
    settings.setMobile({ isMobile: window.innerWidth < 768 });
  }, []);

  return <div>{children}</div>;
}

export default memo(BaseLayout, IsEqual);
