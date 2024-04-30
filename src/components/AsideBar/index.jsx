import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const AsideBar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            activeIcon="/icons/home-active.png"
            inactiveIcon="/icons/home-inactive"
            active
          >
            Home
          </NavItem>
          <NavItem
            activeIcon="/icons/most-seen-active.png"
            inactiveIcon="/icons/most-seen-inactive.png"
          >
            Most seen
          </NavItem>
          <NavItem
            activeIcon="/icons/most-liked-active.png"
            inactiveIcon="/icons/most-liked-inactive.png"
          >
            Most Liked
          </NavItem>
          <NavItem
            activeIcon="/icons/news-active.png"
            inactiveIcon="/icons/news-inactive.png"
          >
            News
          </NavItem>
          <NavItem
            activeIcon="/icons/surprise-me-active.png"
            inactiveIcon="/icons/surprise-me-inactive.png"
          >
            Surprise me
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
};

export default AsideBar;
