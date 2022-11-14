import React from "react";
const Fibonacci = () => {
  //state, functions go here
  function fibseq() {
    const arr = [0, 1];

    let input = document.getElementById("fibnumb");
    let val = input.value;
    let inputDisplay = document.getElementById("inputDisplay");

    for (var i = 0; i < val; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    document.getElementById("result").innerHTML = arr[val - 1];
    console.log(arr);
    console.log(arr[val - 1]);
    console.log(inputDisplay);
    if (isNaN(val)) {
      alert("That is not a number you doofus!");
    } else {
      if (val > 100 || val < 1) {
        alert("whoa there, thats not in our range bucko");
      }
    }

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
      <div id="result"></div>
      <input id="fibnumb" placeHolder="Enter Number Here"></input>
      <button onClick={fibseq}>Run</button>
    </div>
  );
};
export default Fibonacci;
