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
    }
    footer {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      span {
        display: flex;
        align-items: center;
        ${theme.font.title}
        gap: 0.5rem;
        svg {
          color: ${theme.base.label};
        }
      }
    }
  `}
`;
