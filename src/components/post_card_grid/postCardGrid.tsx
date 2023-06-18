import * as React from 'react';
import * as st from './postCardGrid.module.css';

const PostCardGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className={st.container}>{children}</div>;
};

export default PostCardGrid;
