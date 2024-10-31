export interface Author {
  name: string;
}

export interface CoverImage {
  url: string;
}

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  createdAt: string;
  author: Author;
  coverImage: CoverImage;
}

export interface HomeProps {
  initialPosts: Post[];
}
