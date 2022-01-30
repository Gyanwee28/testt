import Card from '../ui/Card';
import {useRef,useState} from 'react';
import classes from './Form.module.css';
import TextEditor from '../textEditor/TextEditor';
import EditTest from './EditTest';
import { convertFromRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

const axios = require('axios');
function Form(){
    const [content,setContent]=useState()
    const titleInputRef = useRef();
    const descriptionRef = useRef();



   function onContentStateChange (contentState)  {
    setContent(contentState.blocks[0].text);
  }

    function submitHandler(event){
       
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        // const enteredDescription=descriptionRef.current.value;
        const noteData={
            title: enteredTitle,
            body:content,
        };
        console.log({noteData});
        axios.post('http://localhost:8080/api/v1/StickyNotes', noteData)

          .then(function (response) {

            console.log(response);

          })

          .catch(function (error) {

            console.log(error);

          });
    }
    
    return (<Card>
        
        <form className={classes.form} onSubmit={submitHandler}>
            <div className ={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className ={classes.control}>
                <label htmlFor='description'>Description</label>
                {/* <textarea id='description' ref={descriptionRef}></textarea> */}
                <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={onContentStateChange}
        />
            </div>
            {/* <div>
                <label htmlFor='description'>Description</label>
                <TextEditor/>
            </div> */}
            <div className={classes.actions}>
                <button>Save</button>
            </div>
        </form>
        {/* <div>
                <TextEditor/>
            </div> */}
    </Card>);
};

export default Form;