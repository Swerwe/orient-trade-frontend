import * as React from 'react';
import './MainHeader.scss';
import { HashLink } from 'react-router-hash-link';
export const MainHeader: React.FC = () => {
    return (
      <div className="MainHeader">
        <div className="content">
            <span className="header">Авто из Японии под Заказ</span> 
            <div className="li">-На рынке с 2010 года!</div>
            <div className="li">-Честность и прозрачность, Договор!</div>
            <div className="li">-Дешевле и качественнее чем на рынке!</div>
            <div className="li">-Отправим по России! Звоните, пишите!</div> 
            <HashLink smooth to="/#Request"><button className='application'>ОСТАВИТЬ ЗАЯВКУ</button></HashLink>  
            <HashLink smooth to="/#Description">
              <button className='arrow'><svg role="presentation"  fill='#fff' x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg></button>
            </HashLink>
        </div>
      </div>
    );
};
