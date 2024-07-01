import React, { useState } from 'react';       // importing   the required react hooks 
import Editor from 'react-simple-code-editor';      // importing the Editor  form react-simple-code-editor
import Prism from 'prismjs';        //importing Prism fron prismjs
import 'prismjs/themes/prism.css';       // importing prism css file for adding Prism functionality
import './ReactEditor.css';         //importing CSS file for this component



const ReactEditor = () => {
    const [code, setCode] = useState('');     //    using useState hook for setting code value on changing by user  

    const handleChange = (newInput) => {    //function for setting the input through user using setCode 
        setCode(newInput);
    };

    return (
        <div className="main-code-editor-div">
            <Editor               //the builtin Editor provided by react
                placeholder='Write your code here...'              // used for giving user the  idea the type of value user has to input     
                value={code}              //  the value that the user is inputting 
                onValueChange={handleChange}              // onValuechange function is used for handling the changing user input value
                highlight={(code) => Prism.highlight(code, Prism.languages.javascript, 'javascript')}   //  functionality for highlighting the code syntax through PrismJS  
                padding={10}
                style={{           //  style for code input through user
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,

                }}
            />
        </div>
    );
};

export default ReactEditor;