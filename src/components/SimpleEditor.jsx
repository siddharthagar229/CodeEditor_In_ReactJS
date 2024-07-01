import React, { useRef, useEffect, useState } from 'react';     // importing   the required react hooks 
import Prism from 'prismjs';       //importing Prism fron prismjs
import 'prismjs/themes/prism.css';    // importing prism css file for adding Prism functionality
import './SimpleEditor.css';         //importing CSS file for this component

const SimpleEditor = () => {


  const [userInput, setUserInput] = useState("");     // useState for setting the user input 
  const textareaRef = useRef(null);                  // useRef is basically used for directly accessing DOM  and  focusing on  input field upon a component mounting
  const codeRef = useRef(null);

  const handleChange = (event) => {              //function for setting the input through user using setUserInput
    setUserInput(event.target.value);
  };

  useEffect(() => {               // useEffect executes when userInput changes  as userInput is mentioned in dependency array
    Prism.highlightElement(codeRef.current);

  }, [userInput]);

  return (
    <div                                        //       the main container div
      className="main-container ">


      <textarea               //    for taking the user input textarea is used

        ref={textareaRef}       // for directly changing the DOM value 
        value={userInput}     //  the value that the user is inputting 
        onChange={handleChange}   // onchange function is used for handling the changing user input value
        spellCheck="false"    // basically used for checking the spelling 
        className="code-input-container"
        placeholder='Input your code here ....'  // used for giving user the  idea the type of value user has to input
      >

      </textarea>

      <pre                                // text in a <pre> element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. 
        className="code-output-container"

      >
        <code            //  code tag is used to define a piece of computer code, the content inside this tag is displayed in the browser's default monospace font.
          ref={codeRef} className="language-javascript">
          {userInput}
        </code>
      </pre>



    </div>
  );
};

export default SimpleEditor;







