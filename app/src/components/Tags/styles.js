import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';

export const tagsContainer = css`
  font-size: ${font.size12};
  color: ${colors.oxfordBlue};

  .single-tag {
    display: inline-block;

    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
`;
