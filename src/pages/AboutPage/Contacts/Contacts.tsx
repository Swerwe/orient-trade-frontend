import * as React from 'react';
import './Contacts.scss';
import { TelegramIcon } from '../../../icons/TelegramIcon/TelegramIcon';
import { InstagramIcon } from '../../../icons/InstagramIcon/InstagramIcon';
import { WhatsappIcon } from '../../../icons/WhatsappIcon/WhatsappIcon';

export const Contacts: React.FC = () => {
    return (
      <div className="Contacts">
        <div className="header">НАШИ КОНТАКТЫ</div>
        <div className="contacts">
            <a href='tel:+7-984-142-94-56'>+7 984 142 94 56</a>
            <a href='mailto:RCI_trade@bk.ru'>RCI_trade@bk.ru</a>
        </div>
        <div className="header2">Мы в социальных сетях:</div>
        <div className="icons">
            <a href='https://t.me/Japcar25'>
                <TelegramIcon height={50} width={50} />
            </a>
            <a href='https://wa.me/79841429456?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%86%D0%B5%D0%BD%D0%B0%20%D0%BD%D0%B0%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%3A'>
                <WhatsappIcon height={50} width={50} />
            </a>
            <a href='https://www.instagram.com/japcar25'>
                <InstagramIcon height={50} width={50} />
            </a>

        </div>
      </div>
    );
};
