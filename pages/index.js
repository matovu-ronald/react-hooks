import { Fragment, useEffect, useReducer, useState } from "react";

export default function Home() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <Fragment>
      <input
        type="checkbox"
        name="status"
        id="status"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "Delivered" : "Not Delivered"}</p>
    </Fragment>
  );
}
