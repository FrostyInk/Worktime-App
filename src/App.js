import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firebase from "firebase";
import Config from "./resources/data/Config";

import Header from "./resources/components/Header";
import HomeContent from "./resources/components/HomeContent";
import Footer from "./resources/components/Footer";
import WorkPlaces from "./resources/components/WorkPlaces";
import WorkPlace from "./resources/components/WorkPlace";
import Week from "./resources/components/Week";

function App() {
  const [workers, SetWorkers] = useState([]);
  const [title, SetTitle] = useState([]);
  const [showPopup, SetShowPopUp] = useState(false);
  const [toDelete, SetToDelete] = useState({});

  const backup = "/backup";
  const testBuild = "/test";
  const releaseBuild = "/workers";

  const currentBuild = releaseBuild;

  useEffect(() => {
    if (workers.length > 0) {
      Save(currentBuild);
    }
  }, [workers]);

  useEffect(() => {
    Firebase.initializeApp(Config);
    Load(currentBuild);
  }, []);

  function SaveTestBuildToProduction() {}

  function Save(build) {
    SortPlaces(workers);
    Firebase.database()
      .ref(build)
      .set(workers)
      .then(data => console.log("Success"))
      .catch(err => console.error(err));
    // const saveData = JSON.stringify(workers);
    // window.localStorage.setItem(saveFileName, saveData);
    console.log("Saving to firebase!");
  }

  function Load(build) {
    Firebase.database()
      .ref(build)
      .once("value", function(snapshot) {
        if (snapshot.val() !== null) {
          SetWorkers(
            snapshot.val().sort((a, b) => a.name.localeCompare(b.name))
          );
        } else {
          console.log("Data is null");
        }
      });
    // const loaded = window.localStorage.getItem(saveFileName);
    // const parsed = JSON.parse(loaded);
    // if (parsed) {
    //   SetWorkers(parsed);
    //console.log("Loading users...");
  }

  function CreateBackup() {
    Firebase.database()
      .ref(backup)
      .set(workers)
      .then(data => console.log("Success"))
      .catch(err => console.error(err));
    // const saveData = JSON.stringify(workers);
    // window.localStorage.setItem(saveFileName, saveData);
    console.log("Saving backup to firebase!");
  }

  function SortPlaces(workers) {
    workers.forEach(w => {
      w.places.sort((a, b) => a.name.localeCompare(b.name));
    });
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
      type: "worker",
      name: cleaned,
      places: []
    };

    SetWorkers([newWorker, ...workers]);
  }

  function AddPlaceCallback(place, worker) {
    const cleaned = TitleCase(place);
    const newPlace = {
      name: cleaned,
      type: "place",
      weeks: [],
      oldweeks: []
    };

    const t = {
      ...worker,
      places: typeof worker.places !== "undefined" ? worker.places : []
    };

    t.places.unshift(newPlace);

    SetWorkers(workers.map(w => (w.name === t.name ? t : w)));
  }

  function AddWeekCallback(week, place, worker) {
    const cleaned = TitleCase(week);
    const newWeek = {
      name: cleaned,
      type: "week",
      days: [
        { Maanantai: 0 },
        { Tiistai: 0 },
        { Keskiviikko: 0 },
        { Torstai: 0 },
        { Perjantai: 0 },
        { Lauantai: 0 },
        { Sunnuntai: 0 }
      ]
    };

    const t = {
      id: worker.id,
      name: worker.name,
      places: worker.places.map(p =>
        p.name === place.name
          ? {
              name: p.name,
              weeks:
                typeof p.weeks !== "undefined"
                  ? [newWeek, ...p.weeks]
                  : [newWeek],
              oldweeks: typeof p.oldweeks !== "undefined" ? [...p.oldweeks] : []
            }
          : p
      )
    };

    SetWorkers(workers.map(w => (w.name === t.name ? t : w)));
  }

  function SetWeek(worker, place, oldWeek, newWeek) {
    const t = {
      id: worker.id,
      name: worker.name,
      places: worker.places.map(p =>
        p.name === place.name
          ? {
              name: p.name,
              weeks: p.weeks.map(w => (w.name === newWeek.name ? newWeek : w)),
              oldweeks: typeof p.oldweeks !== "undefined" ? p.oldweeks : []
            }
          : p
      )
    };

    SetWorkers(workers.map(w => (w.name === t.name ? t : w)));
  }

  function empty() {}

  function ArchiveWeek(worker, place, week) {
    const t = {
      id: worker.id,
      name: worker.name,
      places: worker.places.map(p =>
        p.name === place.name
          ? {
              name: p.name,
              weeks: p.weeks.filter(w => w.name !== week.name),
              oldweeks:
                typeof p.oldweeks !== "undefined"
                  ? [
                      { name: week.name, type: "oldweek", days: week.days },
                      ...p.oldweeks
                    ]
                  : [{ name: week.name, type: "oldweek", days: week.days }]
            }
          : p
      )
    };

    SetWorkers(workers.map(w => (w.name === t.name ? t : w)));
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

  function DeleteWorker(data) {
    SetWorkers(workers.filter(w => w.name !== data.toDelete.name));
    SetShowPopUp(false);
  }

  function DeletePlace(data) {
    SetWorkers(
      workers.map(w => {
        if (w.name === data.user.name) {
          w.places = w.places.filter(p => p.name !== data.toDelete.name);
        }

        return w;
      })
    );

    SetShowPopUp(false);
  }

  function DeleteWeek(data) {
    data.toDelete.type === "week"
      ? SetWorkers(
          workers.map(w => {
            if (w.name === data.user.name) {
              w.places.map(p => {
                if (p.name === data.place.name) {
                  p.weeks = p.weeks.filter(v => v.name !== data.toDelete.name);
                }
              });
            }

            return w;
          })
        )
      : SetWorkers(
          workers.map(w => {
            if (w.name === data.user.name) {
              w.places.map(p => {
                if (p.name === data.place.name) {
                  p.oldweeks = p.oldweeks.filter(
                    v => v.name !== data.toDelete.name
                  );
                }
              });
            }

            return w;
          })
        );

    SetShowPopUp(false);
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
                showPopUp={showPopup}
                SetShowPopUp={SetShowPopUp}
                toDelete={toDelete}
                SetToDelete={SetToDelete}
                DeleteWorker={DeleteWorker}
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
                showPopUp={showPopup}
                SetShowPopUp={SetShowPopUp}
                toDelete={toDelete}
                SetToDelete={SetToDelete}
                DeletePlace={DeletePlace}
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
                ArchiveWeek={ArchiveWeek}
                SetTitle={Title}
                GetWorkerById={GetWorkerById}
                GetWorkplaceFrom={GetWorkplaceFrom}
                showPopUp={showPopup}
                SetShowPopUp={SetShowPopUp}
                toDelete={toDelete}
                SetToDelete={SetToDelete}
                DeleteWorker={DeleteWorker}
                DeleteWeek={DeleteWeek}
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
      </div>
      <Route
        render={props => (
          <Footer
            {...props}
            CreateBackup={CreateBackup}
            build={currentBuild}
            workers={workers}
          />
        )}
      />
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
