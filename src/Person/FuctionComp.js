import React, { useState } from 'react';
import Person from "./Person";
import PersonTemp from './PersonTemp';

const FuctionComp = () => {
  const [personState,SetPersonState] = useState(
    {
        person: [
          { name: "Arif", age: 23 },
          { name: "Ikram", age: 20 }
        ],
      }); 
  const handler = () => {
    SetPersonState({
      person: [
        { name: "Arif Rana", age: 24 },
        { name: "Asif", age: 25 }
      ],
    });
  };
  return (
      <div>
          <Person name={personState.person[0].name} age={personState.person[0].age}/>
          <Person name={personState.person[1].name} age={personState.person[1].age}/>
          <button onClick= {handler}>Click</button>
          <PersonTemp click = {handler} name={personState.person[0].name} age={personState.person[0].age} />
      </div>
  )
  
}

export default FuctionComp;
