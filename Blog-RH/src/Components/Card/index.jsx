import { useContext, lazy, Suspense } from "react";
import { ContextApp } from "../../Context";
import LazyLoadingImg from "../../Utils/LazyLoadingImg";
import { themeDark } from "../../Utils/themeDark";
const Comment = lazy(() => import("../Comment"));
const CardFooter = lazy(() => import("../CardFooter"));
const ButtonsCard = lazy(() => import("../ButtonsCard"));
const ButtonSeting = lazy(() => import("../ButtonSetting"));
import "./styles.css";

function Card({ darkMode }) {
  const { filterData, open } = useContext(ContextApp);

  return (
    <section
      className="main-section"
      style={themeDark("CONTAINER_CARD", darkMode)}
    >
      {filterData.length === 0 && (
        <h1 className="no-data" style={themeDark("CARD_TEXT", darkMode)}>
          No hay datos
        </h1>
      )}
      {filterData.map((item) => (
        <div className="card" key={item.id} style={themeDark("CARD", darkMode)}>
          <div className="card-header">
            <h2 className="card-title" style={themeDark("CARD_TEXT", darkMode)}>
              {item.title}
            </h2>
            <Suspense fallback={<h1>Loading...</h1>}>
              <ButtonSeting
                id={item.id}
                title={item.title}
                imgSrc={item.imgSrc}
                darkMode={darkMode}
              />
            </Suspense>
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
          <Suspense fallback={<h1>Loading...</h1>}>
            <ButtonsCard item={item} darkMode={darkMode} />
          </Suspense>

          {open === item.id && (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Comment item={item} darkMode={darkMode} />
            </Suspense>
          )}
          <Suspense fallback={<h1>Loading...</h1>}>
            <CardFooter id={item.id} darkMode={darkMode} />
          </Suspense>
        </div>
      ))}
    </section>
  );
}

// export { Card };
export default Card;
