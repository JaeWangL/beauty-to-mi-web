import { css } from '@emotion/react';

export const globalStyles = css`
  html,
  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
