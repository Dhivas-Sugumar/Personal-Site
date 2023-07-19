import { NoteProps } from "../../../lib/types";
import { H1 } from "../../styles/styles";

const Note : React.FC<NoteProps> = (
    {
        title,
        content
    }
) => {
    return (
        <div>
        <H1>{title}</H1>
        <div>
            {content}
        </div>
        </div>
    )
}

export default Note