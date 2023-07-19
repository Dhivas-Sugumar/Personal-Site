import { List, ListItem, ListItemText } from "@mui/material"
import { notes } from "../../pages/notes/list"
import Link from "next/link"
import { NotesContentsListContainer, StyledListItem } from "./NotesContentsList.styles"
import { H2, H4 } from "../../styles/styles"


const NotesContentsList = () => {
    if (Object.keys(notes).length > 0) {
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

    return (
        <NotesContentsListContainer>

        <H2>Notes Coming Soon!!</H2>
        </NotesContentsListContainer>

    )
   
}

export default NotesContentsList