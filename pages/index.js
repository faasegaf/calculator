import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {};

  return (
    <div className={styles.container}>
      <form>
        <input className={styles.iput} type="text" value={result} />
      </form>
      <div className={styles.keypad}>
        <button onClick={clear} id={styles.clear}>
          Clear
        </button>
        <button onClick={handleClick} id={styles.backSpace}>
          C
        </button>
        <button name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button onClick={handleClick} id={styles.result}>
          =
        </button>
      </div>
    </div>
  );
}