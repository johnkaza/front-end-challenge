import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';

export const TabsContainer = css`
  .nav-link {
    color: ${colors.steelBlue};
    font-size: ${font.size12};
    margin-top: 24px;

    &:focus {
      outline: none;
    }

    &:hover {
      border: none;
      color: ${colors.white};
    }

    &.active {
      background-color: ${colors.cello};
      color: ${colors.white};
      border: none;
    }
  }

  border-bottom: 3px solid ${colors.cello};
`;

export const TabsWrapper = css`
  max-width: 616px;
  margin: 0 auto;
`;

export const searchContainer = css`
  margin-top: 16px;
`;
