import './Password.css';
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Password = () => {
  const [lenValue, setLenValue] = useState("20");
  const [uppercaseChecked, setUppercaseChecked] = useState(true);
  const [lowercaseChecked, setLowercaseChecked] = useState(true);
  const [symbolChecked, setSymbolChecked] = useState(true);
  const [numberChecked, setNumberChecked] = useState(true);
  const [Pass, setPass] = useState("");

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  const getRandomNumber = () => {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  const randomFunc = {
    lowercaseChecked: getRandomLower,
    uppercaseChecked: getRandomUpper,
    numberChecked: getRandomNumber,
    symbolChecked: getRandomSymbol
  }

  const updatePass = () => {
    const changedPass = generatePassword();
    setPass(changedPass);
  }

  const generatePassword = () => {
    let changedPass = "";
    const typesCount = uppercaseChecked + lowercaseChecked + symbolChecked + numberChecked;
    const typesArr = [{uppercaseChecked}, {lowercaseChecked}, {numberChecked}, {symbolChecked}].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
      return "";
    }

    for (let i=0;i<lenValue; i+=typesCount) {
      let tempPass = "";
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        tempPass += randomFunc[funcName]();
      });
      changedPass += tempPass;
    }

    const finalPass = changedPass.slice(0,lenValue);
    return finalPass;
  }

  const handleClipboardClick = (e) => {
    alert('Password copied to clipboard');
  }

  return (
    <div className="password page">
      <h1>Passwordmu di tanganmu.</h1>
      <p>Generate randomized passwords for maximum privacy and security.</p>

      <div className="result-container">
        <span id="result">{Pass}</span>
        <CopyToClipboard text={Pass} onCopy={handleClipboardClick}>
          <img className="icon" src="https://img.icons8.com/material-outlined/24/000000/copy.png" alt="clipboard icon"></img>
        </CopyToClipboard>
      </div>
      <div className="row">
        <div className="column">
          <label className="caption-chkbox">Length</label>
          <input type="number" className="option length" min="4" max="20" value={lenValue} onChange={(e) => setLenValue(e.target.value)} /><br />
          <span className="caption-chkbox">Uppercase</span>
          <input type="checkbox" className="option" onChange={() => setUppercaseChecked(!uppercaseChecked)} checked={uppercaseChecked} />
        </div>
        <div className="column">
          <span className="caption-chkbox">Numbers</span>
          <input type="checkbox" className="option" onChange={() => setNumberChecked(!numberChecked)} checked={numberChecked} /><br />
          <span className="caption-chkbox">Lowercase</span>
          <input type="checkbox" className="option" onChange={() => setLowercaseChecked(!lowercaseChecked)} checked={lowercaseChecked} />
        </div>
        <div className="column">
          <input type="checkbox" className="option" onChange={() => setSymbolChecked(!symbolChecked)} checked={symbolChecked} /> Symbols
        </div>
        <div className="column">
          <button className="generate-button" onClick={updatePass}> Generate<br />Password </button>
        </div>
      </div>
    </div>
  );
}
 
export default Password;