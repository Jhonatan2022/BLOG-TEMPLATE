import { useContext } from "react";
import { ContextApp } from "../../Context";
import { Comment } from "../Comment";
import { ButtonsCard } from "../ButtonsCard";
import { ButtonSeting } from "../ButtonSetting";
import { CardFooter } from "../CardFooter";
import { LazyLoadingImg } from "../../Utils/LazyLoading";
import { themeDark } from "../../Utils/themeDark";
import "./styles.css";

function Card() {
  const { filterData, open, darkMode } = useContext(ContextApp);

  return (
    <section className="main-section">
      {filterData.length === 0 && <h1 className="no-data">No hay datos</h1>}
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
              style={themeDark("CARD_TEXT", darkMode)}
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
          <ButtonsCard item={item} />
          {open === item.id && <Comment item={item} />}
          <CardFooter id={item.id} />
        </div>
      ))}
    </section>
  );
}

export { Card };
