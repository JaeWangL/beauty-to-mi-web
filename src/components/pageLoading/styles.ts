import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { defaultTheme, zIndices } from '@/styles';

type LoadingWrapperProps = {
  isFinished: boolean;
};
export const LoadingWrapper = styled.div<LoadingWrapperProps>`
  height: 100%;
  left: 0;
  opacity: ${(props) => (props.isFinished ? 0 : 1)};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndices.loading};
`;

export const LoadingContainer = styled.div`
  background-color: ${defaultTheme.colors.gray100};
  height: 100%;
  margin-top: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndices.loading};
`;

export const Loader = styled.div`
  animation: cssload-invert 2.3s infinite steps(2, end);
  height: 50px;
  left: 50%;
  margin-left: -40px;
  margin-top: -40px;
  position: absolute;
  top: 50%;
  width: 50px;
`;

const fancy = keyframes`
  to {
    transform: rotate(360deg) scale(0.5);
  }
`;

export const Spinner = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 5rem;

  div {
    border-radius: 50%;
    height: 6rem;
    position: absolute;
    width: 6rem;

    &.ring {
      animation: 2s ${fancy} infinite alternate;
      border-color: transparent;
      border-style: solid;
      border-width: 0.25rem;

      &:nth-of-type(1) {
        border-left-color: ${defaultTheme.colors.primary};
        border-right-color: ${defaultTheme.colors.primary};
      }

      &:nth-of-type(2) {
        animation-delay: 1s;
        border-bottom-color: ${defaultTheme.colors.primary};
        border-top-color: ${defaultTheme.colors.primary};
      }
    }

    &.dot {
      background: ${defaultTheme.colors.primary};
      height: 1rem;
      width: 1rem;
    }
  }
`;
