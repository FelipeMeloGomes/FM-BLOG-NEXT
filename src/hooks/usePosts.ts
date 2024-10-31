import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Post, UsePostsReturn } from "./types";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      slug
      subtitle
      title
      createdAt
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`;

export function usePosts(): UsePostsReturn {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .query({ query: GET_ALL_POSTS })
      .then((response: { data: { posts: Post[] } }) => {
        const formattedPosts = response.data.posts.map((post: Post) => {
          const date = new Date(post.createdAt);
          return {
            ...post,
            createdAt: !isNaN(date.getTime())
              ? format(date, "dd 'de' MMM 'de' yyyy", { locale: ptBR })
              : "Data inválida",
          };
        });
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
