import "./Card.css";
export default function Card({ title, linkTitle, url, url2, desc }) {
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
          <a target="__blank" href={url2} class="btn btn-primary">
            {linkTitle}
          </a>
          <p className="card-text">{desc || ``}</p>
        </div>
      </div>
    </>
  );
}
