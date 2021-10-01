import React, {useState} from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        //console.log("handleUpClick..!!");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        //console.log("handleLowClick..!!");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        setText('')
    }

    const handleOnChange = (event) => {
        //console.log("handleOnChange..!!");
        setText(event.target.value);
    }

    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <>
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">ex textarea</label> */}
                <textarea className="form-control" id="myBox" 
                rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            {/* &nbsp;&nbsp;&nbsp; */}
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
