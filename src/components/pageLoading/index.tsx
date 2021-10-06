import { useNProgress } from '@tanem/react-nprogress';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { Loader, LoadingContainer, LoadingWrapper, Spinner } from './styles';

interface IPageLoadingProps {
  isRouteChanging: boolean;
}

function PageLoading(props: IPageLoadingProps): JSX.Element {
  const { isRouteChanging } = props;
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  return (
    <LoadingWrapper isFinished={isFinished}>
      <LoadingContainer>
        <Loader>
          <Spinner>
            <div className="ring" />
            <div className="ring" />
            <div className="dot" />
          </Spinner>
        </Loader>
      </LoadingContainer>
    </LoadingWrapper>
  );
}

export default memo(PageLoading, IsEqual);
