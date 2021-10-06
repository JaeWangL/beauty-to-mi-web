import styled from '@emotion/styled';
import { breakPoints, defaultTheme } from '@/styles';

export const PhotoWrapper = styled.div`
  border-radius: 4px;
  color: ${defaultTheme.colors.white};
  margin-bottom: 20px;
  padding: 0 10px;
  position: relative;
  text-align: center;
  width: 33.33%;

  .hover-overlay,
  .hover-overlay img {
    border-radius: 4;
    overflow: hiddenpx;
  }

  &:hover {
    img {
      transform: scale(1);
    }
    .item-overlay,
    .image-description {
      opacity: 1;
    }

    .item-overlay::before,
    .item-overlay::after {
      opacity: 1;
      transform: scale(1);
    }

    .image-data h5,
    .image-data p {
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${breakPoints.lgDown} {
    width: 50%;
  }

  @media ${breakPoints.mdDown} {
    padding: 0;
    width: 100%;
  }
`;
