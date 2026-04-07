import { Link } from 'react-router'

const Title = ({ arianeList = [], titleVisible = true, title="Comment trouver mon artisan ?" }) => {
  return (
    
    <header className="container-lg mb-4">
      <nav>
        <p className='lh-lg'>
          <Link to="/" className="text-blue_bright">Accueil</Link>
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
                    <span className={index !== arianeList.length - 1 ? "text-blue_bright" : "text-dark-blue" }>
                        {item}
                    </span>
                </span>
            );
          })}
        </p>
      </nav>
      {titleVisible &&
        <h1 className="mb-5">{title}</h1>
      }
      {/* <h2 className="mb-0 px-lg-5">{subTitle}</h2> */}
    </header>
  );
};

export default Title;
