import { H1 } from "../../styles/styles"
import { AboutMeContainer, AboutMeContentContainer, AboutMeText } from "../about-me/AboutMe.styles"


const NotesHeader = () => {
    return (
    <AboutMeContainer>
    <H1>Notes</H1>
    <AboutMeContentContainer>
    <AboutMeText>
        {`Dear Reader,\n This is a collection of notes that I have written for readers like yourself around the world.\n`}
    </AboutMeText>
    </AboutMeContentContainer>
    </AboutMeContainer>
    )

}

export default NotesHeader