import { useState } from 'react';
import style from '../../Form/Form.module.scss';

interface FormProps {
  name?: string,
  age?: string,
  occupation?: string,
  label: string,
  type: string,
  placeholder: string,
  setName?: React.Dispatch<React.SetStateAction<any>>
  setAge?: React.Dispatch<React.SetStateAction<any>>
  setOccupation?: React.Dispatch<React.SetStateAction<any>>
  setHeight?: React.Dispatch<React.SetStateAction<any>>
  option: string
}

export default function Input({ name, age, label, type, placeholder, occupation, setName, setAge, setOccupation, setHeight, option }: FormProps) {
  return (
    <>
      <div className={style.form__input}>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={e => {
            switch (option) {
              case "name":
                setName?.(e.target.value);
                break;

              case "age":
                setAge?.(e.target.value);
                break;

              case "occupation":
                setOccupation?.(e.target.value)
                break;

              case "height":
                setHeight?.(e.target.value)
                break;
            }
          }}
        />
      </div>

    </>
  )
}