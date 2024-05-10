import * as React from 'react';
import './ReviewSlider.scss';
export const ReviewSlider: React.FC = () => {
    const imagesRef = React.useRef<HTMLDivElement>(null);
    const moveScroll = (x: number) => {
        if (imagesRef.current) {
            imagesRef.current.scroll({left:imagesRef.current.scrollLeft + x,top:0,behavior:'smooth'});
        }

    }
    return (
        <div className="ReviewSlider">
            <div className="review-header">Обзоры купленных авто:</div>
            <div className="slider">
                <button className="back" onClick={() => { moveScroll(-350) }}>
                    <svg role="presentation" fill='#fff' x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
                </button>
                <div className="images" ref={imagesRef}>
                    <a href='https://t.me/Japcar25/1356'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-02-22 01.23.46.webp'}></img></a>
                    <a href='https://t.me/Japcar25/364'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-02-22 01.17.05.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1325'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-02-22 01.28.04.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1824'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-02-22 01.31.06.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1564'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-02-22 01.16.57.webp'}></img></a>
                    <a href='https://t.me/Japcar25/506'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.18.05.webp'}></img></a>
                    <a href='https://t.me/Japcar25/199'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.21.38.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1124'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.23.00.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1194'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.27.09.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1252'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.29.35.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1492'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.30.48.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1632'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.31.56.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1739'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.33.01.webp'}></img></a>
                    <a href='https://t.me/Japcar25/1793'><img className='img' loading='lazy' src={process.env.PUBLIC_URL + '2024-03-03 20.34.03.webp'}></img></a>
                    
                    
                </div>
                <button className="next" onClick={() => { moveScroll(350) }}>
                    <svg role="presentation" fill='#fff' x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
                </button>
            </div>

        </div>
    );
};
