import ContentTop from './contentTop/ContentTop';
import PizzaBlock from './pizzaBlock/PizzaBlock';

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <ContentTop />
        <h2 className="content__title">Все пиццы</h2>
        
        <PizzaBlock />
        
      </div>
    </div>
  );
};
export default Content;
