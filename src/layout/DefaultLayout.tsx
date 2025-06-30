import { Outlet } from "react-router-dom";
import styled from "styled-components";

export interface DefaultLayoutProps {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <LayoutContainer>
      <header className="app-header">
        <img src="/Logo.png" alt="" />
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>
          Made for learning purposes during the React learning Path by
          Rocketseat.
        </p>
      </footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .app-header {
    height: 296px;
    min-height: 296px;
    background-image: url("/Cover.png");
    background-position: center; /* Centers image */
    background-size: cover; /* Fills container */
    background-repeat: no-repeat; /* Prevents tiling */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 2rem;
  }
  .app-main {
    margin-top: -8rem;
    flex: 1;
  }
  .app-footer {
    background-color: ${({ theme }) => theme.base.input};
    padding: 1rem;
    text-align: center;
    p {
      font-size: 0.75rem;
    }
  }
`;
