import * as React from 'react';
import './Advantage.scss';

interface IAdvantageProps {
    name:string;
    description:string;

}

export const Advantage: React.FC<IAdvantageProps> = ({name,description}) => {
    return (
      <div className="Advantage" >
        <img src={process.env.PUBLIC_URL + 'checkmark.svg'} />
        <div className="text">
            <div className="name">{name}</div>
            <div className="description">{description}</div>
        </div>
      </div>
    );
};
