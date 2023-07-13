import { H1 } from "../../styles/styles"
import { AboutMeContainer, AboutMeContentContainer, AboutMeText } from "../about-me/AboutMe.styles"


const NotesHeader = () => {
    return (
    <AboutMeContainer>
    <H1>Notes</H1>
    <AboutMeContentContainer>
    <AboutMeText>
        {`Dear Reader,\n This is a collection of notes on topics that intrigued my mind one random moment of time. These notes are sometimes personal, soemtimes politica, and other times pure nonsense. There is no rhyme or reason to them or to the order, it is simply a thought transfered into a note for my future self and others to read. Enjoy : )\n`}
    </AboutMeText>
    </AboutMeContentContainer>
    </AboutMeContainer>
    )

}

export default NotesHeader