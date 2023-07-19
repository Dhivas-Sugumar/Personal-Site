import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { BodyContainer, PageContainer } from '../../styles/styles'
import '../../../lib/fontawesome'
import NotesHeader from '../../components/notes-header/NotesHeader'
import NotesContentsList from '../../components/notes-contents-list/NotesContentsList'
import { notes } from "../../pages/notes/list"

const NotesPage = () => (

  <PageContainer>
  <Header />
  <BodyContainer>
    <NotesHeader/>
<NotesContentsList/>

  </BodyContainer>
  <Footer />
  </PageContainer>
  
)

export default NotesPage