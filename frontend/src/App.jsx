import TextCenter from './components/TextCenter';
import cardData from './data';

const App = () => {
  return (
    <div>
      <TextCenter title="ATTENTION! You do not need JS for everything!" />
      <div className="container">
        {cardData.map((card, index) => (
          <div className={`card ${card.backgroundColor}`} key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={card.frontImg} alt="" />
              </div>
              <div className="card-back">
                <img src={card.backImg} alt="Back" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
