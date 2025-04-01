export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}