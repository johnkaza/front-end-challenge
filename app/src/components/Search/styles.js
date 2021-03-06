import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';

export const searchContainer = css`
  display: inline-block;
  background-color: ${colors.calypso};
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;

  .search-input {
    height: 24px;
    vertical-align: top;
    border: none;
    background-color: transparent;
    color: ${colors.white};
    outline: none;
    font-size: ${font.size12};

    &::placeholder {
      color: ${colors.white};
    }
  }
`;
