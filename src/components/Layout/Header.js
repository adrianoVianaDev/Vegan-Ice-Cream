import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import logoImage from '../../assets/images/logo.png';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={logoImage} alt='logo'></img> 
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <div className={classes.text1}>
          <h1>Vegan Ice Cream</h1>
          <h2>Os melhores sorvetes veganos do Brasil</h2>
        </div>

        <div className={classes.text2}>
          <h1>Ingredientes selecionados</h1>
          <h2>Somente matéria prima de qualidade</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
