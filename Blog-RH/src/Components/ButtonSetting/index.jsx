import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ContextApp } from "../../Context";
import { SettingIcon, DeleteIcon, EditIcon } from "../Icons";
import "./styles.css";

function ButtonSeting({ id }) {
  const { data, setData } = useContext(ContextApp);
  const [openOptions, setOpenOptions] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleOpenOptions = (id) => {
    setOpenOptions(openOptions === id ? false : id);
  };

  return (
    <div className="options">
      <button
        title="Settings"
        className="btn-options"
        onClick={() => handleOpenOptions(id)}
      >
        <SettingIcon size="25" />
      </button>
      {openOptions === id && (
        <ul className="menu-options">
          <button className="edit">
            <EditIcon size="25" />
          </button>
          <button className="delete" onClick={() => handleDelete(id)}>
            <DeleteIcon size="25" />
          </button>
        </ul>
      )}
    </div>
  );
}

ButtonSeting.propTypes = {
  id: PropTypes.number.isRequired,
};

export { ButtonSeting };
