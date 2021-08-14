import './Email.css';
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Email = () => {
  // CONTOH FUNGSI
  // const generator = () => {
  //   console.log("Ini fake email generator");
  // }
  const [fakeEmail, setFakeEmail] = useState("");

  const handleClipBoardClick = () => {
    alert('Fake email copied to clipboard');
    console.log("copied");
  }

  const updateEmail = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const display = this.responseText.slice(2,this.responseText.length-2);
        setFakeEmail(display);
      }
    };
    xhttp.open("GET", "https://www.1secmail.com/api/v1/?action=genRandomMailbox", true);
    xhttp.send();
  }

  return (
    <div className="email">
      <h1>Everything in your hands.</h1>
      <p>Generate usable, temporary e-mail for maximum privacy and security.</p>
      <div className="email-box">
        <span className="email-txt">{fakeEmail}</span>
        <CopyToClipboard text={fakeEmail} onCopy={handleClipBoardClick}>
          <button className="copy-btn"><img className="copy-icon" src="https://img.icons8.com/material-outlined/24/000000/copy.png"/></button>
        </CopyToClipboard>
      </div>
      <button className="generate-btn" onClick={updateEmail}>
        Generate E-mail
      </button>
    </div>
  );
}
 
export default Email;