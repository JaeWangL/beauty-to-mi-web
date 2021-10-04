import { css } from '@emotion/react';
import { breakPoints, breakPointsMultiple, defaultTheme } from './theme';

export const spacingStyles = css`
  /*  SPACING & INDENTS
  /*------------------------------------------ */

  .wide-100 {
    padding-bottom: 100px;
    padding-top: 100px;
  }
  .wide-90 {
    padding-bottom: 90px;
    padding-top: 100px;
  }
  .wide-80 {
    padding-bottom: 80px;
    padding-top: 100px;
  }
  .wide-70 {
    padding-bottom: 70px;
    padding-top: 100px;
  }
  .wide-60 {
    padding-bottom: 60px;
    padding-top: 100px;
  }
  .wide-50 {
    padding-bottom: 50px;
    padding-top: 100px;
  }
  .wide-40 {
    padding-bottom: 40px;
    padding-top: 100px;
  }
  .wide-30 {
    padding-bottom: 30px;
    padding-top: 100px;
  }
  .wide-20 {
    padding-bottom: 20px;
    padding-top: 100px;
  }

  /* ------------------------------------------ */

  /*  Margin Top
/*------------------------------------------ */

  .mt-100 {
    margin-top: 100px;
  }
  .mt-95 {
    margin-top: 95px;
  }
  .mt-90 {
    margin-top: 90px;
  }
  .mt-85 {
    margin-top: 85px;
  }
  .mt-80 {
    margin-top: 80px;
  }
  .mt-75 {
    margin-top: 75px;
  }
  .mt-70 {
    margin-top: 70px;
  }
  .mt-65 {
    margin-top: 65px;
  }
  .mt-60 {
    margin-top: 60px;
  }
  .mt-55 {
    margin-top: 55px;
  }
  .mt-50 {
    margin-top: 50px;
  }
  .mt-45 {
    margin-top: 45px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .mt-35 {
    margin-top: 35px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mt-25 {
    margin-top: 25px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-5 {
    margin-top: 5px !important;
  }
  .mt-0 {
    margin-top: 0;
  }

  /* ------------------------------------------ */

  /*  Margin Bottom
/*------------------------------------------ */

  .mb-100 {
    margin-bottom: 100px;
  }
  .mb-95 {
    margin-bottom: 95px;
  }
  .mb-90 {
    margin-bottom: 90px;
  }
  .mb-85 {
    margin-bottom: 85px;
  }
  .mb-80 {
    margin-bottom: 80px;
  }
  .mb-75 {
    margin-bottom: 75px;
  }
  .mb-70 {
    margin-bottom: 70px;
  }
  .mb-65 {
    margin-bottom: 65px;
  }
  .mb-60 {
    margin-bottom: 60px;
  }
  .mb-55 {
    margin-bottom: 55px;
  }
  .mb-50 {
    margin-bottom: 50px;
  }
  .mb-45 {
    margin-bottom: 45px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-35 {
    margin-bottom: 35px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-25 {
    margin-bottom: 25px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-15 {
    margin-bottom: 15px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .mb-5 {
    margin-bottom: 5px !important;
  }
  .mb-0 {
    margin-bottom: 0;
  }

  /* ------------------------------------------ */

  /*  Margin Left
/*------------------------------------------ */

  .ml-100 {
    margin-left: 100px;
  }
  .ml-95 {
    margin-left: 95px;
  }
  .ml-90 {
    margin-left: 90px;
  }
  .ml-85 {
    margin-left: 85px;
  }
  .ml-80 {
    margin-left: 80px;
  }
  .ml-75 {
    margin-left: 75px;
  }
  .ml-70 {
    margin-left: 70px;
  }
  .ml-60 {
    margin-left: 60px;
  }
  .ml-55 {
    margin-left: 55px;
  }
  .ml-50 {
    margin-left: 50px;
  }
  .ml-45 {
    margin-left: 45px;
  }
  .ml-40 {
    margin-left: 40px;
  }
  .ml-35 {
    margin-left: 35px;
  }
  .ml-30 {
    margin-left: 30px;
  }
  .ml-25 {
    margin-left: 25px;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .ml-15 {
    margin-left: 15px;
  }
  .ml-10 {
    margin-left: 10px;
  }
  .ml-5 {
    margin-left: 5px !important;
  }

  /* ------------------------------------------ */

  /*  Margin Right
/*------------------------------------------ */

  .mr-100 {
    margin-right: 100px;
  }
  .mr-95 {
    margin-right: 95px;
  }
  .mr-90 {
    margin-right: 90px;
  }
  .mr-85 {
    margin-right: 85px;
  }
  .mr-80 {
    margin-right: 80px;
  }
  .mr-75 {
    margin-right: 75px;
  }
  .mr-70 {
    margin-right: 70px;
  }
  .mr-65 {
    margin-right: 65px;
  }
  .mr-60 {
    margin-right: 60px;
  }
  .mr-55 {
    margin-right: 55px;
  }
  .mr-50 {
    margin-right: 50px;
  }
  .mr-45 {
    margin-right: 45px;
  }
  .mr-40 {
    margin-right: 40px;
  }
  .mr-35 {
    margin-right: 35px;
  }
  .mr-30 {
    margin-right: 30px;
  }
  .mr-25 {
    margin-right: 25px;
  }
  .mr-20 {
    margin-right: 20px;
  }
  .mr-15 {
    margin-right: 15px;
  }
  .mr-10 {
    margin-right: 10px;
  }
  .mr-5 {
    margin-right: 5px !important;
  }

  /* ------------------------------------------ */

  /*  Padding Top
/*------------------------------------------ */

  .pt-100 {
    padding-top: 100px;
  }
  .pt-95 {
    padding-top: 95px;
  }
  .pt-90 {
    padding-top: 90px;
  }
  .pt-85 {
    padding-top: 85px;
  }
  .pt-80 {
    padding-top: 80px;
  }
  .pt-75 {
    padding-top: 75px;
  }
  .pt-70 {
    padding-top: 70px;
  }
  .pt-65 {
    padding-top: 65px;
  }
  .pt-60 {
    padding-top: 60px;
  }
  .pt-55 {
    padding-top: 55px;
  }
  .pt-50 {
    padding-top: 50px;
  }
  .pt-45 {
    padding-top: 45px;
  }
  .pt-40 {
    padding-top: 40px;
  }
  .pt-35 {
    padding-top: 35px;
  }
  .pt-30 {
    padding-top: 30px;
  }
  .pt-25 {
    padding-top: 25px;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .pt-15 {
    padding-top: 15px;
  }
  .pt-10 {
    padding-top: 10px;
  }
  .pt-5 {
    padding-top: 5px !important;
  }

  /* ------------------------------------------ */

  /*  Padding Bottom
/*------------------------------------------ */

  .pb-100 {
    padding-bottom: 100px;
  }
  .pb-95 {
    padding-bottom: 95px;
  }
  .pb-90 {
    padding-bottom: 90px;
  }
  .pb-85 {
    padding-bottom: 85px;
  }
  .pb-80 {
    padding-bottom: 80px;
  }
  .pb-75 {
    padding-bottom: 75px;
  }
  .pb-70 {
    padding-bottom: 70px;
  }
  .pb-65 {
    padding-bottom: 65px;
  }
  .pb-60 {
    padding-bottom: 60px;
  }
  .pb-55 {
    padding-bottom: 55px;
  }
  .pb-50 {
    padding-bottom: 50px;
  }
  .pb-45 {
    padding-bottom: 45px;
  }
  .pb-40 {
    padding-bottom: 40px;
  }
  .pb-35 {
    padding-bottom: 35px;
  }
  .pb-30 {
    padding-bottom: 30px;
  }
  .pb-25 {
    padding-bottom: 25px;
  }
  .pb-20 {
    padding-bottom: 20px;
  }
  .pb-15 {
    padding-bottom: 15px;
  }
  .pb-10 {
    padding-bottom: 10px;
  }
  .pb-5 {
    padding-bottom: 5px !important;
  }

  /* ------------------------------------------ */

  /*  Padding Left
/*------------------------------------------ */

  .pl-100 {
    padding-left: 100px;
  }
  .pl-95 {
    padding-left: 95px;
  }
  .pl-90 {
    padding-left: 90px;
  }
  .pl-85 {
    padding-left: 85px;
  }
  .pl-80 {
    padding-left: 80px;
  }
  .pl-75 {
    padding-left: 75px;
  }
  .pl-70 {
    padding-left: 70px;
  }
  .pl-65 {
    padding-left: 65px;
  }
  .pl-60 {
    padding-left: 60px;
  }
  .pl-55 {
    padding-left: 55px;
  }
  .pl-50 {
    padding-left: 50px;
  }
  .pl-45 {
    padding-left: 45px;
  }
  .pl-40 {
    padding-left: 40px;
  }
  .pl-35 {
    padding-left: 35px;
  }
  .pl-30 {
    padding-left: 30px;
  }
  .pl-25 {
    padding-left: 25px;
  }
  .pl-20 {
    padding-left: 20px;
  }
  .pl-15 {
    padding-left: 15px;
  }
  .pl-10 {
    padding-left: 10px;
  }
  .pl-5 {
    padding-left: 5px !important;
  }

  /* ------------------------------------------ */

  /*  Padding Right
/*------------------------------------------ */

  .pr-100 {
    padding-right: 100px;
  }
  .pr-95 {
    padding-right: 95px;
  }
  .pr-90 {
    padding-right: 90px;
  }
  .pr-85 {
    padding-right: 85px;
  }
  .pr-80 {
    padding-right: 80px;
  }
  .pr-75 {
    padding-right: 75px;
  }
  .pr-70 {
    padding-right: 70px;
  }
  .pr-65 {
    padding-right: 65px;
  }
  .pr-60 {
    padding-right: 60px;
  }
  .pr-55 {
    padding-right: 55px;
  }
  .pr-50 {
    padding-right: 50px;
  }
  .pr-45 {
    padding-right: 45px;
  }
  .pr-40 {
    padding-right: 40px;
  }
  .pr-35 {
    padding-right: 35px;
  }
  .pr-30 {
    padding-right: 30px;
  }
  .pr-25 {
    padding-right: 25px;
  }
  .pr-20 {
    padding-right: 20px;
  }
  .pr-15 {
    padding-right: 15px;
  }
  .pr-10 {
    padding-right: 10px;
  }
  .pr-5 {
    padding-right: 5px !important;
  }

  /* ------------------------------------------ */

  /*  Padding Centered
/*------------------------------------------ */

  .pc-70 {
    padding-left: 70px;
    padding-right: 70px;
  }
  .pc-65 {
    padding-left: 65px;
    padding-right: 65px;
  }
  .pc-60 {
    padding-left: 60px;
    padding-right: 60px;
  }
  .pc-55 {
    padding-left: 55px;
    padding-right: 55px;
  }
  .pc-50 {
    padding-left: 50px;
    padding-right: 50px;
  }
  .pc-45 {
    padding-left: 45px;
    padding-right: 45px;
  }
  .pc-40 {
    padding-left: 40px;
    padding-right: 40px;
  }
  .pc-35 {
    padding-left: 35px;
    padding-right: 35px;
  }
  .pc-30 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .pc-25 {
    padding-left: 25px;
    padding-right: 25px;
  }
  .pc-20 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .pc-15 {
    padding-left: 15px;
    padding-right: 15px;
  }
  .pc-10 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .pc-09 {
    padding-left: 9%;
    padding-right: 9%;
  }
  .pc-08 {
    padding-left: 8%;
    padding-right: 8%;
  }
  .pc-07 {
    padding-left: 7%;
    padding-right: 7%;
  }
  .pc-06 {
    padding-left: 6%;
    padding-right: 6%;
  }
  .pc-05 {
    padding-left: 5%;
    padding-right: 5%;
  }
  .pc-04 {
    padding-left: 4%;
    padding-right: 4%;
  }

  @media ${breakPointsMultiple.lgUpxlDown} {
    .pl-5,
    .pl-10,
    .pl-15,
    .pl-20,
    .pl-25,
    .pl-30,
    .pl-35,
    .pl-40,
    .pl-45 {
      padding-left: 0;
    }
    .pr-5,
    .pr-10,
    .pr-15,
    .pr-20,
    .pr-25,
    .pr-30,
    .pr-35,
    .pr-40,
    .pr-45 {
      padding-right: 0;
    }
    .pc-10,
    .pc-15,
    .pc-20,
    .pc-25,
    .pc-30,
    .pc-35,
    .pc-40,
    .pc-45,
    .pc-50,
    .pc-55,
    .pc-60 {
      padding-left: 0;
      padding-right: 0;
    }
    .pc-04,
    .pc-05,
    .pc-06,
    .pc-07,
    .pc-08,
    .pc-09 {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media ${breakPointsMultiple.mdUplgDown} {
    .wide-100 {
      padding-bottom: 80px;
      padding-top: 80px;
    }
    .wide-90 {
      padding-bottom: 70px;
      padding-top: 80px;
    }
    .wide-80 {
      padding-bottom: 60px;
      padding-top: 80px;
    }
    .wide-70 {
      padding-bottom: 50px;
      padding-top: 80px;
    }
    .wide-60 {
      padding-bottom: 40px;
      padding-top: 80px;
    }
    .wide-50 {
      padding-bottom: 30px;
      padding-top: 80px;
    }
    .wide-40 {
      padding-bottom: 20px;
      padding-top: 80px;
    }
    .wide-30 {
      padding-bottom: 10px;
      padding-top: 80px;
    }
    .wide-20 {
      padding-bottom: 0;
      padding-top: 80px;
    }

    .pt-100 {
      padding-top: 80px;
    }
    .pb-100 {
      padding-bottom: 80px;
    }
    .pt-80 {
      padding-top: 60px;
    }
    .pb-80 {
      padding-bottom: 60px;
    }
    .pt-60 {
      padding-top: 40px;
    }
    .pb-60 {
      padding-bottom: 40px;
    }
    .pb-50 {
      padding-bottom: 30px;
    }

    .pl-5,
    .pl-10,
    .pl-15,
    .pl-20,
    .pl-25,
    .pl-30,
    .pl-35,
    .pl-40,
    .pl-45 {
      padding-left: 0;
    }
    .pr-5,
    .pr-10,
    .pr-15,
    .pr-20,
    .pr-25,
    .pr-30,
    .pr-35,
    .pr-40,
    .pr-45 {
      padding-right: 0;
    }
    .pc-10,
    .pc-15,
    .pc-20,
    .pc-25,
    .pc-30,
    .pc-35,
    .pc-40,
    .pc-45,
    .pc-50,
    .pc-55,
    .pc-60 {
      padding-left: 0;
      padding-right: 0;
    }
    .pc-04,
    .pc-05,
    .pc-06,
    .pc-07,
    .pc-08,
    .pc-09 {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media ${breakPoints.mdDown} {
    .wide-100 {
      padding-bottom: 80px;
      padding-top: 80px;
    }
    .wide-90 {
      padding-bottom: 70px;
      padding-top: 80px;
    }
    .wide-80 {
      padding-bottom: 60px;
      padding-top: 80px;
    }
    .wide-70 {
      padding-bottom: 50px;
      padding-top: 80px;
    }
    .wide-60 {
      padding-bottom: 40px;
      padding-top: 80px;
    }
    .wide-50 {
      padding-bottom: 30px;
      padding-top: 80px;
    }
    .wide-40 {
      padding-bottom: 20px;
      padding-top: 80px;
    }
    .wide-30 {
      padding-bottom: 10px;
      padding-top: 80px;
    }
    .wide-20 {
      padding-bottom: 0;
      padding-top: 80px;
    }

    .pt-100 {
      padding-top: 80px;
    }
    .pb-100 {
      padding-bottom: 80px;
    }
    .pt-80 {
      padding-top: 60px;
    }
    .pb-80 {
      padding-bottom: 60px;
    }
    .pt-60 {
      padding-top: 40px;
    }
    .pb-60 {
      padding-bottom: 40px;
    }
    .pb-50 {
      padding-bottom: 30px;
    }

    .pl-5,
    .pl-10,
    .pl-15,
    .pl-20,
    .pl-25,
    .pl-30,
    .pl-35,
    .pl-40,
    .pl-45 {
      padding-left: 0;
    }
    .pr-5,
    .pr-10,
    .pr-15,
    .pr-20,
    .pr-25,
    .pr-30,
    .pr-35,
    .pr-40,
    .pr-45 {
      padding-right: 0;
    }
    .pc-10,
    .pc-15,
    .pc-20,
    .pc-25,
    .pc-30,
    .pc-35,
    .pc-40,
    .pc-45,
    .pc-50,
    .pc-55,
    .pc-60 {
      padding-left: 0;
      padding-right: 0;
    }
    .pc-04,
    .pc-05,
    .pc-06,
    .pc-07,
    .pc-08,
    .pc-09 {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const headerStyles = css`
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

  @media ${breakPointsMultiple.lgUpxlDown} {
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

  @media ${breakPointsMultiple.mdUplgDown} {
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

  @media ${breakPointsMultiple.lgUpxlDown} {
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

  @media ${breakPointsMultiple.mdUplgDown} {
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

export const textColorStyles = css`
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

export const globalStyles = css`
  html,
  body {
    color: ${defaultTheme.colors.black300};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  ${spacingStyles}
  ${paragraphStyles}
  ${headerStyles}
  ${textColorStyles}
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .bg-fixed {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }

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

  .image-description {
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 20;
  }

  .item-overlay {
    background: rgba(239, 166, 151, 0.8);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 400ms ease-in-out;
    width: 100%;

    &::before,
    &::after {
      bottom: 30px;
      content: '';
      left: 30px;
      opacity: 0;
      position: absolute;
      right: 30px;
      top: 30px;
      transition: all 450ms ease-in-out;
    }
  }

  .page-hero-section {
    background: no-repeat center center;
    background-size: cover;
  }

  @media ${breakPoints.mdDown} {
    .section-title p {
      font-size: 1.0625rem;
      margin-top: 10px;
      padding: 0 6%;
    }
  }

  @media ${breakPoints.smDown} {
    .section-title p {
      font-size: 1.05rem;
      margin-top: 10px;
      padding: 0;
    }
  }
`;
