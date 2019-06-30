import * as React from "react";
import { NextStatelessComponent } from "next";
import Link from "next/link";
import { Models } from "@sway-spire/api/server";
import { apiClient } from "@sway-spire/api/client";
import { DefaultLayout } from "@sway-spire/design/layouts/default";

interface Props {
  posts: Models.Post[];
}

const BlogIndex: NextStatelessComponent<Props> = ({ posts }) => {
  return (
    <DefaultLayout>
      <h1> Next + Typescript + Styled Components + GraphQL</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link passHref href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
};

BlogIndex.getInitialProps = async () => {
  //const posts = await apiClient.posts.getListing();
  const posts=[];
  return {  posts };
};

export default BlogIndex;
