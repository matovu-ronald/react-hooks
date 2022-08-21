import { Fragment, useState } from "react";

export default function Home() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();

    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("");
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <input
          value={sound}
          onChange={(e) => setSound(e.target.value)}
          type="text"
          name="sound"
          id="sound"
          placeholder="Sound..."
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="color"
          name="color"
          id="color"
        />
        <button type="submit">ADD</button>
      </form>
    </Fragment>
  );
}
