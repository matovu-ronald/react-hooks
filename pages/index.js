import { Fragment, useRef } from "react";

export default function Home() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <input
          ref={sound}
          type="text"
          name="sound"
          id="sound"
          placeholder="Sound..."
        />
        <input ref={color} type="color" name="color" id="color" />
        <button type="submit">ADD</button>
      </form>
    </Fragment>
  );
}
