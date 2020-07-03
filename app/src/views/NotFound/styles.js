import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';

export const notFoundContainer = css`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: ${colors.steelBlue};

  font-size: ${font.size16};
`;
