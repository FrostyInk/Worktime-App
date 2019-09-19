import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./resources/components/Header";
import HomeContent from "./resources/components/HomeContent";
import Footer from "./resources/components/Footer";
import WorkPlaces from "./resources/components/WorkPlaces";
import WorkPlace from "./resources/components/WorkPlace";
import Week from "./resources/components/Week";

function App() {
  const saveFileName = "WorkTimeAppData";
  const [workers, SetWorkers] = useState([]);
  const [title, SetTitle] = useState([]);
  let firstLoad = true;

  useEffect(() => {
    if (workers.length > 0) {
      Save();
    }
  }, [workers]);

  useEffect(() => {
    Load();
  }, []);

  function Save() {
    const saveData = JSON.stringify(workers);
    window.localStorage.setItem(saveFileName, saveData);
    console.log("Saving... " + saveData);
  }

  function Load() {
    const loaded = window.localStorage.getItem(saveFileName);
    const parsed = JSON.parse(loaded);
    if (parsed) {
      SetWorkers(parsed);
      console.log("Loading users...");
    }
  }

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

    SetWorkers([newWorker, ...workers]);
  }

  function AddPlaceCallback(place, worker) {
    const cleaned = TitleCase(place);
    const newPlace = {
      name: cleaned,
      weeks: []
    };

    workers.splice(workers.indexOf(worker), 1);
    worker.places = [newPlace, ...worker.places];
    SetWorkers([worker, ...workers]);
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

    place.weeks.unshift(newWeek);
    workers.splice(workers.indexOf(worker), 1);
    SetWorkers([...workers, worker]);
  }

  function SetWeek(worker, place, oldWeek, newWeek) {
    place.weeks.splice(place.weeks.indexOf(oldWeek), 1);
    workers.splice(workers.indexOf(worker), 1);
    place.weeks.unshift(newWeek);
    SetWorkers([...workers, worker]);
  }

  function GetWorkerById(id) {
    for (const item in workers) {
      if (workers[item].id === id) {
        return workers[item];
      }
    }
  }

  function GetWorkplaceFrom(name, w) {
    for (const place in w.places) {
      if (w.places[place].name === name) {
        return w.places[place];
      }
    }
  }

  function Title(title) {
    SetTitle(title);
  }

  return (
    <Router basename="/Worktime-App">
      <div className="App">
        <Header title={title} />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <HomeContent
                {...props}
                workers={workers}
                AddWorkerCallback={AddWorkerCallback}
                SetTitle={Title}
                GetWorkerById={GetWorkerById}
              />
            )}
          />
          <Route
            path="/:id"
            exact
            render={props => (
              <WorkPlaces
                {...props}
                AddPlaceCallback={AddPlaceCallback}
                SetTitle={Title}
                GetWorkerById={GetWorkerById}
              />
            )}
          />
          <Route
            path="/:id/:workplace"
            exact
            render={props => (
              <WorkPlace
                {...props}
                AddWeekCallback={AddWeekCallback}
                SetTitle={Title}
                GetWorkerById={GetWorkerById}
                GetWorkplaceFrom={GetWorkplaceFrom}
              />
            )}
          />
          />
          <Route
            path="/:id/:workplace/:week"
            exact
            render={props => (
              <Week {...props} SetTitle={Title} SetWeek={SetWeek} />
            )}
          />
        </Switch>
        <Route render={props => <Footer {...props} />} />
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
        if (y === 0 && IsAlpha(temp[y])) {
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
      if (i === 0) {
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
