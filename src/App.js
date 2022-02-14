import React, { useState } from "react";
import "./App.css";

import { Experience } from "./components/Experience";
import { InputModal } from "./components/ImputText";
import { NameAndProfile } from "./components/NameAndProfile";
import { PersonalData } from "./components/PersonalData";
import { Education } from "./components/Education";
import { Abilities } from "./components/Abilities";
import { Picture } from "./components/Picture";

//<InputModal data={mockdata} />

function App() {
  const [showModal, setShowModal] = useState(0);

  const handleModal = (modal) => {
    setShowModal(modal);
  };

  return (
    <div className="App">
     <div id ='header'>
        <Picture />
        <NameAndProfile handle={handleModal} />
     </div>
     <div id="body">
        <div id="left">
          <PersonalData handle={handleModal} />
          <Abilities handle={handleModal} />
        </div >
        <div id="right">
          <Education handle={handleModal} />
          <Experience handle={handleModal} />
        </div >
     </div >
      {/*
      <ExperienceItem handle={handleModal} />*/}
      {/*<InputModal data={showModal} modal={handleModal} />*/}
    </div>
  );
}

export default App;
/*  
 <div id="containerTest">
        <button onClick={() => setShowModal(0)}>test modal</button>
        <button onClick={() => setShowModal("personalData")}>test modal</button>
        <button onClick={() => setShowModal("form2")}>test modal</button>
        <button onClick={() => setShowModal("form3")}>test modal</button>
      </div>
*/
