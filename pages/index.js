import { createContext, Fragment } from "react";
import App from "../components/App";

export const TreesContext = createContext();

const trees = [
  { id: 1, name: "Oak" },
  { id: 2, name: "Pine" },
  { id: 3, name: "Maple" },
  { id: 4, name: "Ash" },
  { id: 5, name: "Birch" },
];

export default function Home() {
  return (
    <Fragment>
      <TreesContext.Provider value={{ trees }}>
        <App />
      </TreesContext.Provider>
    </Fragment>
  );
}
