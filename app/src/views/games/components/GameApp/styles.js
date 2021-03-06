import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';
import { rgba } from '@/styles/helpers';
import { mq } from '@/styles/breakpoints';

export const gameAppContainer = css`
  color: white;
  background-color: ${rgba(colors.black, 0.2)};
  cursor: pointer;
  display: inline-block;
  width: 100%;
  position: relative;

  ${mq('xs')} {
    height: 80px;
  }

  &:hover {
    background-color: ${rgba(colors.black, 0.4)};
  }

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  .avatar {
    display: inline-block;
    max-width: 168px;

    > img {
      vertical-align: baseline;
    }
  }

  .info {
    max-width: 100px;
    width: 100%;
    vertical-align: top;
    height: 100%;
    margin-left: 8px;

    ${mq('xxs')} {
      max-width: calc(100% - 184px);
    }

    ${mq('xs')} {
      margin-left: 16px;
    }

    ${mq('sm')} {
      max-width: 280px;
    }
  }

  .title {
    font-size: ${font.size15};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 4px;
  }

  .platforms {
    margin-bottom: 4px;
  }

  .discount,
  .price {
    display: inline-flex;
    align-items: center;
    height: 100%;
    vertical-align: top;
  }

  .discount {
    margin-left: 16px;
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;

    ${mq('sm')} {
      position: static;
      height: 100%;
    }
  }

  .price {
    margin-left: 24px;
    height: 40px;
    position: absolute;
    right: 8px;
    top: 26px;
    text-align: right;

    ${mq('sm')} {
      margin-right: 20px;
      height: 100%;
      position: static;
      float: right;
    }
  }

  .info,
  .avatar,
  .tags {
    float: left;
    display: inline-block;
    vertical-align: top;
  }
`;

export const unAvailableContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const loadingContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const loaderContainer = css`
  color: ${rgba(colors.black, 0.4)};
`;
