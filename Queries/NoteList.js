import NoteItem from './NoteItem';
import classes from './NoteList.module.css';
function NoteList(props){
 
    
    return(
        <ul className={classes.noteList}>
            {props.orders.map((order)=>(
               
               <NoteItem 
                key={order.id}
                id={order.id}
                Username={order.username}
                pnr={order.pnr}
                seatNumber={order.seatNumber}
                health_info={order.health-info}
                food={order.food}
                query={order.query}
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
