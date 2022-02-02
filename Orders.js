import NoteList from '../components/Queries/NoteList';
import './Orders.css';
import { useHistory } from "react-router-dom"
import {useState, useEffect } from 'react';
const axios = require('axios');




// const dummyNotes = [
//     {
//      id:"1",   
//      title:"hi nikhil",
//      link:"https://www.geeksforgeeks.org/what-is-usestate-in-react/#:~:text=The%20useState%20%28%29%20is%20a%20Hook%20that%20allows,from%20React%20and%20the%20other%20is%20functional%20components.",
//      description:"Hi I am Nikhil"
//     },
//     {
//      id:"2",
//      title:"Tommorow",
//      link:"https://reactjs.org/docs/getting-started.html",
//      description:"Hii"
//     },
// ];

function Orders(){
 

    // const [dummyNotes, setNotes] = useState([
    //     {
    //      id:"1",   
    //      title:"hi nikhil",
    //      link:"https://www.geeksforgeeks.org/what-is-usestate-in-react/#:~:text=The%20useState%20%28%29%20is%20a%20Hook%20that%20allows,from%20React%20and%20the%20other%20is%20functional%20components.",
    //      description:"Hi I am Nikhil"
    //     },
    //     {
    //      id:"2",
    //      title:"Tommorow",
    //      link:"https://reactjs.org/docs/getting-started.html",
    //      description:"Hii"
    //     },
    // ]);
    // const deleteNote = (id) => {
        
	// 	const newNotes = dummyNotes.filter((note) => note.id !== id);
	// 	setNotes(newNotes);
	// };
  const [orders,setorder]=useState([]);
  const [itemChange,setitemChange]=useState(false);
  useEffect(() => {
      axios.get(`http://localhost:8080/api/v1/users/StickyNotes/${window.localStorage.getItem('userName')}`)
  .then(function (response) {
    console.log(response)
     setorder(response.data);
  })
  .catch(function (error) {
    
    console.log(error);
  })  
 },[,itemChange]);
    
    return(
         <div>
             <NoteList orders = {orders} setitemChange={setitemChange} itemChange={itemChange}/>
             <br/>
             <br/>
             {/* handleDeleteNote={deleteNote} */}
         </div>
         
    );
}

export default Orders;