import {
  ArrowSquareOutIcon,
  BuildingsIcon,
  CaretLeftIcon,
  GithubLogoIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import type { GitHubIssue } from "../../@types/githubTypes";
import { repoApi } from "../../lib/axios";
import { MarkdownComponent } from "../Markdown";

export interface PostDisplayProps {}

export const PostDisplay: React.FC<PostDisplayProps> = () => {
  const { postId } = useParams();

  const [post, setPost] = useState<GitHubIssue>();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await repoApi.get(`/${postId}`);
      console.log(response);
      setPost(response.data);
    };
    fetchPost();
  }, [postId]);
  return (
    <>
      {" "}
      {post && (
        <StyledPostContainer>
          <header>
            <div className="links">
              <Link to={"/"}>
                <div className="link-text">
                  <CaretLeftIcon />
                  Back
                </div>
                <div className="underline" />
              </Link>
              <a href="/">
                <div className="link-text">
                  Github <ArrowSquareOutIcon weight="bold" size={16} />
                </div>
                <div className="underline" />
              </a>
            </div>
            <h2>{post.title}</h2>
            <div className="tags">
              {post.labels.map((label) => (
                <span key={label.id}>{label.name}</span>
              ))}
            </div>
            <div className="info">
              <span>
                <GithubLogoIcon weight="fill" />
                {post.user.login}
              </span>
              {post.user.company && (
                <span>
                  <BuildingsIcon weight="fill" />
                  Company
                </span>
              )}
              {post.user.followers > 0 && (
                <span>
                  <UsersIcon weight="fill" />
                  {post.user.followers} followers
                </span>
              )}
            </div>
          </header>
          <main>
            <div>
              {post?.body && <MarkdownComponent content={post?.body} />}
            </div>
          </main>
        </StyledPostContainer>
      )}
    </>
  );
};

// const Component = () => {
//   return (
//     <SyntaxHighlighter language="typescript">
//       {markdownContent}
//     </SyntaxHighlighter>
//   );
// };

const StyledPostContainer = styled.article`
  ${({ theme }) => css`
    header {
      background-color: ${theme.base.profile};
      ${theme.radius}
      ${theme.shadow}
      padding: 2rem;
      h2 {
        margin: 1rem 0 1rem;
      }
      .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .info {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          svg {
            color: ${theme.base.label};
          }
        }
      }
    }
    main {
      margin-top: 2rem;
    }
    p > code {
      padding: 0.25rem 0.5rem;
      background-color: ${theme.base.input};
      color: ${theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      ${theme.shadow}
    }
    pre {
      font-size: 12px;
    }
  `}
`;
