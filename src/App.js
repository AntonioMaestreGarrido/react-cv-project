import React, { useState } from "react";
import "./App.css";
import { ExperienceContainer } from "./components/ExperienceContainer";
import { ExperienceItem } from "./components/ExperienceItem";
import { Experience } from "./components/Experience";
import { InputModal } from "./components/ImputText";
import { NameAndProfile } from "./components/NameAndProfile";
import { PersonalData } from "./components/PersonalData";
import { Education } from "./components/Education";
import { Abilities } from "./components/Abilities";

//<InputModal data={mockdata} />

function App() {
  const [showModal, setShowModal] = useState(0);

  const handleModal = (modal) => {
    setShowModal(modal);
  };

  return (
    <div className="App">
      <PersonalData handle={handleModal} />
      <NameAndProfile handle={handleModal} />
      <Experience handle={handleModal} />
      <Education handle={handleModal} />
      <Abilities handle={handleModal} />
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
