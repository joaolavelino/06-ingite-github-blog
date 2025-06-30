import { PostList } from "../../components/PostList";
import { ProfileCard } from "../../components/ProfileCard";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <main>
        <div className="content">
          <ProfileCard />
          <PostList />
        </div>
      </main>
      <footer>
        <p>
          Made for learning purposes during the React learning Path by
          Rocketseat.
        </p>
      </footer>
    </>
  );
};
