import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Button, Typography } from "@material-ui/core";
import {
  MainMovie,
  ButtonContainer,
  ButtonContent,
  MainMovieContent,
  SinopseContainer,
} from "./style";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <MainMovie>
      <Header />
      <MainMovieContent>
        <Typography color={"secondary"} variant={"h3"}>
          The Witcher
        </Typography>
        <SinopseContainer>
          <Typography color={"secondary"}>
            O mutante Geralt de Rívia é um caçador de monstros que luta para
            encontrar seu lugar num mundo onde as pessoas muitas vezes são mais
            perversas que as criaturas selvagens.
          </Typography>
        </SinopseContainer>
        <ButtonContainer>
          <ButtonContent>
            <Button
              variant="contained"
              color={"primary"}
              size="large"
              fullWidth
            >
              <PlayArrowIcon />
              Assistir agora
            </Button>
          </ButtonContent>
          <ButtonContent>
            <Button
              variant="contained"
              color={"secondary"}
              size="large"
              fullWidth
            >
              <AttachFileIcon />
              Mais informações
            </Button>
          </ButtonContent>
        </ButtonContainer>
      </MainMovieContent>
    </MainMovie>
  );
};

export default HomePage;
