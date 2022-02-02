import NoteItem from './NoteItem';
import classes from './NoteList.module.css';
function NoteList(props){
 
    
    return(
        <ul className={classes.noteList}>
            {props.orders.map((order)=>(
               
               <NoteItem 
                key={order.id}
                id={order.id}
                title={order.title}
                body={order.body}
                // image={order.image}
                setitemChange={props.setitemChange}
                itemChange={props.itemChange}
                // link={note.link}

                />
                
                
            ))}

        </ul>
        
    );
}

export default NoteList;