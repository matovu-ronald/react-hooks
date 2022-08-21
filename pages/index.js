import { Fragment, useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);

  return (
    <Fragment>
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        value={checked}
        onChange={(checked) => setChecked(!checked)}
      />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </Fragment>
  );
}
