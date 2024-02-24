import * as React from 'react';
import './AboutPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import { MainHeader } from './MainHeader/MainHeader';
import { Description } from './Description/Description';
import { Services } from './Services/Services';
import { Promo } from './Promo/Promo';
import { Advantages } from './Advantages/Advantages';
import { Request } from './Request/Request';
import { Contacts } from './Contacts/Contacts';
export const AboutPage: React.FC = () => {
    return (
      <div className="AboutPage">
        <NavBar />
        <MainHeader />
        <Description />
        <Services />
        <Promo />
        <Advantages />
        <Request />
        <Contacts />
      </div>
    );
};
