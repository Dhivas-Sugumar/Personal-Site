import ContactMe from '../components/contact-me/ContactMe'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { BodyContainer, PageContainer } from '../styles/styles'

const IndexPage = () => (
  <PageContainer>
  <Header />
  <BodyContainer>
    <p>test</p>
    <ContactMe/>
  </BodyContainer>
  <Footer />
  </PageContainer>
)

export default IndexPage
