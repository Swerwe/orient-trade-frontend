import { useState } from 'react';
import React from 'react';
import './Form.scss';
import { TextInput } from '@gravity-ui/uikit';
export const Form: React.FC = () => {
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);
  function onClick() {
    console.log(isNameValid ? {} : { validationState: "invalid" })
    if (name === "") {
      setIsNameValid(false);
    }
    if (number === "") {
      setIsNumberValid(false);
    }
    if (number && name) {
      setIsSent(true);
      fetch("/api/request", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          number: number
        })
      })
    }
  }
  function onUpdateName(val: string) {
    setName(val);
    if (val !== "") {
      setIsNameValid(true);
    }
  }
  function onUpdateNumber(val: string) {
    setNumber(val);
    if (val !== "") {
      setIsNumberValid(true);
    }

  }
  return (
    <div>
      {!isSent ?
        <div className="Form">
          <TextInput onUpdate={onUpdateName} placeholder='Имя' className='input' size='xl' errorMessage="Введите Имя..." pin="brick-brick" {...(isNameValid ? {} : { validationState: "invalid" })} />
          <TextInput onUpdate={onUpdateNumber} placeholder='Номер телефона' className='input' errorMessage="Введите Номер телефона..." size='xl' pin="brick-brick"  {...(isNumberValid ? {} : { validationState: "invalid" })} />
          <button className='button' onClick={onClick}>Отправить</button>
        </div>
        :
        <div className='sent'>
          <p>Спасибо! Данные успешно отправлены.</p>
        </div>
      }

    </div>
  );
};
