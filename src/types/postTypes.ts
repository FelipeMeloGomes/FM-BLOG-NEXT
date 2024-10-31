import { ElementNode } from "@graphcms/rich-text-types";

export interface PostProps {
  post: {
    id: string;
    title: string;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
    };
    createdAt: string;
    content: {
      json: ElementNode[];
    };
  };
}
