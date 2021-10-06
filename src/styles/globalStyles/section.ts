import { css } from '@emotion/react';
import { breakPoints } from '../theme';

export const sectionTitleStyles = css`
  .section-title {
    position: relative;
    text-align: center;

    p {
      color: #888;
      margin: 12px 0 0;
      padding: 0 15%;
    }
  }

  .tra-header {
    font-family: 'Alex Brush', cursive;
    font-size: 6rem;
    letter-spacing: 2px;
    line-height: 1;
    margin-bottom: -45px;
    margin-top: -30px;
    opacity: 0.15;
    position: relative;
  }

  .section-id {
    font-family: 'Alex Brush', cursive;
    font-size: 2.5rem;
    letter-spacing: 2px;
    line-height: 1;
    margin-bottom: 5px;
    opacity: 0.6;
  }

  .title-before {
    &.ico-70 {
      margin-bottom: 10px;
      margin-top: -10px;
      transform: rotate(35deg);
    }

    &.ico-60 {
      margin-bottom: 10px;
      margin-top: -10px;
      transform: rotate(40deg);
    }
  }

  .title-after.ico-60 {
    transform: rotate(40deg);
  }

  @media ${breakPoints.xlDown} {
    .section-title.mb-60 {
      margin-bottom: 50px;
    }
    .section-title.mb-50 {
      margin-bottom: 40px;
    }
    .tra-header {
      font-size: 4.75rem;
      margin-bottom: -35px;
    }
    .section-id {
      font-size: 2.35rem;
    }
  }

  @media ${breakPoints.lgDown} {
    .section-title.mb-60 {
      margin-bottom: 50px;
    }
    .section-title p {
      padding: 0 10%;
    }

    .tra-header {
      font-size: 4.35rem;
      margin-bottom: -35px;
    }
  }

  @media ${breakPoints.mdDown} {
    .section-title.mb-60 {
      margin-bottom: 45px;
    }
    .section-title.mb-50 {
      margin-bottom: 35px;
    }
    .section-title p {
      font-size: 1.0625rem;
      margin-top: 10px;
      padding: 0;
    }

    .tra-header {
      font-size: 4.15rem;
      margin-bottom: -35px;
    }
  }

  @media ${breakPoints.smDown} {
    .section-title.mb-60 {
      margin-bottom: 45px;
    }
    .section-title.mb-50 {
      margin-bottom: 35px;
    }
    .section-title p {
      font-size: 1.0625rem;
      margin-top: 10px;
      padding: 0 3%;
    }

    .tra-header {
      font-size: 2.25rem;
      margin-bottom: -20px;
    }
    .section-id {
      font-size: 1.85rem;
    }
  }

  @media ${breakPoints.xsDown} {
    .section-title.mb-60 {
      margin-bottom: 45px;
    }
    .section-title.mb-50 {
      margin-bottom: 35px;
    }
    .section-title p {
      font-size: 1.05rem;
      margin-top: 10px;
      padding: 0;
    }

    .tra-header {
      font-size: 2.05rem;
      margin-bottom: -20px;
    }
    .section-id {
      font-size: 1.65rem;
    }
  }
`;
