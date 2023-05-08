import React from 'react';
import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  //카테고리 api 불러서 카테고리 리스트 주고
  const location = useLocation();
  return (
    <Aside>
      <ul>
        <li>
          <StyledLink
            to='NCategory1'
            active={location.pathname === '/nutritionpage/ncategory1'}>
            광합성 촉진제
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to='NCategory2'
            active={location.pathname === '/nutritionpage/ncategory2'}>
            칼슘제
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to='NCategory3'
            active={location.pathname === '/nutritionpage/ncategory3'}>
            아미노산제
          </StyledLink>
        </li>
      </ul>
    </Aside>
  );
}

function NutritionPage() {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </Container>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active ? 'red' : 'black')};
`;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContainer = styled.section`
  flex: 1;
  padding: 40px;
  font-size: 1.2rem;
`;

const Aside = styled.aside`
  position: relative;
  top: 0;
  left: 0;
  border-right: 1px solid #ccc;

  ul {
    list-style: none;
    text-decoration: none;
    margin-top: 40px;

    & li {
      margin-bottom: 2rem;
      cursor: pointer;
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      display: flex;
      padding-inline-start: 0;
      li {
        padding-right: 1rem;
        margin: 0;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #fff;
  }
`;

export default NutritionPage;
