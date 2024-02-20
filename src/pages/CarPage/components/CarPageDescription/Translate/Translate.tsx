import * as React from 'react';
import './Translate.scss';
import ReactAudioPlayer from 'react-audio-player';
import {Text} from '@gravity-ui/uikit';
interface ITranslateProps {
    translateText?: string;
    translateAudio?: string;
}

export const Translate: React.FC<ITranslateProps> = ({translateText,translateAudio}) => {
    const isTranslate = translateText && translateAudio;
    return (
      <div>
        {isTranslate && 
        <div className="Translate">
            <span className="header">Перевод:</span>
            {translateAudio && <div className='audiorow'><span>Аудио:</span> <ReactAudioPlayer src={translateAudio} controls /> </div>}
            {translateText && <div className="textrow"><span>Текст:</span><Text className='text' variant='body-3'>{translateText}</Text></div> }
        </div>
        }
      </div>
    );
};
