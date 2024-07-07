import * as React from 'react';
import './AboutPage.scss';
import {NavBar} from '@/widgets';
import { MainHeader } from './ui/MainHeader/MainHeader';
import { Description } from './ui/Description/Description';
import { Services } from './ui/Services/Services';
import { Promo } from './ui/Promo/Promo';
import { Advantages } from './ui/Advantages/Advantages';
import { Request } from './ui/Request/Request';
import { Contacts } from './ui/Contacts/Contacts';
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
