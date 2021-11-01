import React from "react";
import { CardContainer } from "./styled";

const Card = ({ src, title }) => {
  return (
    <CardContainer>
      <img alt={""} src={src} />
    </CardContainer>
  );
};

export default Card;
