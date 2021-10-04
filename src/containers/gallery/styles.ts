import styled from '@emotion/styled';
import { breakPoints, defaultTheme } from '@/styles';

export const FilterContainer = styled.div`
  button {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid transparent;
    color: ${defaultTheme.colors.gray600};
    cursor: pointer;
    font-size: 1.15rem;
    line-height: 1.1rem;
    margin: 0 20px;
    outline: 0 none;
    padding: 0.5rem 0.1rem;
    transition: all 400ms ease-in-out;

    &.is-checked {
      border-bottom: 1px solid ${defaultTheme.colors.primary};
      color: ${defaultTheme.colors.primary};
      cursor: default;
      outline: 0 none;
    }

    &:hover,
    &:focus {
      background-color: transparent;
      border-bottom: 1px solid ${defaultTheme.colors.gray600};
      color: ${defaultTheme.colors.gray800};
      outline: 0 none;
    }
  }

  @media ${breakPoints.mdDown} {
    button {
      font-size: 1.175rem;
      margin: 0 15px;
      padding: 0.75rem 0.1rem;
    }
  }

  @media ${breakPoints.smDown} {
    button {
      font-size: 1.1rem;
      margin: 0 5px;
      padding: 0.75rem 0.1rem;
    }
  }
`;
