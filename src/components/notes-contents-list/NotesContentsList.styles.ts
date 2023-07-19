import styled from "@emotion/styled";
import { List, ListItem } from "@mui/material";

const StyledListItem = styled(ListItem)`
text-align: center;
`

const NotesContentsListContainer = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export {StyledListItem, NotesContentsListContainer}