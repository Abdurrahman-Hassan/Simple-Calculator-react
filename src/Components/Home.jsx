import React, { useState, useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { TbSquareRoot } from "react-icons/tb";
import { FaEquals } from "react-icons/fa";
import { evaluate } from "mathjs";

const Home = () => {
  const [displayans, setDisplayans] = useState("");
  const [displayque, setDisplayque] = useState("");
  let len = displayque.length;
  console.log(len);
  /* useEffect(() => {
    setDisplayans(displayque)
  }, [displayque]); */

  function ans() {
    try {
      setDisplayans(evaluate(displayque));
      /* setDisplayque("") */
    } catch (e) {
      setDisplayans("some error");
    }
  }
  console.log(displayans);

  return (
    <div>
      <div className="display">
        <div className="displayans"> {displayans}</div>

        <div className="displayque">{displayque}</div>
      </div>
      <div className="functions">
        <button
          onClick={() => {
            setDisplayque(displayque + "+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + "-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + "*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + "/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + "%");
          }}
        >
          %
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + "!");
          }}
        >
          !
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + "^");
          }}
        >
          ^
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + "sqrt(");
          }}
        >
          <TbSquareRoot />
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + "(");
          }}
        >
          (
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + ")");
          }}
        >
          )
        </button>
      </div>
      <div className="uper-div">
      <div className="numbers">
        <button
          onClick={() => {
            setDisplayque(displayque + 1);
          }}
        >
          1
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + 4);
          }}
        >
          4
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + 7);
          }}
        >
          7
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + ".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            setDisplayque(displayans + "");
          }}
        >
          Ans
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + 2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + 5);
          }}
        >
          5
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + 8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + 0);
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setDisplayque("");
          }}
          onDoubleClick={() => {
            setDisplayans("");
          }}
        >
          C
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque + 3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + 6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setDisplayque(displayque + 9);
          }}
        >
          9
        </button>

        <button
          onClick={() => {
            setDisplayque(displayque.substring(0, len - 1));
          }}
        >
          <FiDelete />
        </button>
        <button onClick={ans}>
          <FaEquals />
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
