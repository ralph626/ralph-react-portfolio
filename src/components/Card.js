import "./Card.css";
export default function Card(props) {
  return (
    <>
      <div className="card shadow-sm rounded" style={{ width: "20rem" }}>
        <img src={props.url} className="card-img-top" height="300" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc ||
              `Some quick example text to build on the card title and make up the
            bulk of the card's content.`}
          </p>
        </div>
      </div>
    </>
  );
}
