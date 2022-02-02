import Card from '../ui/Card';
import {useRef} from 'react';
import {useState} from 'react';
import classes from './Form.module.css';
import TextEditor from '../textEditor/TextEditor';
import React from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useHistory } from 'react-router';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { Editor } from "@tinymce/tinymce-react";
const axios = require('axios');
function Form(){
    const history = useHistory();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const [content,setContent]=useState()

    function onContentStateChange (contentState)  {
        setContent(contentState.blocks[0].text);
      }
    // let editorState = EditorState.createEmpty();
    // const [description, setDescription] = useState(editorState);
    // const onEditorStateChange = (editorState) => {
    //   setDescription(editorState);
    // }
    // console.log(description.value)
    function submitHandler(event){
       
        event.preventDefault();
        // ----------------------------
        const data = currentImg.imagePreviewurl.split(',')[1];
        var img = [];
        if(data!==undefined)
        {
        var raw = window.atob(data);
        var rawlength=raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawlength));

        for(var i=0;i<rawlength;i++)
        {
            array[i]=raw.charCodeAt(i);
        }
        

        for(var i=0;i<rawlength;i++)
        {
            img.push((array[i]));
        }
    }
        

     //--------------------------------

        const enteredTitle = titleRef.current.value;
        // const enteredDescription=descriptionRef.current.value;
        const noteData={
            title: enteredTitle,
            body:content,
            userName:window.localStorage.getItem('userName'),
            //----------
            image:img,
            //------------
        };
        // console.log({noteData});
        axios.post('http://localhost:8080/api/v1/StickyNotes', noteData)

          .then(function (response) {
            
            history.push('/notes');
            console.log(response);

          })

          .catch(function (error) {

            console.log(error);

          });
    }
  //------------------------------------------------------------  
    const [currentImg,setcurrentImg]=useState({
        file:'',
        imagePreviewurl:''
    })
     function onimageChange(e){
         let reader = new FileReader();
         let file = e.target.files[0];
         const maxAllowedSize = 2000000;
        if (file.size > maxAllowedSize) {
            // Here you can ask your users to load correct file
            alert("size limit should be less than 2MB")
             file.value = ''
             
        }
        else
        {
        reader.onloadend=()=>{
            setcurrentImg({
                file:file,
                imagePreviewurl:reader.result
            });
        }
        }
        
        reader.readAsDataURL(file);

        }
    //------------------------------------------------------------   
     
    
    return (<Card>
        
        <form className={classes.form} onSubmit={submitHandler}>
            <div className ={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type="text" required id="title" ref={titleRef}/>
            </div>
            <div className ={classes.control}>
                <label htmlFor='description'>Description</label>
                {/* <textarea id='description' ref={descriptionRef}></textarea> */}
            
                {/* <Editor
                id='description' ref={descriptionRef}
                init={{
                    height: 200,
                    menubar: false
                     }}
                     /> */}
                <Editor  onContentStateChange={onContentStateChange} toolbar={{
        options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', ],
        inline: { inDropdown: false, options: ['bold', 'italic', 'underline'] },
        list: { inDropdown: true },
        textAlign: { inDropdown: false,options:[] },
        link: { inDropdown: false,options:[] },
    }} />
               <div>
               <input type="file" className="form-control"  name="file" onChange={onimageChange} /></div> 

             </div>        
            <div className={classes.actions}>
                <button>Save</button>
            </div>
        </form>
    </Card>);
};

export default Form;
