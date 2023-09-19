import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "Successfully")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "Successfully")

    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "Successfully")
    }

    const handleReverseClick = () => {
        let splitWord = text.split(" ");
        let reverseText = splitWord.reverse(" ");
        let joinText = reverseText.join();
        let newText = joinText;
        setText(newText);
        props.showAlert("Reversed Text", "Successfully")
    }

    const handleCopyClick = () => {
        let text = document.getElementById("text");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text", "Successfully")

    }

    const handleRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "Successfully")
    }

    const handleClick = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="container">
                    <textarea className='textArea'  name="" id='text' value={text} onChange={handleClick} cols="150" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}} ></textarea>
                    {/* Ternary Operators  */}
                </div>


                <div className="container btn1 d-flex flex-md-row flex-column  ">
                    <button className="btn btn-primary mx-2 mt-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-success mx-2 mt-2" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-dark mx-2 mt-2" onClick={handleReverseClick}>Reverse Text</button>
                    <button className="btn btn-warning mx-2 mt-2" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-2 mt-2" onClick={handleCopyClick}>Copy Text</button>
                    <button className="btn btn-primary mx-2 mt-2" onClick={handleRemoveClick}>Remove Extra Spaces</button>
                </div>

                <div className="container my-3" >
                    <h2>Your Text Summary</h2>
                    <p>{text.split(' ').length} Words and {text.length} Characters</p>
                    <p>{0.08 * text.split(' ').length} Minutes Times</p>

                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in textbox to preview here."}</p>
                </div>

            </div>

        </>
    )
}

export default TextForm
