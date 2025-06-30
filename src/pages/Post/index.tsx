import { PostDisplay } from "../../components/Post";

export interface PostProps {}

export const Post: React.FC<PostProps> = () => {
  return (
    <>
      <PostDisplay />
    </>
  );
};
