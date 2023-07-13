import { List, ListItem, ListItemText } from "@mui/material"
import { notes } from "../../pages/notes/list"


const NotesContentsList = () => {
    return (
        <List>
            {Object.entries(notes).map(([number, title]) => (
        <ListItem key={number}>
          <ListItemText primary={`${number}: ${title}`} />
        </ListItem>
      ))}
        </List>
    )
}

export default NotesContentsList