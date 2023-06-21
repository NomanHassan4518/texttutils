import React, { useState } from 'react'

export default function TextForm(props) {

    const handkeUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    
    const handkeLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handkeClearClick = () =>{
        let newText ="";
        setText(newText);
    }

    
    const handkeReverseClick = () =>{
        let splitWord = text.split('');
        let reverseWord = splitWord.reverse("");
        let joinWord = reverseWord.join("");

let newText = joinWord;
        setText(newText); 
    }

    const handkeCopy= () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text , setText] = useState('');

    const handleClick = (event) =>{

        setText(event.target.value);
    }
  return (
   <>
   <div className="container" style={{ color: props.mode==='light'? 'black':'white'}} >
   <h1>{props.heading}</h1>
      <div className="container">
        <textarea name="" id='myBox' value={text} onChange={handleClick} cols="150" rows="8" style={{ backgroundColor: props.mode==='light'? 'white':'#06278c',  color: props.mode==='light'? 'black':'white'}} ></textarea>
        {/* Ternary Operators  */}
      </div>

      <div className="container my-3">

        <button className="btn btn-primary mx-2" onClick={handkeUpClick}>Convert to UpperCase</button>

        <button className="btn btn-success mx-4" onClick={handkeLoClick}>Convert to LoweCase</button>

        <button className="btn btn-warning mx-4" onClick={handkeReverseClick}>Reverse Text</button>

        <button className="btn btn-dark mx-4" onClick={handkeClearClick}>Clear Text</button>



<button className="btn btn-dark  " onClick={handkeCopy}>Copy Text</button>

    <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
{/* </div> */}

      </div>

      <div className="container">
        <h1>Your text summary</h1>

        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.08 * text.split('').length} Minutes Time  </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview here."}</p>
      </div>

      </div>
      </>
  )
}
