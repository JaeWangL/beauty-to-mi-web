import { css } from '@emotion/react';
import { breakPoints } from '../theme';

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.3;
  }

  /* Header H6 */
  h6.h6-xs {
    font-size: 1.0625rem;
  } /* 17px */
  h6.h6-sm {
    font-size: 1.125rem;
  } /* 18px */
  h6.h6-md {
    font-size: 1.15625rem;
  } /* 18.5px */
  h6.h6-lg {
    font-size: 1.1875rem;
  } /* 19px */
  h6.h6-xl {
    font-size: 1.21875rem;
  } /* 19.5px */

  /* Header H5 */
  h5.h5-xs {
    font-size: 1.25rem;
  } /* 20px */
  h5.h5-sm {
    font-size: 1.375rem;
  } /* 22px */
  h5.h5-md {
    font-size: 1.5rem;
  } /* 24px */
  h5.h5-lg {
    font-size: 1.625rem;
  } /* 26px */
  h5.h5-xl {
    font-size: 1.75rem;
  } /* 28px */

  /* Header H4 */
  h4.h4-xs {
    font-size: 1.875rem;
  } /* 30px */
  h4.h4-sm {
    font-size: 2rem;
  } /* 32px */
  h4.h4-md {
    font-size: 2.125rem;
  } /* 34px */
  h4.h4-lg {
    font-size: 2.25rem;
  } /* 36px */
  h4.h4-xl {
    font-size: 2.375rem;
  } /* 38px */

  h3.h3-xs {
    font-size: 2.5rem;
  } /* 40px */
  h3.h3-sm {
    font-size: 2.625rem;
  } /* 42px */
  h3.h3-md {
    font-size: 2.75rem;
  } /* 44px */
  h3.h3-lg {
    font-size: 2.875rem;
  } /* 46px */
  h3.h3-xl {
    font-size: 3rem;
  } /* 48px */

  /* Header H2 */
  h2.h2-xs {
    font-size: 3.125rem;
  } /* 50px */
  h2.h2-sm {
    font-size: 3.25rem;
  } /* 52px */
  h2.h2-md {
    font-size: 3.375rem;
  } /* 54px */
  h2.h2-lg {
    font-size: 3.5rem;
  } /* 56px */
  h2.h2-xl {
    font-size: 3.75rem;
  } /* 60px */

  @media ${breakPoints.xlDown} {
    /* Header H6 */
    h6.h6-xs {
      font-size: 0.95rem;
    }
    h6.h6-sm {
      font-size: 1rem;
    }
    h6.h6-md {
      font-size: 1.028rem;
    }
    h6.h6-lg {
      font-size: 1.056rem;
    }
    h6.h6-xl {
      font-size: 1.083rem;
    }

    /* Header H5 */
    h5.h5-xs {
      font-size: 1.11rem;
    }
    h5.h5-sm {
      font-size: 1.22rem;
    }
    h5.h5-md {
      font-size: 1.33rem;
    }
    h5.h5-lg {
      font-size: 1.44rem;
    }
    h5.h5-xl {
      font-size: 1.56rem;
    }

    /* Header H4 */
    h4.h4-xs {
      font-size: 1.67rem;
    }
    h4.h4-sm {
      font-size: 1.78rem;
    }
    h4.h4-md {
      font-size: 1.89rem;
    }
    h4.h4-lg {
      font-size: 2rem;
    }
    h4.h4-xl {
      font-size: 2.11rem;
    }

    h3.h3-xs {
      font-size: 2.2rem;
    }
    h3.h3-sm {
      font-size: 2.33rem;
    }
    h3.h3-md {
      font-size: 2.44rem;
    }
    h3.h3-lg {
      font-size: 2.56rem;
    }
    h3.h3-xl {
      font-size: 2.67rem;
    }

    /* Header H2 */
    h2.h2-xs {
      font-size: 2.78rem;
    }
    h2.h2-sm {
      font-size: 2.89rem;
    }
    h2.h2-md {
      font-size: 3rem;
    }
    h2.h2-lg {
      font-size: 3.11rem;
    }
    h2.h2-xl {
      font-size: 3.35rem;
    }
  }

  @media ${breakPoints.lgDown} {
    h6.h6-xs {
      font-size: 1rem;
    }
    h6.h6-sm {
      font-size: 1.05rem;
    }
    h6.h6-md {
      font-size: 1.1rem;
    }
    h6.h6-lg {
      font-size: 1.15rem;
    }
    h6.h6-xl {
      font-size: 1.2rem;
    }

    /* Header H5 */
    h5.h5-xs {
      font-size: 1.2rem;
    }
    h5.h5-sm {
      font-size: 1.3rem;
    }
    h5.h5-md {
      font-size: 1.35rem;
    }
    h5.h5-lg {
      font-size: 1.4rem;
    }
    h5.h5-xl {
      font-size: 1.5rem;
    }

    /* Header H4 */
    h4.h4-xs {
      font-size: 1.6rem;
    }
    h4.h4-sm {
      font-size: 1.7rem;
    }
    h4.h4-md {
      font-size: 1.6rem;
    }
    h4.h4-lg {
      font-size: 1.7rem;
    }
    h4.h4-xl {
      font-size: 1.8rem;
    }

    h3.h3-xs {
      font-size: 1.9rem;
    }
    h3.h3-sm {
      font-size: 2rem;
    }
    h3.h3-md {
      font-size: 2.1rem;
    }
    h3.h3-lg {
      font-size: 2.2rem;
    }
    h3.h3-xl {
      font-size: 2.3rem;
    }

    /* Header H2 */
    h2.h2-xs {
      font-size: 2.4rem;
    }
    h2.h2-sm {
      font-size: 2.5rem;
    }
    h2.h2-md {
      font-size: 2.6rem;
    }
    h2.h2-lg {
      font-size: 2.7rem;
    }
    h2.h2-xl {
      font-size: 2.8rem;
    }
  }

  @media ${breakPoints.smDown} {
    /* Header H6 */
    h6.h6-xs {
      font-size: 1rem;
    }
    h6.h6-sm {
      font-size: 1.1rem;
    }
    h6.h6-md {
      font-size: 1.1rem;
    }
    h6.h6-lg {
      font-size: 1.15rem;
    }
    h6.h6-xl {
      font-size: 1.2rem;
    }

    /* Header H5 */
    h5.h5-xs {
      font-size: 1.2rem;
    }
    h5.h5-sm {
      font-size: 1.25rem;
    }
    h5.h5-md {
      font-size: 1.25rem;
    }
    h5.h5-lg {
      font-size: 1.3rem;
    }
    h5.h5-xl {
      font-size: 1.3rem;
    }

    /* Header H4 */
    h4.h4-xs {
      font-size: 1.4rem;
    }
    h4.h4-sm {
      font-size: 1.4rem;
    }
    h4.h4-md {
      font-size: 1.45rem;
    }
    h4.h4-lg {
      font-size: 1.45rem;
    }
    h4.h4-xl {
      font-size: 1.5rem;
    }

    h3.h3-xs {
      font-size: 1.5rem;
    }
    h3.h3-sm {
      font-size: 1.55rem;
    }
    h3.h3-md {
      font-size: 1.6rem;
    }
    h3.h3-lg {
      font-size: 1.65rem;
    }
    h3.h3-xl {
      font-size: 1.7rem;
    }

    /* Header H2 */
    h2.h2-xs {
      font-size: 1.7rem;
    }
    h2.h2-sm {
      font-size: 1.8rem;
    }
    h2.h2-md {
      font-size: 1.9rem;
    }
    h2.h2-lg {
      font-size: 2rem;
    }
    h2.h2-xl {
      font-size: 2.1rem;
    }
  }
`;
