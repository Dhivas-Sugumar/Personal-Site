import { List, ListItem, ListItemText } from "@mui/material"
import { notes } from "../../pages/notes/list"
import Link from "next/link"


const NotesContentsList = () => {
    return (
        <List>
            {Object.entries(notes).map(([id, title]) => (
        <ListItem key={id}>
            <Link href={`/notes/${id}`}>
            <ListItemText primary={`${id}: ${title}`} />
            </Link>
        </ListItem>
      ))}
        </List>
    )
}

export default NotesContentsList