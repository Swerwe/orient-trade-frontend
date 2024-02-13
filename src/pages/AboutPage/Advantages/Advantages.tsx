import * as React from 'react';
import './Advantages.scss';
import { Advantage } from './Advantage/Advantage';

export const Advantages: React.FC = () => {
    return (
      <div className="Advantages">
        <div className="header">Наши преимущества:</div>
        <div className="why">Зачем заказывать авто из Японии именно у нас?</div>
        <div className="advantages">
            <Advantage name="Честные авто" description="Чистая реальная история, пробег состояние. Никаких скрученных с 300 тысяч до 30ти, битья и утопленников и гаражных ремонтов, в отличие от рынка БУ."/>
            <Advantage name="Отличное состояние" description="Хорошие условия эксплуатации в Японии -дороги, расходники, климат, своевременное ТО. Как результат - покупка надёжного авто в отличном состоянии. Прослужит долго без проблем!"/>
            <Advantage name="Юридическая чистота" description="Таможня выдает ЭПТС - и Вы первый собственник. Никаких залогов, арестов уголовных дели прочих рисков потерять авто, нервы и деньги.Опасаетесь везти под Заказ? Можем предложить любые гарантии, вплоть до банковского аккредитива."/>
            <Advantage name="Экономически выгодно" description="Дешевле и качественнее чем на рынке. Увидите расчет и сами делайте выводы. Авто дилеры закладывают свою маржу, а выехав из салона сразу теряете 50% стоимости!
А в нашем случае можно и продать дороже когда придет время менять авто👍"/>
            <Advantage name="Огромный выбор" description="Огромный выбор моделей и комплектаций. Можно найти вариант под любые нужды и бюджет. Салон такого не позволит."/>
            <Advantage name="Поэтапная оплата" description="Сначала оплачиваем стоимость авто в Японии по инвойсу (в зависимости от года и модели около 50% всей стоимости), вторую часть уже при получении авто. Из практики за эти 2-4 недели можно продать свой авто и не сидеть без руля!"/>

        </div>
      </div>
    );
};