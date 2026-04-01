import { Link } from 'react-router'

const Title = ({ subTitle, arianeList = [] }) => {
  return (
    
      <div className="container-lg mb-4">
        <p>
          <Link to="/" className="">Accueil</Link>
          {arianeList.map((item, index) => {
            return (
                <span key={item}>
                    <img
                        src="/assets/icons/arrow-right.svg"
                        alt="fleche vers la droite"
                        height="16"
                        width="16"
                        className='mx-2'
                    
                    />
                    <span className="text-primary">
                        {item}
                    </span>
                </span>
            );
          })}
        </p>
        <h1 className="mb-5">Comment trouver mon artisan ?</h1>
        <hr />
        <h2 className="mb-0">{subTitle}</h2>
        
      </div>

  );
};

export default Title;
