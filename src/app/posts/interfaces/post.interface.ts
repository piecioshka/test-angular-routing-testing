export interface Post {
  id: string;
  createdTime: string;
  author: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  body: string;
  images: Array<string>;
}
