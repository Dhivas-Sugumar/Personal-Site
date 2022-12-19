import AboutMe from '../components/about-me/AboutMe'
import ContactMe from '../components/contact-me/ContactMe'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Headline from '../components/headline/Headline'
import { BodyContainer, PageContainer } from '../styles/styles'

const IndexPage = () => (
  <PageContainer>
  <Header />
  <BodyContainer>
    <Headline/>
    <AboutMe/>
    <ContactMe/>
  </BodyContainer>
  <Footer />
  </PageContainer>
)

export default IndexPage
