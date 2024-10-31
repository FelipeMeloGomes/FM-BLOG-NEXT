import { RichTextContent } from "@graphcms/rich-text-types";

export interface CardPostsProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
  slug: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  createdAt: string;
  coverImage: { url: string };
  author: { name: string };
}

export interface UsePostsReturn {
  posts: Post[] | null;
  loading: boolean;
  error: boolean;
}

export interface Content {
  json: RichTextContent;
}
