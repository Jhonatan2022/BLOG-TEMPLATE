import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextApp } from "../../Context";
import { CommentIcon, HeartIcon } from "../Icons";
import "./styles.css";

function ButtonOpenCommnet({ item }) {
  const { setOpen, open } = useContext(ContextApp);

  const handleOpen = (id) => {
    setOpen(open === id ? false : id);
  };

  return (
    <div className="card-content">
      <button className="">
        <HeartIcon />
      </button>
      <button className="btn-comments" onClick={() => handleOpen(item.id)}>
        <CommentIcon size="20" />
      </button>
    </div>
  );
}

ButtonOpenCommnet.propTypes = {
  item: PropTypes.object.isRequired,
};

export { ButtonOpenCommnet };
