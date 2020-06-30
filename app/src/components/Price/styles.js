import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';

export const container = css`
  .discounted-price {
    text-decoration: line-through;
    font-size: ${font.size11};
  }

  .current-price {
    font-size: ${font.size13};
  }
`;
