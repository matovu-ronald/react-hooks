import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";

const App = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  console.log(data);

  if (loading) {
    return <h1>loading....</h1>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <Fragment>
      <h1>These are my Github Users</h1>
      <ul>
        <img src={data.avatar_url} alt="avatar" />
        <li>{data.name}</li>
      </ul>
    </Fragment>
  );
};

export default App;
