import styled from '@emotion/styled';

export const MasonryItem = styled.div`
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0 10px;
  position: relative;
  text-align: center;
  width: 33.33%;

  &:hover {
    img {
      transform: scale(1);
    }
  }
`;

export const HoverOverlay = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    border-radius: 4;
    overflow: hiddenpx;
  }

  &:hover {
    .image-description {
      opacity: 1;
    }
  }
`;
