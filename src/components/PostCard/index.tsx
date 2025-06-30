import styled, { css } from "styled-components";

export interface PostCardProps {}

export const PostCard: React.FC<PostCardProps> = () => {
  return (
    <StyledCard>
      <header>
        <div className="info">
          <h3>Post name</h3>
          <span>Há 2 dias</span>
        </div>
        <div className="tags">
          <span>react</span>
          <span>next</span>
          <span>styling</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae
        ab iste quasi fuga cumque laudantium tempore quae sapiente. Ullam,
        fugiat sequi? Illo ipsa odio veniam velit nobis nisi? Laudantium.
      </p>
    </StyledCard>
  );
};

const StyledCard = styled.article`
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
    }

    .info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      span {
        font-size: 0.75rem;
      }
    }
    .tags {
      display: flex;
      gap: 1rem;
      span {
        background-color: ${theme.base.label};
        padding: 0 0.5rem;
        border-radius: 1rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: bold;
      }
    }
  `}
`;
