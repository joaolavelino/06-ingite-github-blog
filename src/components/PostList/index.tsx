import { useEffect, useState } from "react";
import styled from "styled-components";
import type { GitHubIssue } from "../../@types/githubTypes";
import { repoApi } from "../../lib/axios";
import { PostCard } from "../PostCard";

export interface PostListProps {}

export const PostList: React.FC<PostListProps> = () => {
  const [list, setList] = useState<GitHubIssue[]>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await repoApi.get("");
      setList(response.data);
    };
    fetchUser();
  }, []);
  return (
    <StyledContainer>
      <h2 className="title">Posts List</h2>
      <div className="list">
        {list &&
          list
            .slice(0, 2)
            .map((item) => <PostCard key={item.id} issue={item} />)}
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    margin-top: 2rem;
  }

  .list {
    margin-top: 2rem;
    display: grid;

    grid-gap: 2rem;
    ${(props) => props.theme.mediaQuery.md} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
