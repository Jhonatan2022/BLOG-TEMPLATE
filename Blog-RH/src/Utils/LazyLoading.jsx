import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function LazyLoadingImg({ src, title, alt, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(imgRef.current);
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    const currentImgRef = imgRef.current; // Copia el valor de la referencia en una variable local

    observer.observe(currentImgRef);

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <img ref={imgRef} className={className}  src={isVisible ? src : ""} alt={alt} title={title} />
  );
}

LazyLoadingImg.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { LazyLoadingImg };
