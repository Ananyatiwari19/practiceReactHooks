import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
//import data from "./components/accordian/data";
import { useState } from "react";
import BasicCounter from "./practiceUseState/BasicCounter";
import ToggleVisibility from "./practiceUseState/ToggleVisibility";
import ChangeText from "./practiceUseState/ChangeText";
import ToggleColor from "./practiceUseState/ToggleColor";
import IncrementDecrement from "./practiceUseState/IncrementDecrement";
import ToggleSwitch from "./practiceUseState/ToggleSwitch";
import CharacterCounter from "./practiceUseState/CharacterCounter";
import AddItemsToList from "./practiceUseState/AddItemsToList";
import UpdatingDocumentTitle from "./practiceUseEffect/UpdatingDocumentTitle";
import SimpleCounter from "./practiceUseEffect/SimpleCounter";
import AlertOnUpdate from "./practiceUseEffect/AlertOnUpdate";
import FetchDataFromApi from "./practiceUseEffect/FetchDataFromApi";
import FetchData from "./practiceUseEffect/FetchDataFromApi";
import IncrementCounter from "./practiceUseCallback/IncrementCounter";
import ToggleOnOff from "./practiceUseCallback/ToggleOnOff";
import DemoParent1 from "./propsPractice/parentComponent/DemoParent1";
import UserList from "./propsPractice/parentComponent/UserList";
import ClickButton from "./propsPractice/parentComponent/ClickButton";
import DisplayList from "./propsPractice/parentComponent/DisplayList";
import data from "./propsPractice/parentComponent/data";
import StatusMessageRendering from "./propsPractice/parentComponent/StatusMessageRendering";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={10} /> */}

      {/* <BasicCounter /> */}

      {/* <ToggleVisibility text="abcdefghi" /> */}

      {/* <ChangeText /> */}

      {/* <ToggleColor /> */}

      {/* <IncrementDecrement /> */}

      {/* <ToggleSwitch /> */}

      {/* <CharacterCounter /> */}

      {/* <AddItemsToList /> */}

      {/* <ConsoleLogOnMount /> */}

      {/* <UpdatingDocumentTitle /> */}

      {/* <SimpleCounter /> */}

      {/* <AlertOnUpdate /> */}

      {/* <FetchDataFromApi /> */}

      {/* <IncrementCounter /> */}

      {/* <ToggleOnOff /> */}

      {/* <DemoParent1 /> */}

      {/* <UserList /> */}

      {/* <ClickButton /> */}

      {/* <DisplayList data={data} /> */}

      <StatusMessageRendering />
    </div>
  );
}

export default App;
