import {
  ArrowSquareOutIcon,
  BuildingsIcon,
  GithubLogoIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { userApi } from "../../lib/axios";
import type { GitHubUser } from "../../@types/githubTypes";

export interface ProfileCardProps {}

export const ProfileCard: React.FC<ProfileCardProps> = () => {
  const [user, setUser] = useState<GitHubUser>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await userApi.get("");
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      {user && (
        <StyledContainer>
          <img src={user?.avatar_url} alt="" />
          <div className="info">
            <header>
              <h2>{user.name}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <div className="link-text">
                  GITHUB <ArrowSquareOutIcon weight="bold" size={16} />
                </div>
                <div className="underline" />
              </a>
            </header>

            <p>{user.bio}</p>
            <footer>
              <span>
                <GithubLogoIcon weight="fill" />
                {user.login}
              </span>
              {user.company && (
                <span>
                  <BuildingsIcon weight="fill" />
                  Company
                </span>
              )}
              {user.followers > 0 && (
                <span>
                  <UsersIcon weight="fill" />
                  {user.followers} followers
                </span>
              )}
            </footer>
          </div>
        </StyledContainer>
      )}
    </>
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
        flex-wrap: wrap;
        ${theme.font.title}
        gap: 0.5rem;
        svg {
          color: ${theme.base.label};
          margin-right: 0.25rem;
        }
      }
    }
  `}
`;
