import styled from '@emotion/styled';
import { breakPoints } from '@/styles';

export const FooterWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 100px;

  h6 {
    line-height: 1;
    margin-bottom: 25px;
  }

  .footer-contacts {
    padding-left: 5px;

    p {
      margin-bottom: 3px;
    }
  }

  .footer-hightlight a {
    font-weight: 500;
    text-decoration: underline;
  }

  @media ${breakPoints.lgDown} {
    padding-bottom: 30px;
    padding-top: 80px;

    .footer-contacts {
      padding-left: 0;
    }
  }
`;

export const FooterLinkContainer = styled.div`
  li {
    clear: none !important;
    display: block !important;
    margin: 0;
    padding: 0;
    width: auto !important;
    p {
      margin-bottom: 10px;
    }
  }
`;

export const FooterImageContainer = styled.div`
  .insta-img {
    border-radius: 4px;
    float: left;
    height: 75px;
    margin: 4px;
    width: 75px;
  }

  @media ${breakPoints.xlDown} {
    .insta-img {
      height: 64px;
      margin: 3px;
      width: 64px;
    }
  }

  @media ${breakPoints.lgDown} {
    .insta-img {
      height: 100px;
      margin: 5px;
      width: 100px;
    }
  }

  @media ${breakPoints.smDown} {
    .insta-img {
      height: 115px;
      margin: 5px;
      width: 115px;
    }
  }

  @media ${breakPoints.xsDown} {
    .insta-img {
      height: 88px;
      margin: 4px;
      width: 88px;
    }
  }
`;

export const BottomFooter = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 30px;
  padding-top: 30px;

  .footer-copyright p {
    line-height: 1;
    margin-bottom: 0;
  }
`;
