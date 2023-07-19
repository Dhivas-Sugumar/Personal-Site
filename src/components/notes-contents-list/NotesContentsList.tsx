import { List, ListItem, ListItemText } from "@mui/material"
import { notes } from "../../pages/notes/list"
import Link from "next/link"
import { NotesContentsListContainer, StyledListItem } from "./NotesContentsList.styles"


const NotesContentsList = () => {
    return (
        <NotesContentsListContainer>
            <List>
                {Object.entries(notes).map(([id, title]) => (
                    <StyledListItem key={id}>
                        <Link href={`/notes/${id}`}>
                            <ListItemText primary={`${id}: ${title}`} />
                        </Link>
                    </StyledListItem>
                ))}
            </List>

        </NotesContentsListContainer>

    )
}

export default NotesContentsList