import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';
import { mq } from '@/styles/breakpoints';

export const TabsContainer = css`
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  position: relative;
  margin-top: 24px;
  border-bottom: 5px solid ${colors.cello};

  box-shadow: inset -7px 0 9px -7px rgb(0, 0, 0, 0.6);

  &::-webkit-scrollbar {
    display: none;
  }

  ${mq('xs')} {
    box-shadow: none;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: ${colors.steelBlue};
    font-size: ${font.size13};
    padding: 8px;
    white-space: nowrap;

    &:focus {
      outline: none;
    }

    &:hover {
      border: none;
      color: ${colors.white};
    }

    &.active {
      font-size: ${font.size14};
      background-color: ${colors.cello};
      color: ${colors.white};
      border: none;
    }
  }
`;

export const TabsWrapper = css`
  max-width: 616px;
  margin: 0 auto;
`;

export const searchContainer = css`
  margin-top: 16px;
`;
