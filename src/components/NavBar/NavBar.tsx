import * as React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';


const NavBar: React.FunctionComponent = () => {
  return (
    <nav className='NavBar'>
        <div className='NavBar__logo'><img src="/logo.png" />Japan Deal</div>
        <div className='NavBar__items'>
            <Link to={"/carstats"}>
                <div>
                    Статистика
                </div>
            </Link>
            <Link to={"/aucstats"}>
            <div>
                Аукционы онлайн
            </div>
            </Link>
        </div>
    </nav>
  ) ;
};

export default NavBar;
