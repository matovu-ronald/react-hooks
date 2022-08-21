import { Fragment, useState } from "react";
import { useInput } from "../hooks/useInput";

export default function Home() {
  const [soundProps, resetSoundProps] = useInput("");
  const [colorProps, resetColorProps] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();

    alert(`${soundProps.value} sounds like ${colorProps.value}`);
    resetColorProps();
    resetSoundProps();
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <input
          {...soundProps}
          type="text"
          name="sound"
          id="sound"
          placeholder="Sound..."
        />
        <input {...colorProps} type="color" name="color" id="color" />
        <button type="submit">ADD</button>
      </form>
    </Fragment>
  );
}
