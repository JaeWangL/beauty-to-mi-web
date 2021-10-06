import { css } from '@emotion/react';
import { defaultTheme } from '../theme';

const backgroundColorStyles = css`
  .bg-color-01 {
    background-color: ${defaultTheme.colors.gray100};
  }
  .bg-color-02 {
    background-color: #f7f4f0;
  }
  .bg-color-03 {
    background-color: ${defaultTheme.colors.pink400};
  }
  .bg-color-04 {
    background-color: #d8c2be;
  }
  .bg-color-05 {
    background-color: #f0e6e0;
  }
  .bg-color-06 {
    background-color: #fff6f3;
  }
  .bg-color-07 {
    background-color: #d8c2be;
  }
  .bg-color-08 {
    background-color: #fef2f0;
  }
  .bg-color-09 {
    background-color: ${defaultTheme.colors.pink400};
  }
  .bg-color-10 {
    background-color: #3f2b4e;
  }
`;

const buttonColorStyles = css`
  .btn-tra-01,
  .tra-01-hover:hover {
    background-color: transparent;
    border-color: #efa697 !important;
    color: #efa697 !important;
  }

  .btn-tra-02,
  .tra-02-hover:hover {
    background-color: transparent;
    border-color: #efa697 !important;
    color: #efa697 !important;
  }

  .btn-color-01 {
    background-color: #b7948e;
    border-color: #b7948e !important;
    color: #fff !important;
  }

  .btn-color-02 {
    background-color: #efa697;
    border-color: #efa697 !important;
    color: #fff !important;
  }
`;

const textColorStyles = css`
  .txt-color-01 {
    color: ${defaultTheme.colors.gray600};
  }
  .txt-color-02 {
    color: ${defaultTheme.colors.darkPink400};
  }
  .txt-color-03 {
    color: ${defaultTheme.colors.pink400};
  }
  .txt-color-04 {
    color: ${defaultTheme.colors.darkPink500};
  }
  .txt-color-05 {
    color: ${defaultTheme.colors.gray500};
  }
`;

export const coreColorStyles = css`
  ${backgroundColorStyles}
  ${buttonColorStyles}
  ${textColorStyles}
`;
