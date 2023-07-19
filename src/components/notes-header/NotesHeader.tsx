import { H1 } from "../../styles/styles"
import { AboutMeContainer, AboutMeContentContainer, AboutMeText } from "../about-me/AboutMe.styles"


const NotesHeader = () => {
    return (
    <AboutMeContainer>
    <H1>Notes</H1>
    <AboutMeContentContainer>
    <AboutMeText>
        {`Dear Reader,\n this is a collection of notes. 
        These notes are random thoughts that surfaced in my brain at some random moment in time. These electrical signals that formed my thought are translated 
        to words represented through 1s and 0s. These notes are sometimes personal, sometimes opinions, and other times
        pure nonsense. These notes are for my future self and for readers like yourself. Enjoy : )\n`}
    </AboutMeText>
    </AboutMeContentContainer>
    </AboutMeContainer>
    )

}

export default NotesHeader