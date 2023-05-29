import * as React from 'react';
import * as st from './postCard.module.css';

interface postProps {
  excerpt: string | null;
  frontmatter: {
    title: string | null;
    birth: string | null;
    modified: string | null;
    slug: string | null;
  } | null;
}

const PostCard = ({ post }: { post: postProps }) => {
  return (
    <div className={st.card}>
      <h2>{post.frontmatter?.title}</h2>
      <p>
        <span>작성</span>
        {post.frontmatter?.birth}
      </p>
      <p>
        <span>수정</span>
        {post.frontmatter?.modified}
      </p>
      <article>
        <p>{post.excerpt}</p>
      </article>
    </div>
  );
};

export default PostCard;
