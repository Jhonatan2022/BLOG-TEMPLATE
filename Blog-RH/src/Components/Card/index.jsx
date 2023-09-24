import { useContext, useEffect } from "react";
import { ContextApp } from "../../Context";
import { Comment } from "../Comment";
import { ButtonsCard } from "../ButtonsCard";
import { ButtonSeting } from "../ButtonSetting";
import { CardFooter } from "../CardFooter";
import { LazyLoadingImg } from "../../Utils/LazyLoading";
import { LoadingSkeleton } from "../LoadingSkeleton";
import "./styles.css";

function Card() {
  const { filterData, open, loading, setLoading } = useContext(ContextApp);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);

  return (
    <section className="main-section">
      {loading && <LoadingSkeleton />}
      {filterData.length === 0 && <h1 className="no-data">No hay datos</h1>}
      {filterData.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-header">
            <h2 className="card-title">{item.title}</h2>
            <ButtonSeting
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
            />
            <span className="card-date">{item.date}</span>
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
