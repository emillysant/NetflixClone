import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../../components/Card/Card";
import { movie } from "../../constants/mock";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
];

const MoviesPage = () => {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {movie.map((item) => {
          return <Card key={item.id} src={item.src} title={item.name} />;
        })}
      </Carousel>
    </div>
  );
};

export default MoviesPage;
