import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px 0px 50px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  
`;

export const ImgLogo = styled.img`
  width: 90px;
  margin-right: 20px;
  cursor: pointer;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  transition: 0.3s ease all;
  :hover {
    color: #aaa;
    cursor: pointer;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Navibar = styled.div`
  @media screen and (min-width: 0px) and (max-width: 480px) {
    display: none;
  }
`;
