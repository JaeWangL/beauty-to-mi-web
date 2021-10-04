import styled from '@emotion/styled';
import { breakPoints, breakPointsMultiple, defaultTheme } from '@/styles';

export const PricingContainer = styled.section`
  background-color: ${defaultTheme.colors.gray100};

  li {
    border-bottom: 1px dashed ${defaultTheme.colors.darkGold400};
    margin: 0 15px 20px;
    padding-bottom: 20px;

    &:last-child {
      border-bottom: 0;
    }
  }

  .pricing-list-txt {
    position: relative;

    h5,
    h6 {
      line-height: 1;
      margin-bottom: 5px;
    }

    p {
      margin-bottom: 0;
    }
  }

  .pricing-list-amount {
    letter-spacing: 1px;
    position: absolute;
    right: 10px;
    top: 0;
  }

  @media ${breakPoints.smDown} {
    li {
      margin: 0 0 20px;
    }
    .pricing-list-txt {
      h5 {
        margin-bottom: 8px;
      }
    }
    .pricing-list-amount {
      right: 0;
    }
  }
`;
