const Title = ({ title, subTitle, arianeList = [] }) => {
  return (
    <div className="container-fluid">
      <div className="container-lg">
        <p>
          <a href="/">Accueil</a>{" "}
          {arianeList.map((item, index) => {
            return (
              <span key={index} className="pe-2">
                <img
                  src="./assets/icons/arrow-right.svg"
                  alt="fleche vers la droite"
                  height="16"
                  width="16"
                />{" "}
                {item}
              </span>
            );
          })}
        </p>
        <h1>{title}</h1>
        <hr />
        <h2>{subTitle}</h2>
        
      </div>
    </div>
  );
};

export default Title;
