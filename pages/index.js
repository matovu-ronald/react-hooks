import { Fragment, useState } from "react";
import StarRating from "../components/StarRating";

export default function Home() {
  const [checked, setChecked] = useState(false);

  return (
    <Fragment>
      <StarRating totalStars={10} />
    </Fragment>
  );
}
