import React from 'react';
import { tagsContainer } from './styles.js';
import { TagsProps } from './types';

const Tags: React.FC<TagsProps> = ({ tagsList }) => {
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
};

export default Tags;
