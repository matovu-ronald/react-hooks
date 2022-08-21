import { Fragment, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Not Delivered");
  console.log(status);

  return (
    <Fragment>
      <button onClick={() => setStatus("Delivered on 21st August 2022")}>
        Change Status
      </button>
    </Fragment>
  );
}
