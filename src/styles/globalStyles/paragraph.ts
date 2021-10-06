import { css } from '@emotion/react';
import { breakPoints } from '../theme';

export const paragraphStyles = css`
  p {
    font-size: 1.0625rem;
    margin: 0;
  } /* 17px */
  p.p-sm {
    font-size: 1rem;
  } /* 16px */
  p.p-md {
    font-size: 1.125rem;
  } /* 18px */
  p.p-lg {
    font-size: 1.1875rem;
  } /* 19px */
  p.p-xl {
    font-size: 1.25rem;
  } /* 20px */

  @media ${breakPoints.xlDown} {
    p.p-sm {
      font-size: 0.95rem;
    }
    p {
      font-size: 1rem;
    }
    p.p-md {
      font-size: 1.025rem;
    }
    p.p-lg {
      font-size: 1.08rem;
    }
    p.p-xl {
      font-size: 1.14rem;
    }
  }

  @media ${breakPoints.lgDown} {
    p.p-sm {
      font-size: 0.95rem;
    }
    p {
      font-size: 1rem;
    }
    p.p-md {
      font-size: 1.025rem;
    }
    p.p-lg {
      font-size: 1.08rem;
    }
    p.p-xl {
      font-size: 1.14rem;
    }
  }

  @media ${breakPoints.smDown} {
    p.p-sm {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
    p.p-md {
      font-size: 1.05rem;
    }
    p.p-lg {
      font-size: 1.05rem;
    }
    p.p-xl {
      font-size: 1.1rem;
    }
  }
`;
