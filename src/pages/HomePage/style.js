import styled from "styled-components";
import capa from "../../img/capa.jpg";

export const MainMovie = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${capa});
  background-size: cover;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  margin-top: 100px;
  display: flex;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContent = styled.div`
  margin: 10px;
`;

export const MainMovieContent = styled.div`
  padding: 100px 50px 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const SinopseContainer = styled.div`
  margin-top: 10px;
  width: 50%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
