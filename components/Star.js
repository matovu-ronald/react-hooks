import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
  return <FaStar onClick={onSelect} color={selected ? "red" : "gray"} />;
};

export default Star;
