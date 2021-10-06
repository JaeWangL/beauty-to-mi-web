import styled from '@emotion/styled';
import { breakPoints, defaultTheme, zIndices } from '@/styles';

export const HeaderWrapper = styled.div`
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

export const MobileHeaderContainer = styled.div`
  background-color: ${defaultTheme.colors.white};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  display: block;
  height: 54px;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.25s ease-in-out;
  width: 100%;
  z-index: ${zIndices.headerMobile};

  .smllogo {
    display: inline-block;
    margin-top: 12px;
    padding-left: 18px;
  }

  &.active {
    margin-right: 350px;
    transition: all 0.25s ease-in-out;
  }

  @media ${breakPoints.lgDown} {
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
    height: 80px;
  }

  @media ${breakPoints.mdDown} {
    .smllogo {
      display: block;
      margin-top: 15px;
    }

    &.active {
      margin-right: 300px;
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
  transition: all 0.4s ease-in-out;
  z-index: ${zIndices.headerMobileMenu};

  span {
    background: ${defaultTheme.colors.gray400};
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
      width: 22px;
    }

    &::before {
      top: -7px;
      transition: all 500ms ease-in-out;
      width: 26px;
    }

    &::after {
      bottom: -7px;
      transition: all 500ms ease-in-out;
      width: 20px;
    }
  }

  &.active {
    span {
      background-color: transparent;
      &::after {
        transform: rotate(-45deg);
        width: 23px;
      }
      &::before {
        bottom: 0;
        top: 7px;
        transform: rotate(45deg);
      }
    }
  }

  @media ${breakPoints.lgDown} {
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

    &.active {
      span {
        background-color: transparent;
        &::after {
          top: 0;
          width: 28px;
        }
        &::before {
          top: 0;
          width: 28px;
        }
      }
    }
  }

  @media ${breakPoints.mdDown} {
    margin: 24px 18px 0 0;
    padding: 14px 28px 14px 0;
  }
`;

export const DesktopHeaderContainer = styled.div`
  background-color: ${defaultTheme.colors.white} !important;
  box-shadow: 0 2px 3px rgba(96, 96, 96, 0.085);
  height: auto;
  padding: 6px 0;
  transition: all 450ms ease-in-out;
  width: 100%;
  z-index: ${zIndices.headerDesktop};
`;

export const DesktopHeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;
  position: relative;
`;

export const LogoContainer = styled.div`
  float: left;
  line-height: 70px;
  margin: 0;
  padding: 0;

  a {
    display: block;
  }
  img {
    vertical-align: middle;
  }
`;

export const MenuNavContainer = styled.nav`
  display: block;
  float: right;
  padding: 0;
`;

export const MenuNav = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 0;
  text-align: left;
  width: 100%;

  li {
    display: block;
    float: left;
    margin: 0;
    padding: 0;
    text-align: center;

    a {
      color: #444;
      display: block;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 50px;
      padding: 10px 32px 10px 18px;
      position: relative;
      text-decoration: none;
      &.last-link {
        padding: 10px 0;
      }
      &.callusbtn {
        font-size: 15px;
        i {
          font-size: 13px;
          margin-right: 1px;
          margin-top: 1px;
        }
      }
      &.btn {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1;
        margin-left: 10px;
        margin-top: 12px;
        padding: 15px 20px;
        text-transform: uppercase;
      }

      i {
        display: inline-block;
        font-size: 16px;
        line-height: inherit;
        margin-right: 12px;
        vertical-align: top;
      }
    }

    &:hover {
      a {
        color: #171819;
      }
    }
  }

  @media ${breakPoints.xlDown} {
    li {
      a {
        font-size: 14px;
        margin: 0 3px;
        padding: 10px 12px;
      }
    }
  }

  @media ${breakPoints.lgDown} {
    li {
      a {
        font-size: 19px;
        margin: 0;
        padding: 7px 32px 6px 20px;
      }
    }
  }

  @media ${breakPoints.mdDown} {
    margin-right: -300px;
    width: 300px;
  }
`;
