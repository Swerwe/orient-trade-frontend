import * as React from 'react';
import './DescriptionItem.scss';

interface IDescriptionItemProps {
    name:string;
    content?:string;
}   

export const DescriptionItem: React.FC<IDescriptionItemProps> = ({name,content}) => {
    return (
        <div className="DescriptionItem">
            {content && <div className='item'><span className='name'>{name}</span> <span className='content'>{content}</span></div>}
      </div>
    );
};
