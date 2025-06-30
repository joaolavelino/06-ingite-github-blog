import {
  ArrowSquareOutIcon,
  BuildingsIcon,
  GithubLogoIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export interface ProfileCardProps {}

export const ProfileCard: React.FC<ProfileCardProps> = () => {
  return (
    <StyledContainer>
      <img src="/avatar.png" alt="" />
      <div className="info">
        <header>
          <h2>Person Name</h2>
          <a href="#">
            <div className="link-text">
              GITHUB <ArrowSquareOutIcon weight="bold" size={16} />
            </div>
            <div className="underline" />
          </a>
        </header>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          obcaecati sunt facere nesciunt debitis adipisci, ullam dolor eum,
          ipsam maiores iste libero
        </p>
        <footer>
          <span>
            <GithubLogoIcon weight="fill" />
            username
          </span>
          <span>
            <BuildingsIcon weight="fill" />
            Company
          </span>
          <span>
            <UsersIcon weight="fill" />
            gfollowers
          </span>
        </footer>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    padding: 1.5rem;
    background-color: ${theme.base.profile};
    ${theme.shadow};
    ${theme.radius}
    img {
      width: 148px;
      height: 148px;
      border-radius: 8px;
      display: none;
      ${theme.mediaQuery.sm} {
        display: block;
      }
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      a {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-decoration: none;
        color: ${theme.blue};
        font-weight: bold;
        font-size: 0.75rem;
        .link-text {
          display: flex;
          gap: 0.5rem;
        }
        .underline {
          width: 100%;
          height: 2px;
          background-color: ${theme.blue};
          transform: scaleX(0);
          transform-origin: left center; /* Animation starts from left */
          transition: transform 0.2s cubic-bezier(0.65, 0, 0.35, 1); /* Smooth easing */
        }
        &:visited {
          color: ${theme.blue};
        }
        &:hover {
          .underline {
            transform: scaleX(1);
          }
        }
        ${theme.pressAnimation}
      }
    }
    footer {
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
  `}
`;
