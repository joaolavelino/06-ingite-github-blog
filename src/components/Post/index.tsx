import {
  ArrowSquareOutIcon,
  CalendarBlankIcon,
  CaretLeftIcon,
  GithubLogoIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { markdownContent } from "../../mockup";
import { MarkdownComponent } from "../Markdown";

export interface PostDisplayProps {}

export const PostDisplay: React.FC<PostDisplayProps> = () => {
  return (
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
        <h2>Title of the post</h2>
        <div className="tags">
          <span>react</span>
          <span>next</span>
          <span>styling</span>
        </div>
        <div className="info">
          <span>
            <GithubLogoIcon weight="fill" />
            username
          </span>
          <span>
            <CalendarBlankIcon weight="fill" />
            Company
          </span>
          <span>
            <UsersIcon weight="fill" />
            gfollowers
          </span>
        </div>
      </header>
      <main>
        <div>
          <MarkdownComponent content={markdownContent} />
        </div>
      </main>
    </StyledPostContainer>
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
