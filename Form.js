import Card from '../ui/Card';
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import {useRef} from 'react';
import classes from './Form.module.css'
function Form(){
    const titleInputRef = useRef();
    const descriptionRef = useRef();
    function submitHandler(event){
       
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        const enteredDescription=descriptionRef.current.value;
        const noteData={
            title: enteredTitle,
            description:enteredDescription,
        };
        
        console.log(noteData);
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
                id='description' ref={descriptionRef}
                init={{
                    height: 500,
                    menubar: false
                     }}
                     />
            </div>
            <div className={classes.actions}>
                <button>Save</button>
            </div>
        </form>
    </Card>);
};

export default Form;