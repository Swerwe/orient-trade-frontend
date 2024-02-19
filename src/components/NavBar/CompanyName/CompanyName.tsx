import * as React from 'react';
import './CompanyName.scss';
export const CompanyName: React.FC = () => {
    return (
      <div className="CompanyName">
        <img src='/whitelogo.png'></img>
        <div>
          <div>ORIENT TRADE</div>
          <a href='tel:+79841429456'><div>+79841429456</div></a>
        </div>

      </div>
    );
};
