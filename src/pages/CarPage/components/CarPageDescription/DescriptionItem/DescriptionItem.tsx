import * as React from 'react';
import './DescriptionItem.scss';

interface IDescriptionItemProps {
    name:string;
    content?:string;
}   

export const DescriptionItem: React.FC<IDescriptionItemProps> = ({name,content}) => {
    return (
        <div className="DescriptionItem">
            {content && <li><span>{name}:</span> {content}</li>}
      </div>
    );
};
