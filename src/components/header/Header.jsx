import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoPizza.svg';
import { HeaderSvg } from '../../assets/svg/Svg';
import Button from '../../commons/button/Button';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Link to="/basket">
            <Button className="button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter"></div>
              <HeaderSvg />
              <span>3</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
