import { css } from '@emotion/react';
import { defaultTheme } from '../theme';

export const buttonStyles = css`
  .btn {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
    padding: 13px 26px;
    transition: all 400ms ease-in-out;

    &.btn-sm {
      font-size: 14px;
      padding: 12px 24px;
    }

    &.btn-md {
      font-size: 18px;
      padding: 14px 34px;
    }

    &.btn-lg {
      font-size: 20px;
      padding: 14px 42px;
    }

    &:focus {
      box-shadow: none;
      color: ${defaultTheme.colors.white};
    }
  }

  .btn-tra-white {
    background-color: transparent;
    border-color: ${defaultTheme.colors.white};
    color: ${defaultTheme.colors.white};
  }
`;
