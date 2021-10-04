import styled from '@emotion/styled';
import { breakPoints } from '@/styles';

type HeroWrapperProps = {
  imagePath: string;
};
export const HeroWrapper = styled.section<HeroWrapperProps>`
  background-image: ${(props) => `url(${props.imagePath}) `};
`;

export const BreadcrumbWrapper = styled.div`
  margin-top: 25px;
  text-align: center;

  @media ${breakPoints.lgDown} {
    margin-top: 20px;
  }
`;

export const BreadcrumbContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

export const BreadcrumbNav = styled.ol`
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
