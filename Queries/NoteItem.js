import classes from './NoteItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import Card from '../ui/Card';
import { useState } from 'react';
import { useHistory} from "react-router";
import axios from 'axios'
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom';


function NoteItem(props) {
    const history = useHistory();

    // const [copied, setCopied] = useState(false);
    // function copy(id) {
    //     const el = document.createElement("input");
    //     axios.post(`http://localhost:8080/api/v1/StickyNotes/url/${id}`)
    //     .then(function (response) {
    //     //   console.log(response)
        
    //       el.value = response.data;
    //       document.body.appendChild(el);
    //      el.select();
    //      document.execCommand("copy");
    //      document.body.removeChild(el);
         
    //     })
    //     .catch(function (error) {
    //         alert("not found");
    //       console.log(error);
    //     }) 
        
        
        
    //     // setCopied(true);
    // }

    function handleDelete(id) {
        axios.delete(`http://localhost:8080/api/v1/StickyNotes/${id}`)
        .then(() => {
            props.setitemChange(!props.itemChange)
            history.push("/orders")
        })
        .catch((response)=>{
            console.log(response)
        });
    }
    //  const [img,setimg]=useState;
    // let image='data:image/png;base64, '+ props.image;
    // const onClickImg = () =>{
    //     window.localStorage.setItem("img",'data:image/png;base64, '+ props.image)
    //     history.push('/image')
    // }
     


        return( <li className={classes.item}>
            <Card>
                {/* <img className="img" src={image} alt="card image"/> */}
                
                
                <div className={classes.content}>
                    <h3>{props.username}</h3>
                    <p>{props.seatNumber}</p>
                    <p>{props.food}</p>
                    <p>{props.query}</p>
                    {/* {props.image!==null && <Link exact activeClassName="active_class" onClick={onClickImg} >View Image</Link>} */}
                </div>
                <div className={classes.actions}>
                    <button onClick={()=>copy(props.id)}>Copy Link</button>
                    <MdDeleteForever onClick={() => handleDelete(props.id)} className={classes.deleteicon} size='1.3em' />
                </div>
            </Card>
        </li>)
   
    }

    export default NoteItem;
