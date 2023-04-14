import AboutMe from '../components/about-me/AboutMe'
import ContactMe from '../components/contact-me/ContactMe'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Headline from '../components/headline/Headline'
import Projects from '../components/projects/Projects'
import Resume from '../components/resume/Resume'
import { BodyContainer, PageContainer } from '../styles/styles'
import '../../lib/fontawesome'
import { BrowserRouter, Router } from 'react-router-dom'

const IndexPage = () => (
  <BrowserRouter >
<PageContainer>
  <Header />
  <BodyContainer>
    <Headline/>
    <AboutMe/>
    <Resume/>
    <Projects/>
    <ContactMe/>
  </BodyContainer>
  <Footer />
  </PageContainer>
  </BrowserRouter >
  
)

export default IndexPage
