import styled from '@emotion/styled';
import { breakPoints, defaultTheme } from '@/styles';

export const FooterContainer = styled.div`
  background-color: ${defaultTheme.colors.gray100};
  color: ${defaultTheme.colors.gray500};
  padding-bottom: 30px;
  padding-top: 100px;

  h6 {
    color: ${defaultTheme.colors.gray600};
    font-size: 1.1875rem;
    margin-bottom: 25px;
  }

  .phone-number a {
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const ContentsContainer = styled.div`
  padding-left: 5px;

  p {
    margin-bottom: 3px;
  }
`;

export const LinksContainer = styled.div`
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

export const InstagramContainer = styled.div`
  .insta-img {
    border-radius: 4px;
    float: left;
    height: 75px;
    margin: 4px;
    width: 75px;
  }

  @media ${breakPoints.mdDown} {
    .insta-img {
      height: 100px;
      margin: 4px;
      width: 100px;
    }
  }

  @media ${breakPoints.smDown} {
    .insta-img {
      height: 88px;
      margin: 4px;
      width: 88px;
    }
  }
`;

export const BottomContainer = styled.div`
  border-top: 1px solid ${defaultTheme.colors.gray300};
  margin-top: 28px;
  padding-top: 28px;
`;

export const TextCopyright = styled.p`
  line-height: 1;
`;

export const SocialContainer = styled.ul`
  li {
    display: inline-block !important;
    margin-bottom: 0;
    i {
      font-size: 0.875rem;
      line-height: 1;
      position: relative;
      right: 2px;
      top: -1px;
      -webkit-transition: all 400ms ease-in-out;
      -moz-transition: all 400ms ease-in-out;
      -o-transition: all 400ms ease-in-out;
      -ms-transition: all 400ms ease-in-out;
      transition: all 400ms ease-in-out;
    }
    p {
      font-weight: 300;
      line-height: 1;
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
  p {
    &::after {
      content: '|';
      padding-left: 11px;
      position: relative;
      top: -1px;
    }
  }
  p.last-li {
    &::after {
      content: ' ';
      padding-left: 0;
    }
  }
`;
