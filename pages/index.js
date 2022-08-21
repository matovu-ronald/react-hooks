import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("Matovu");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`The user is : ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  return (
    <Fragment>
      <section>
        <p>Congratulations {name}</p>
        <button onClick={() => setName("Nakibirige")}>Change Winner</button>
        <p>{admin ? "logged in" : "not logged in "}</p>
        <button onClick={() => setAdmin(!admin)}>{`${
          admin ? "Log out!" : "Log in!"
        }`}</button>
      </section>
    </Fragment>
  );
}
