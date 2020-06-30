import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';

export const container = css`
  .discounted-price {
    text-decoration: line-through;
    font-size: ${font.size11};
    color: ${colors.midGray};
    position: relative;
    bottom: -2px;
  }

  .current-price {
    font-size: ${font.size13};
    color: ${colors.regentGray};
  }
`;
