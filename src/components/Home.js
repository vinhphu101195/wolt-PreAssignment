import React, { useContext, useState } from "react";
import styled from "styled-components";
import SmallRes from "./SmallRes";
import { DataContext } from "../context/ContextComponent";

const Container = styled.div`
  padding: 4em;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const showRestaurant = restaurants => {
  return restaurants.map((ele, index) => {
    return <SmallRes data={ele} key={index}></SmallRes>;
  });
};

export default function Home() {
  const restaurants = useContext(DataContext);
  const [restaurantState, setRestaurantState] = useState(restaurants);

  const onSort = value => {
    const a = restaurants.sort((a, b) => {
      if (a.name > b.name) {
        return value;
      } else if (a.name < b.name) {
        return -value;
      } else {
        return 0;
      }
    });
    setRestaurantState(a);
  };
  console.log(restaurantState);
  
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
      <Container>{showRestaurant(restaurantState)}</Container>;
    </div>
  );
}
