import * as React from 'react';
import './AuctionListDescription.scss'
interface IAuctionListDescriptionProps {
    className?:string
}

const AuctionListDescription: React.FunctionComponent<IAuctionListDescriptionProps> = () => {
  return (
  <div className='AuctionListDescription'>
    <div>
    <h2>Аукционный лист</h2>
    <img style={{maxWidth:"400px"}} src='https://13.ajes.com/imgs/23FCi0VcQlGH9Q9lP5bjyCQ2KaIAFyLeUifkeQ6sbY'></img>
    </div>
    <div>
        <h2>Справочник обозначений</h2>
        <span className='AuctionListDescription__defs'>
            <div><p>A1</p> Маленькая Царапина</div>
            <div><p>A2</p> Царапина</div>
            <div><p>A3</p> Большая Царапина</div>
            <div><p>E1</p> Небольшая Вмятина</div>
            <div><p>E2</p> Несколько Небольших Вмятин</div>
            <div><p>E3</p> Много Небольших Вмятин</div>
            <div><p>U1</p> Маленькая Вмятина</div>
            <div><p>U2</p> Вмятина</div>
            <div><p>U3</p> Большая Вмятина</div>
            <div><p>W1</p> Ремонт/Покраска (едва обнаружимые)</div>
            <div><p>W2</p> Ремонт/Покраска (заметные)</div>
            <div><p>W3</p> Ремонт/Покраска (очень заметные, должно быть перекрашено)</div>
            <div><p>S1</p> Малозаметная Ржавчина</div>
            <div><p>S2</p> Ржавчина</div>
            <div><p>C1</p> Коррозия</div>
            <div><p>C2</p> Заметная Коррозия</div>
            <div><p>P </p>- Краска отличается от оригинала</div>
            <div><p>H </p>- Краска ухудшилась X Элемент требует замены</div>
            <div><p>XX</p> Замененный Элемент</div>
            <div><p>B1</p> Маленькая вмятина с царапиной (размером с большой палец)</div>
            <div><p>B2</p> Вмятина с царапиной (размером с ладонь)</div>
            <div><p>B3</p> Большая вмятина с царапиной (размером с локоть)</div>
            <div><p>Y1</p> Маленькая Трещина</div>
            <div><p>Y2</p> Трещина</div>
            <div><p>Y3</p> Большая Трещина</div>
            <div><p>X1</p> Маленькая Трещина на Ветровом стекле (приблизительно 1 см)</div>
            <div><p>R </p>Восстановленная Трещина на Ветровом стекле</div>
            <div><p>RX</p> Восстановленная Трещина на Ветровом стекле (требует замены)</div>
            <div><p>X </p>Трещина на Ветровом стекле (требует замены)</div>
            <div><p>G </p>- Трещина в стекле от камня</div>
        </span>
    </div>
    </div>);
};

export default AuctionListDescription;
