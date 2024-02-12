import * as React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CompanyName } from './CompanyName/CompanyName';
import { TelegramIcon } from '../../icons/TelegramIcon/TelegramIcon';
import { InstagramIcon } from '../../icons/InstagramIcon/InstagramIcon';
import { WhatsappIcon } from '../../icons/WhatsappIcon/WhatsappIcon';
const NavBar: React.FunctionComponent = () => {
    return (
        <nav className='NavBar'>
            <div className='NavBar__items'>
                <Link to={"/"}>
                    <div>
                        О нас
                    </div>
                </Link>
                <HashLink to={"/"}>
                    <div>
                        Услуги
                    </div>
                </HashLink>
                <Link to={"/aucstats"}>
                    <div>
                        Цены
                    </div>
                </Link>
                <Link to={"/aucstats"}>
                    <div>
                        Аукционы
                    </div>
                </Link>
                <Link to={"/aucstats"}>
                    <div>
                        Обзоры
                    </div>
                </Link>
            </div>
            <CompanyName/>
            <div className="contacts">
                <a href='https://t.me/Japcar25'>
                    <TelegramIcon height={30} width={30} />
                </a>
                <a href='https://wa.me/79841429456?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%86%D0%B5%D0%BD%D0%B0%20%D0%BD%D0%B0%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%3A'>
                    <WhatsappIcon height={30} width={30} />
                </a>
                <a href='https://www.instagram.com/japcar25'>
                    <InstagramIcon height={30} width={30} />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
