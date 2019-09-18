import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./resources/components/Header";
import HomeContent from "./resources/components/HomeContent";
import Footer from "./resources/components/Footer";
import WorkPlaces from "./resources/components/WorkPlaces";
import WorkPlace from "./resources/components/WorkPlace";
import Week from "./resources/components/Week";

function App() {
  const [workers, SetWorkers] = useState([]);

  useEffect(() => {});

  function AddWorkerCallback(worker) {
    if (!worker) return;
    for (const item in workers) {
      if (workers[item].name === worker) {
        return;
      }
    }
    const cleaned = TitleCase(worker);
    const id = UniqueID();
    const newWorker = {
      id: id,
      name: cleaned,
      places: []
    };

    SetWorkers([...workers, newWorker]);
  }

  function AddPlaceCallback(place, worker) {
    const cleaned = TitleCase(place);
    const newPlace = {
      name: cleaned,
      weeks: []
    };

    workers.splice(workers.indexOf(worker), 1);
    worker.places = [...worker.places, newPlace];
    SetWorkers([...workers, worker]);
  }

  function AddWeekCallback(week, place, worker) {
    const cleaned = TitleCase(week);
    const newWeek = {
      name: cleaned,
      days: {
        Maanantai: 0,
        Tiistai: 0,
        Keskiviikko: 0,
        Torstai: 0,
        Perjantai: 0,
        Lauantai: 0,
        Sunnuntai: 0
      }
    };

    place.weeks.push(newWeek);
    workers.splice(workers.indexOf(worker), 1);
    SetWorkers([...workers, worker]);
  }

  return (
    <Router basename="/Worktime-App">
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <HomeContent
                {...props}
                workers={workers}
                AddWorkerCallback={AddWorkerCallback}
              />
            )}
          />
          <Route
            path="/:id"
            exact
            render={props => (
              <WorkPlaces {...props} AddPlaceCallback={AddPlaceCallback} />
            )}
          />
          <Route
            path="/:id/:workplace"
            exact
            render={props => (
              <WorkPlace {...props} AddWeekCallback={AddWeekCallback} />
            )}
          />
          />
          <Route
            path="/:id/:workplace/:week"
            exact
            render={props => <Week {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );

  function UniqueID() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  // Capitalizes every first letter of a word in a string
  function TitleCase(str) {
    let split = str.split(" ");
    let a = [];
    for (let i = 0; i < split.length; i++) {
      let temp = split[i];
      let word = "";
      for (let y = 0; y < temp.length; y++) {
        if (y == 0 && IsAlpha(temp[y])) {
          word += temp[y].toUpperCase();
          continue;
        }

        word += temp[y];
      }

      a.push(word);
    }

    return a.join(" ");
  }

  // Capitalizes first letter of a string
  function CapitalizeFirst(str) {
    // Split the string into an array of strings
    let splittedArray = str.split(" ");
    let a = [];

    // Loop through all the strings in the array
    for (let i = 0; i < splittedArray.length; i++) {
      let currentString = splittedArray[i];

      // If we are currently at the first string of the array (First word of the sentence)
      if (i == 0) {
        // temporary string
        let tempString = "";

        // Get the first letter of the string and capitalize it
        tempString += currentString[i][0].toUpperCase();

        // Loop through the string and
        // add the rest of the letters to tempString
        for (let y = 1; y < currentString.length; y++) {
          tempString += currentString[y];
        }

        // Set our current string with the new (capitalized) string
        currentString = tempString;
      }

      // Add it to the array
      a.push(currentString);
    }

    // Combine the array into one string
    return a.join(" ");
  }

  // Checks if the character is an alphabetic letter (i.e not a number)
  function IsAlpha(char) {
    return char.length === 1 && char.match(/[a-z]/i);
  }
}

export default App;
