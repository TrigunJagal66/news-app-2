const Newsitem = ({ title, description, src, url }) => {
    return (
      <div
        className="card bg-dark text-light mb-4 d-inline-block my-3 mx-3"
        style={{
          maxWidth: "345px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}
      >
        <img
          src={src || 'fallback-image-url.jpg'} // Use fallback image if src is undefined
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
          }}
          className="card-img-top"
          alt="News Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            {title ? title.slice(0, 50) : "No title available"}
            {title && title.length > 50 ? "..." : ""}
          </h5>
          <p className="card-text" style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>
            {description ? description.slice(0, 90) : "No description available"}
          </p>
          <a
            href={url || '#'} // Use "#" as a fallback if url is undefined
            className="btn btn-primary"
            style={{
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "0.95rem"
            }}
          >
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default Newsitem;
  