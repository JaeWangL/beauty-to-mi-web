import styled from '@emotion/styled';
import { breakPoints, breakPointsMultiple, defaultTheme, zIndices } from '@/styles';

export const HeaderWrapper = styled.header`
  display: block;
  padding-top: 0;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${zIndices.header};
`;

export const MobileMenuContainer = styled.div`
  background-color: ${defaultTheme.colors.white};
  box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
  display: block;
  height: 80px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${zIndices.headerMobile};

  .logo-small {
    display: inline-block;
    margin-top: 12px;
    padding-left: 18px;
  }

  @media ${breakPointsMultiple.mdUplgDown} {
    .logo-small {
      display: block;
      margin-top: 15px;
      padding-left: 28px;
    }
  }

  @media ${breakPoints.mdDown} {
    .logo-small {
      display: block;
      margin-top: 15px;
    }
  }
`;

export const MobileMenu = styled.a`
  cursor: pointer;
  margin: 7px 0 0 15px;
  padding: 16px 35px 16px 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${zIndices.headerMobileMenu};

  span {
    background: #a9a9a9;
    content: '';
    cursor: pointer;
    display: block;
    height: 3px;
    position: absolute;
    transition: all 500ms ease-in-out;
    width: 22px;

    &::before,
    &::after {
      background: ${defaultTheme.colors.gray400};
      content: '';
      cursor: pointer;
      display: block;
      height: 3px;
      position: absolute;
      transition: all 500ms ease-in-out;
      width: 22px;
    }

    &::before {
      top: -7px;
      width: 26px;
    }

    &::after {
      bottom: -7px;
      width: 20px;
    }
  }

  @media ${breakPointsMultiple.mdUplgDown} {
    margin: 24px 28px 0 0;
    padding: 14px 28px 14px 0;

    span {
      &::before {
        top: -8px;
        width: 26px;
      }
      &::after {
        bottom: -8px;
        width: 20px;
      }
    }
  }

  @media ${breakPoints.mdDown} {
    margin: 24px 18px 0 0;
    padding: 14px 28px 14px 0;

    span {
      &::before {
        top: -8px;
        width: 26px;
      }
      &::after {
        bottom: -8px;
        width: 20px;
      }
    }
  }
`;

export const MenuContainer = styled.div`
  background-color: ${defaultTheme.colors.white} !important;
  box-shadow: 0 2px 3px rgba(96, 96, 96, 0.085);
  height: auto;
  padding: 6px 0;
  transition: all 450ms ease-in-out;
  width: 100%;
  z-index: ${zIndices.headerMenu};
`;

export const MenuInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;
  position: relative;

  .logo-desktop {
    float: left;
    line-height: 70px;
    margin: 0;
    padding: 0;

    img {
      vertical-align: middle;
    }

    @media only ${breakPoints.lgDown} {
      display: none;
    }
  }
`;

export const MenuListContainer = styled.nav`
  display: block;
  float: right;
  padding: 0;

  ul {
    display: block;
    margin: 0 auto;
    padding: 0;
    text-align: left;
    width: 100%;

    > li {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      text-align: center;

      > a {
        color: ${defaultTheme.colors.navy300};
        display: block;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 50px;
        margin: 0 6px;
        padding: 10px 12px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }

  .btn-reservation {
    background-color: ${defaultTheme.colors.primary};
    border: 1px solid transparent;
    border-color: ${defaultTheme.colors.primary} !important;
    border-radius: 2px;
    color: ${defaultTheme.colors.white} !important;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1;
    margin-left: 10px;
    margin-top: 12px;
    padding: 15px 20px;
    text-transform: uppercase;
    transition: all 400ms ease-in-out;
  }
`;
