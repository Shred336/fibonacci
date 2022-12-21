import React, { useState, useEffect } from "react";
import spiral from "./spiral.png";
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
    if (result === null) {
      return;
    }
    return `${result} is the ${ordinal(term)} number in the fibonacci sequence
    `;

    //buttons
  };

  // function decrementInpt() {
  //   setInpt((prevInpt) => prevInpt - 1);
  // }
  // function incrementInpt() {
  //   setInpt((prevInpt) => prevInpt + 1);
  // }

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
            {/* <button className="buttons" onClick={decrementInpt}>
              -
            </button> */}

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

            {/* <button className="buttons" onClick={incrementInpt}>
              +
            </button> */}
          </div>

          <div className="result">
            <p>{getSentence()}</p>
          </div>

          <div className="error">{error}</div>
        </div>
      </div>
      <div className="foot">
        <div id="pronounce">Fi·bo·nac·ci </div>
        <span>(sequence or series)</span>
        <div id="noun">noun</div>
        <div id="statement">
          a series of numbers in which each number ( Fibonacci number ) is the
          sum of the two preceding numbers. The simplest example is the series
          1, 1, 2, 3, 5, 8, etc.
          <p>
            The Fibonacci sequence was first discussed in Europe by Leonardo of
            Pisa (whose nickname was Fibonacci) in the early 13th century,
            although the sequence can be traced back to about 200 BCE in Indian
            literature. This sequence has produced a large amount of literature
            and has connections to many branches of mathematics. In the
            Fibonacci sequence, each term is the sum of the two preceding terms.
            So if an is the nth term, we can write a1=a2=1andan=an−1+an−2, for
            n≥3.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fib2;
