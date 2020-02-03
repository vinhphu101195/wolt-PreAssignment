import React, { useState } from "react";
import styled from "styled-components";
import SmallRes from "./RestaurantItem";
import { useRestaurant } from "../RestaurantsProvider/index";

const Container = styled.div`
  padding: 4em;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Restaurants = ({restaurants}) => {
  return restaurants.map((ele, index) => {
    return <SmallRes data={ele} key={index}></SmallRes>;
  });
  
};

export default function Home() {
  const restaurants = useRestaurant();
  const [restaurantState, setRestaurantState] = useState(restaurants);

  const onSort = value => {
    const a = [...restaurantState];
    a.sort((a, b) => {
      if (a.name > b.name) {
        return value;
      } else if (a.name < b.name) {
        return -value;
      } else {
        return 0;
      }
    });
    return setRestaurantState(a);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">Sort</button>
        <div className="dropdown-content">
          <ul>
            <li
              className="sort-select"
              onClick={() => {
                onSort(1);
              }}
            >
              Name A-Z
            </li>
            <li
              className="sort-select"
              onClick={() => {
                onSort(-1);
              }}
            >
              Name Z-A
            </li>
          </ul>
        </div>
      </div>
      <Container>{<Restaurants restaurants={restaurantState} />}</Container>;
    </div>
  );
}
