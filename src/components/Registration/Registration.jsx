"use client";
import { RegistrationCards } from "./Registration.config";
const Registration = () => {
  return (
    <>
      <div key="reg-header"></div>
      <div key="reg-body">
        <p>Atpakaļ</p>
        <h1>Pievienojies kā ēnotājs vai kā profesionālis vai uzņēmums?</h1>
        <h3>
          Autem sunt ratione asperiores odit nobis consequuntur quo sequi.
        </h3>
        <div key="reg-cards">
          {RegistrationCards.map((item) => (
            <div key={item.link}>
              <p>{item.icon}</p>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <button href={item.link}>Reģistrēties</button>
            </div>
          ))}
        </div>
        <p>
          Esi jau reģistrējies TryWork? <a>Ienākt</a>
        </p>
      </div>
      <div key="reg-footer"></div>
    </>
  );
};

export default Registration;
