import styled, { css } from "styled-components";
import type { GitHubIssue } from "../../@types/githubTypes";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";
import { MarkdownComponent } from "../Markdown";

export interface PostCardProps {
  issue: GitHubIssue;
}

export const PostCard: React.FC<PostCardProps> = ({ issue }) => {
  const text = (lenght: number) => {
    if (issue.body.length > lenght) {
      return `${issue.body.slice(0, lenght)}...`;
    } else {
      return issue.body;
    }
  };

  return (
    <StyledCard to={`/post/${issue.id}`}>
      <header>
        <div className="info">
          <h3>{issue.title}</h3>
          <span>
            {formatDistanceToNow(issue.created_at, {
              addSuffix: true,
              locale: pt,
            })}
          </span>
        </div>
        <div className="tags">
          {issue.labels.slice(0, 3).map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
          {issue.labels.length > 3 && `... (+${issue.labels.length - 3})`}
        </div>
      </header>
      <div className="body">
        <MarkdownComponent content={text(100)} />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(Link)`
  ${({ theme }) => css`
    padding: 1rem;
    background-color: ${theme.base.post};
    ${theme.shadow}
    ${theme.radius}
    cursor: pointer;
    transition: 0.2s;
    border: 2px solid ${theme.base.post};

    ${theme.pressAnimation}

    &:hover {
      border-color: ${theme.blue};
    }
    header {
      margin-bottom: 1rem;
      width: 100%;
    }

    .info {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1rem;
      span {
        font-size: 0.75rem;
        min-width: 5rem;
        text-align: end;
      }
    }

    .tags {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    .body {
      width: 100%;
      h1,
      h2 {
        display: none;
      }
    }
  `}
`;
