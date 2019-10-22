import React from "react";
import { Link } from "react-router-dom";
import Firebase from "firebase";

function Footer(props) {
  function HandleClickBack(e) {
    if (e.target.name === "back") {
      props.history.goBack();
    } else {
      props.CreateBackup();
      Firebase.database()
        .ref(props.currentBuild)
        .remove();
      window.location.reload();
    }
  }

  function CalcTotalWeek(week) {
    let sum = 0;
    for (let day in week.days) {
      sum = sum + parseFloat(Object.values(week.days[day])[0]);
    }

    return sum;
  }

  function CalcTotalAllActiveWeeks(worker) {
    let sum = 0;
    if (typeof worker.places !== "undefined") {
      worker.places.forEach(place => {
        sum = sum + CalcTotal(place);
      });
    }

    return sum;
  }

  function CalcTotal(place) {
    if (typeof place.weeks !== "undefined") {
      let sum = 0;
      place.weeks.forEach(week => {
        sum = sum + CalcTotalWeek(week);
      });
      // sum.toFixed(1)
      return sum;
    }

    return 0;
  }

  // Linebreak  %0D%0A
  // space      %20
  //

  function FormatBody() {
    let body =
      "-------------------------------- START TUNNIT --------------------------------\n";

    props.workers.forEach(w => {
      body = body.concat(CreateTable(w));
      body = body.concat("\n\nKaikki Yht: " + CalcTotalAllActiveWeeks(w));
    });
    body = body.concat(
      "\n\n\n\n-------------------------------- END TUNNIT --------------------------------"
    );
    return body;
  }

  function CreateTable(worker) {
    let table = "\n\n\n\n" + worker.name + "\n";
    table = table.concat("\t\t\t\t\tMA\tTI\tKE\tTO\tPE\tLA\tSU\tYHT");
    worker.places.forEach(p => {
      if (typeof p === undefined) return;
      if (p.name.length > 15) {
        table = table.concat("\f" + p.name + "\t\t\t");
      } else if (p.name.length < 5) {
        table = table.concat("\f" + p.name + "\t\t\t\t\t");
      } else {
        table = table.concat("\f" + p.name + "\t\t\t\t");
      }

      if (typeof p.weeks === "undefined") {
        table = table.concat("Ei tunteja" + "\t");
        return;
      }
      p.weeks.forEach(w => {
        if (typeof w !== "undefined") {
          w.days.forEach(d => {
            table = table.concat(Object.values(d)[0] + "\t");
          });
          table = table.concat(CalcTotalWeek(w) + "\t\t" + w.name);
        }
      });
    });

    return table;
  }

  function HandleClickEmail(e) {
    console.log("Opening mail...");

    const emailTo = "Helin.pool@gmail.com";
    const emailSubject = "Tunnit";
    const emailBody = FormatBody();

    const newUrl =
      "mailto:" +
      encodeURIComponent(emailTo) +
      "?subject=" +
      encodeURIComponent(emailSubject) +
      "&body=" +
      encodeURIComponent(emailBody);
    // "https://mail.google.com/mail?view=cm&tf=0" +
    // (emailTo ? "&to=" + emailTo : "") +
    // (emailSubject ? "&su=" + emailSubject : "") +
    // (emailBody ? "&body=" + emailBody : "");

    console.log(emailBody);
    window.open(newUrl);
  }

  return (
    <div className="Footer">
      {props.location.pathname !== "/" ? (
        <button className="BackButton" name="back" onClick={HandleClickBack}>
          Back
        </button>
      ) : (
        ""
      )}

      <button className="MailButton" onClick={HandleClickEmail}>
        Mail
      </button>
    </div>
  );
}

export default Footer;
