import React, { createContext } from "react";
import file from "../data/restaurants.json";

export const DataContext = createContext();

export default function ContextComponent(props) {
    
  return (
    <DataContext.Provider value={file.restaurants}>
      {props.children}
    </DataContext.Provider>
  );
}
