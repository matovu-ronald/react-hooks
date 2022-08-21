import { CreateRatings } from "../utils/create-ratings";
import Star from "./Star";
import { Fragment, useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <Fragment>
      {CreateRatings(totalStars).map((star, index) => {
        return (
          <Star
            key={index}
            selected={selectedStars > index}
            onSelect={() => setSelectedStars(index + 1)}
          />
        );
      })}
      <p>{`${selectedStars} of ${totalStars}`}</p>
    </Fragment>
  );
};

export default StarRating;
