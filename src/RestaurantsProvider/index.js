import React, { createContext,useContext } from "react";
import file from "./restaurants.json";

export const DataContext = createContext();

export default function RestaurantsProvider(props) {
    
  return (
    <DataContext.Provider value={file.restaurants}>
      {props.children}
    </DataContext.Provider>
  );
}

export const useRestaurant = () =>{
  return useContext(DataContext)
}
