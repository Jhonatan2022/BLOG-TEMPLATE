import { useContext } from "react";
import { PropTypes } from "prop-types";
import { ContextApp } from "../../Context";
import { Comment } from "../Comment";
import { ButtonsCard } from "../ButtonsCard";
import { ButtonSeting } from "../ButtonSetting";
import { CardFooter } from "../CardFooter";
import { LazyLoadingImg } from "../../Utils/LazyLoading";
import { themeDark } from "../../Utils/ThemeDark";
import "./styles.css";

function Card({ darkMode }) {
  const { filterData, open } = useContext(ContextApp);

  return (
    <section
      className="main-section"
      style={themeDark("CONTAINER_CARD", darkMode)}
    >
      {filterData.length === 0 && <h1 className="no-data" style={themeDark('CARD_TEXT', darkMode)} >No hay datos</h1>}
      {filterData.map((item) => (
        <div className="card" key={item.id} style={themeDark("CARD", darkMode)}>
          <div className="card-header">
            <h2 className="card-title" style={themeDark("CARD_TEXT", darkMode)}>
              {item.title}
            </h2>
            <ButtonSeting
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              darkMode={darkMode}
            />
            <span
              className="card-date"
              style={themeDark("TEXT_GRAY", darkMode)}
            >
              {item.date}
            </span>
          </div>
          <figure className="img-container">
            <LazyLoadingImg
              src={item.imgSrc}
              title={item.title}
              alt={item.title}
            />
          </figure>
          <ButtonsCard item={item} darkMode={darkMode} />
          {open === item.id && <Comment item={item} darkMode={darkMode} />}
          <CardFooter id={item.id} darkMode={darkMode} />
        </div>
      ))}
    </section>
  );
}

Card.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export { Card };
