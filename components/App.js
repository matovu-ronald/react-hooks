import { Fragment, useContext } from "react";
import { TreesContext } from "../pages";

const App = () => {
  const { trees } = useContext(TreesContext);
  console.log(trees);
  return (
    <Fragment>
      <h1>These are the trees i have heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
