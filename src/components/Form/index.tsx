import React, { useState } from "react";
import Input from "./Input";
import List from './List/index';
import style from './Form.module.scss';

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [height, setHeight] = useState("");
  const [form, setForm] = useState(false);

  const sendForm = (evento: React.FormEvent) => {
    evento.preventDefault();
    if (name && age && occupation && height !== '') {
      setForm(true);
    }
  }
  return (
    <>
      <div className={style.form__container}>
        <h1 className={style.form__title}>Test Form</h1>
        <form className={style.form} onSubmit={sendForm}>
          <Input
            label="Name"
            type="text"
            placeholder="Type your name"
            option="name"
            setName={setName}
          />

          <Input
            label="Age"
            type="text"
            placeholder="Type your age"
            option="age"
            setAge={setAge}
          />

          <Input
            label="Occupation"
            type="text"
            placeholder="Type your occupation"
            option="occupation"
            setOccupation={setOccupation}
          />

          <Input
            label="Height"
            type="text"
            placeholder="Type your height"
            option="height"
            setHeight={setHeight}
          />

          <button className={style.form__submitButton} type="submit">Submit Form</button>
        </form>
        {form ? <List name={name} age={age} occupation={occupation} height={height} /> : null}
      </div>
    </>
  )
}

export default Form;
