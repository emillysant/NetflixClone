import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import {
  Container,
  ContainerLeft,
  ImgLogo,
  NavLink,
  ContainerRight,
} from "./style";

const Header = () => {
  return (
    <Container>
      <ContainerLeft>
        <ImgLogo
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="NETFLIX logo"
        />
        <nav>
          <NavLink href="#">Início</NavLink>
          <NavLink href="#">Séries</NavLink>
          <NavLink href="#">Filmes</NavLink>
          <NavLink href="#">Bombando</NavLink>
          <NavLink href="#">Minha lista</NavLink>
        </nav>
      </ContainerLeft>
      <ContainerRight>
        <IconButton>
          <SearchIcon size="large" color="secondary" />
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 13 new notifications"
          color="secondary"
        >
          <Badge badgeContent={13} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar size="small" variant="rounded">
            <FaceIcon />
          </Avatar>
        </IconButton>
      </ContainerRight>
    </Container>
  );
};

export default Header;
