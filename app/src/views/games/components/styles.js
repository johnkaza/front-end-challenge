import { css } from '@emotion/core';
import colors from '@/styles/colors';
import { font } from '@/styles/typography';
import { rgba } from '@/styles/helpers';

export const container = css`
  margin-top: 16px;
`;

export const listItemContainer = css`
  color: white;
  height: 69px;
  background-color: ${rgba(colors.black, 0.2)};
  cursor: pointer;

  &:hover {
    background-color: ${rgba(colors.black, 0.4)};
  }

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  .avatar {
    display: inline-block;
    max-width: 184px;

    > img {
      vertical-align: baseline;
    }
  }

  .info {
    max-width: 280px;
    width: 100%;
    margin-left: 16px;
    vertical-align: top;
    height: 100%;
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
    height: 100%;
  }

  .info,
  .avatar,
  .tags {
    float: left;
    display: inline-block;
    vertical-align: top;
  }
`;
