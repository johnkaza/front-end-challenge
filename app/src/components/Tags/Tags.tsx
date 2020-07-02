import React, { Component } from 'react';
import { tagsContainer } from './styles.js';
import { TagsProps } from './types';

export class Tags extends Component<TagsProps> {
  render() {
    const { tagsList } = this.props;

    return (
      <div css={tagsContainer}>
        {tagsList?.map((tag: { description: string }, key: number) => {
          return (
            <div className="single-tag" key={key}>
              {tag.description}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tags;
