import styled from "styled-components";
import { PostCard } from "../PostCard";

export interface PostListProps {}

export const PostList: React.FC<PostListProps> = () => {
  return (
    <StyledContainer>
      <h2>Posts List</h2>
      <div className="list">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  .list {
    margin-top: 2rem;
    display: grid;

    grid-gap: 2rem;
    ${(props) => props.theme.mediaQuery.md} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
