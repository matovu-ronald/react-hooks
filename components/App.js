import { Fragment } from "react";
import { useTrees } from "../pages";

const App = () => {
  const { trees } = useTrees();
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
