import { css } from '@emotion/react';
import {
  buttonStyles,
  coreColorStyles,
  headingStyles,
  paragraphStyles,
  sectionTitleStyles,
  spacingStyles,
} from './globalStyles';
import { defaultTheme } from './theme';

export const coreStyles = css`
  a {
    color: ${defaultTheme.colors.gray900};
    text-decoration: none;
    transition: all 400ms ease-in-out;

    &:hover {
      color: ${defaultTheme.colors.gray700};
      text-decoration: none;
    }

    &:focus {
      outline: none;
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const globalStyles = css`
  html,
  body {
    color: ${defaultTheme.colors.black300};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  ${coreStyles}
  ${spacingStyles}
  ${headingStyles}
  ${paragraphStyles}
  ${sectionTitleStyles}
  ${buttonStyles}
  ${coreColorStyles}
`;
