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
      <footer></footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  .app-header {
    height: 296px;
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
  }
`;
