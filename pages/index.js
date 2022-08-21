import { Fragment, useEffect, useReducer, useState } from "react";

const initialState = {
  message: "hi",
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`,
      };

    case "whisper":
      return {
        message: `excuse me I JUST SAID ${state.message}`,
      };
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
    </Fragment>
  );
}
