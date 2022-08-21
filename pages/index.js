import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [githubUsers, setGithubUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => setGithubUsers(data));
  }, []);

  if (githubUsers) {
    return (
      <Fragment>
        <h1>Github Users</h1>
        <ul>
          {githubUsers.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <a href={user.html_url}>{user.login}</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }

  return <p>No users</p>;
}
