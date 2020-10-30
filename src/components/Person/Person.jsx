import React from "react";
import s from "./Person.module.css";
import data from "./data.json";
console.log(data);

const Person = () => {
  return (
    <div>
      <h1>Persons</h1>
      {data.map((el) => {
        return (
          <div className={s.item} key={el._id}>
            <h3>{el.name.first}</h3>
            <h4>{el.name.last}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Person;
