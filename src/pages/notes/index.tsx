import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { BodyContainer, PageContainer } from '../../styles/styles'
import '../../../lib/fontawesome'
import NotesHeader from '../../components/notes-header/NotesHeader'

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