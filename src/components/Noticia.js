import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
  : null;


  return (
    <div className="col s12 m6 14">
        <div className="card">
            <div className="card-content">
                {image}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn"
                >
                Ver noticia
                </a>
            </div>
        </div>
    </div>
  );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;
