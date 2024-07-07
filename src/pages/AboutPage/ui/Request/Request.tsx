import * as React from 'react';
import './Request.scss';
import { Form } from './Form/Form';

export const Request: React.FC = () => {
    return (
      <div className="Request" id="Request">
        <div className="header">Оставьте заявку для расчета Авто</div>
        <div className="description">Укажите свои данные для обратной связи</div>
        <Form/>
      </div>
    );
};
