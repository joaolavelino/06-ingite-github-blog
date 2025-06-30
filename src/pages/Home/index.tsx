import { PostList } from "../../components/PostList";
import { ProfileCard } from "../../components/ProfileCard";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <main>
        <ProfileCard />
        <PostList />
      </main>
    </>
  );
};
