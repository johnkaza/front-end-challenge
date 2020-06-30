import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';
import { rgba } from '@/styles/helpers';
import { mq } from '@/styles/breakpoints';

export const container = css`
  margin-top: 16px;
`;

export const listItemContainer = css`
  color: white;
  background-color: ${rgba(colors.black, 0.2)};
  cursor: pointer;
  display: inline-block;
  width: 100%;
  position: relative;

  ${mq('xs')} {
    height: 69px;
  }

  &:hover {
    background-color: ${rgba(colors.black, 0.4)};
  }

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  .avatar {
    display: inline-block;
    max-width: 100px;

    ${mq('xxs')} {
      max-width: 110px;
    }

    ${mq('sm')} {
      max-width: 184px;
    }

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
    font-size: ${font.size14};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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

  .tags {
    font-size: ${font.size12};
    color: ${colors.oxfordBlue};
  }

  .single-tag {
    display: inline-block;

    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }

  .price {
    margin-left: 40px;
    height: 40px;
    position: absolute;
    right: 8px;
    top: 26px;

    ${mq('sm')} {
      height: 100%;
      position: static;
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
