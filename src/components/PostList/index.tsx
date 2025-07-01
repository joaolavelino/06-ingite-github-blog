import { useEffect, useState } from "react";
import styled from "styled-components";
import type { GitHubIssue } from "../../@types/githubTypes";
import { issuesApi } from "../../lib/axios";
import SearchForm from "../Form";
import { PostCard } from "../PostCard";

export interface PostListProps {}

export const PostList: React.FC<PostListProps> = () => {
  const [list, setList] = useState<GitHubIssue[]>();
  const [query, setQuery] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);

  const fetchList = async (query?: string) => {
    try {
      const response = await issuesApi.get("", {
        params: { q: `${query || ""} repo:joaolavelino/06-ingite-github-blog` },
      });
      setList(response.data.items);
    } catch (error) {
      console.error("Error fetching issues:", error);
      setSearchError("There was an error during search");
    }
  };

  useEffect(() => {
    fetchList(query);
  }, [query]);

  const updateList = (query: string) => {
    console.log(query);
    setQuery(query);
  };

  const resetFunction = () => {
    setQuery("");
    fetchList();
  };

  return (
    <StyledContainer>
      <h2 className="title">Posts</h2>

      <div className="result-info">
        <p>
          Showing {list?.length} results {query.length > 0 && `for ${query}`}
        </p>
        {query.length > 0 && (
          <button onClick={resetFunction} type="button">
            Reset
          </button>
        )}
      </div>
      <SearchForm updateList={(query: string) => updateList(query)} />

      <div className="list">
        {searchError && <h3>{searchError}</h3>}
        {list && list.map((item) => <PostCard key={item.id} issue={item} />)}
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
  .result-info {
    width: 100%;
    display: flex;
    gap: 1rem;

    button {
      outline: none;
      border: 2px solid transparent;
      background-color: transparent;
      text-transform: uppercase;
      font-weight: bold;
      color: ${(props) => props.theme.blue};
      ${(props) => props.theme.pressAnimation};
      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
      padding: 0;
    }
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
