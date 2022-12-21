import React from "react";
// import axios from "axios";

const Fibonacci = () => {
  // state, functions go here
  function fibseq() {
    const arr = [0, 1];

    let input = document.getElementById("fibnumb");
    let val = input.value;
    let inputDisplay = document.getElementById("inputDisplay");
    // fibonacci formula
    for (var i = 0; i < val; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    document.getElementById("result").innerHTML = arr[val - 1];
    console.log(arr);
    console.log(arr[val - 1]);
    console.log(inputDisplay);
    // pop up alert
    if (isNaN(val)) {
      alert("That aint a number!");
    } else {
      if (val > 100 || val < 1) {
        alert("That aint in range!");
      }
    }
    // suffixes
    const ordinal = (inputDisplay) => {
      const ordinalRules = new Intl.PluralRules("en", {
        type: "ordinal",
      });
      const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th",
      };
      const suffix = suffixes[ordinalRules.select(inputDisplay)];
      return inputDisplay + suffix;
    };

    document.getElementById("inputDisplay").innerHTML = ordinal(val);
    console.log(ordinal(inputDisplay));
  }

  return (
    <div>
      <div className="sentence">
        <span name="result" id="result">
          &nbsp;_-_-_-_
        </span>
        <>&nbsp;is the </>
        <div id="inputDisplay">&nbsp;???</div>
        <div>&nbsp;number in the fibonacci sequence</div>
      </div>
      <input id="fibnumb" placeHolder="Enter Number 1-100 Here"></input>
      <button onClick={fibseq}>Run</button>
    </div>
  );
};
export default Fibonacci;
