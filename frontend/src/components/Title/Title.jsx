import { Link } from 'react-router'

const Title = ({ arianeList = [], titleVisible = true }) => {
  return (
    
    <header className="container-lg mb-4">
      <nav>
        <p>
          <Link to="/" className="">Accueil</Link>
          {arianeList.map((item, index) => {
            return (
                <span key={item}>
                    <img
                        src="/assets/icons/arrow-blue-small.svg"
                        alt="fleche vers la droite"
                        height="12"
                        width="12"
                        className='mx-3'
      
                    />
                    <span className={index !== arianeList.length - 1 ? "text-primary" : "text-danger" }>
                        {item}
                    </span>
                </span>
            );
          })}
        </p>
      </nav>
      {titleVisible &&
        <h1 className="mb-5">Comment trouver mon artisan ?</h1>
      }
      {/* <h2 className="mb-0 px-lg-5">{subTitle}</h2> */}
    </header>
  );
};

export default Title;
