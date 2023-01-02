import "./Fib2.css";
import React, { useState } from "react";
import Statement from "./Statement";
import spiral from "../spiral.png";
// console.log(spiral);

const Fib2 = () => {
  const [result, setResult] = useState(null);
  const [term, setTerm] = useState(null);
  const [error, setError] = useState(null);

  // const [inpt, setInpt] = useState(null);
  const checkKey = (e) => {
    if (e.keyCode === 13) {
      checkInput();
    }
  };

  // check the input to determine validity

  const checkInput = () => {
    const inputValue = document.getElementById("inputValue").value;

    setTerm(inputValue);

    if (!isNaN(inputValue) && inputValue > 0 && inputValue <= 100) {
      // error is set to null only when input is valid

      setError(null);

      getNumber(parseInt(inputValue));
    } else if (inputValue > 100) {
      setResult(null);
      setError("Thats too high!");
    } else {
      setResult(null);
      setError("Invalid Input");
    }
    console.log("whos a faggot now eh?");
    // console.log("checkInputRan");
  };

  const dontE = (e) => {
    if (e.keyCode === 69) {
      e.preventDefault();
    }
  };

  const ordinal = (ord) => {
    const ordinalRules = new Intl.PluralRules("en", {
      type: "ordinal",
    });

    const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
    };

    const suffix = suffixes[ordinalRules.select(ord)];

    console.log(ord);
    return ord + suffix;
  };

  // get the nth number of the fibonacci sequence

  const getNumber = (num) => {
    const arr = [0, 1];

    // fibonacci formula

    for (var i = 0; i < num; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }

    /*for (var i = 0; i < num; i++) {
       if (num < 1)
       return num - 1  
    }*/

    setResult(arr[num - 1]);
  };

  const getSentence = () => {
    return `${fun(result)} is the ${ordinal(
      term
    )} number in the fibonacci sequence
    `;

    //buttons
  };
  //  console.log("Example to add comma to number");

  function fun(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getContents = () => {
    if (result === null) {
      return <div className="error">{error}</div>;
    } else {
      return (
        <div className="result">
          <p>{getSentence()}</p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="bos">
        <div className="spiralContainer">
          <img className="spiral" src={spiral} alt="spiral" />
        </div>

        <div className="contents">
          <div className="enterNumber">Enter a number 1-100</div>
          <div className="enterNumber">
            and the term at that position in the fibonacci sequence will appear
            below!
          </div>

          <div className="inputContainer">
            <input
              type="number"
              // onBlur={checkInput}

              onChange={checkInput}
              onKeyUp={checkKey}
              onKeyDown={dontE}
              id="inputValue"
              placholder="Enter number here..."
              className="inputBox"
            />
          </div>

          <div className="outputContainer">{getContents()}</div>
        </div>
      </div>
      <Statement />
    </div>
  );
};

export default Fib2;
