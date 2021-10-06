import styled from '@emotion/styled';
import { breakPoints, defaultTheme } from '@/styles';

type HeroWrapperProps = {
  backgroundImagePath: string;
};
export const HeroWrapper = styled.section<HeroWrapperProps>`
  background: no-repeat center center;
  background-image: ${(props) => `url(${props.backgroundImagePath}) `};
  background-size: cover;
  color: ${defaultTheme.colors.white};

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
    padding: 0 15%;
  }

  @media ${breakPoints.xlDown} {
    p {
      padding: 0 20%;
    }
  }

  @media ${breakPoints.lgDown} {
    h2 {
      margin-bottom: 15px;
    }
    p {
      padding: 0 10%;
    }
  }

  @media ${breakPoints.mdDown} {
    p {
      padding: 0 5%;
    }
  }

  @media ${breakPoints.smDown} {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  @media ${breakPoints.xsDown} {
    p {
      padding: 0;
    }
  }
`;

export const BreadcrumbContainer = styled.div`
  margin-top: 25px;
  text-align: center;

  @media ${breakPoints.lgDown} {
    margin-top: 20px;
  }
`;

export const BreadcrumbNavContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

export const BreadcrumbList = styled.ol`
  background-color: transparent;
  border-radius: 0;
  margin-bottom: 0;
  padding: 0;
  width: 100%;
`;

export const BreadcrumbItem = styled.li`
  a {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: underline;
    &:hover {
      color: #fff;
    }
  }
  &.active {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
  }
  + .breadcrumb-item {
    padding-left: 15px;
    &::before {
      color: #fff;
      content: '\00bb';
      display: inline-block;
      font-size: 1.15rem;
      margin-top: -1px;
      padding-right: 12px;
    }
  }
`;
