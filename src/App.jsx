import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import "./index.css";
import Nav from "./components/Nav";
import Test from "./components/test";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(""); // To store the number of people

  const handleLocationClick = (value) => {
    setSelectedLocation(value);
  };

  const handlePeopleChange = (value) => {
    setNumberOfPeople(value);
  };

  return (
    <>
      <Nav
        handlePeopleChange={setNumberOfPeople}
        handleLocationClick={setSelectedLocation}
      ></Nav>

      <Card
        numberOfPeople={numberOfPeople}
        selectedLocation={selectedLocation}
      ></Card>
    </>
  );
}

export default App;
