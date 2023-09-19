import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="main-container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Container };
