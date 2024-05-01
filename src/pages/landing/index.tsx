import React from 'react'
import Navbar from './Navbar'
import SectionAd from './SectionAd'
import SectionRewards from './SectionRewards'
import SectionSurveyApp from './SectionSurveyApp'
import SectionFAQ from './SectionFAQ'
import Footer from './Footer'
import SectionSteps from './SectionSteps'
import SectionGrow from './SectionGrow'
import SectionWork from './SectionWork'
import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'
import ClientModal from 'components/Modal/SignUpModal'

export default function Landing() {
  return (
    <div>
      <Navbar />
      <SectionAd />
      <SectionSteps />
      <SectionGrow />
      <SectionWork />
      <SectionAbout />
      <SectionFAQ />
      <SectionContact />
      <Footer />
    </div>
  )
}
