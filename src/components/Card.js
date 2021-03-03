import "./Card.css";
export default function Card({ title, url, desc }) {
  return (
    <>
      <div className="card shadow-sm rounded" style={{ width: "20rem" }}>
        <div
          className="card-img-top"
          style={{
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url(" + url + ")",
          }}
        ></div>
        {/* <img src={props.url} className="card-img-top" height="300" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc ||
              `Some quick example text to build on the card title and make up the
            bulk of the card's content. Our easy user friendly take on meet up applications.`}
          </p>
        </div>
      </div>
    </>
  );
}
