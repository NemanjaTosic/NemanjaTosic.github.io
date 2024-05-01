import Accordion from 'components/Accordion'
import React from 'react'

export default function SectionFAQ() {
  const data_faq = [
    {
      title: 'How can I make money with paid surveys?',
      content:
        'Nomadic Insights is a free website where you can earn \
        real money for taking paid surveys. Simply sign up with your email \
        and start earning today.Right after signing up, you can start making money. \
        The average user withdraws their first cash on the same day! You can take surveys anywhere online from your phone or computer.'
    },

    {
      title: 'How can I make money with paid surveys?',
      content:
        'Nomadic Insights is a free website where you can earn \
        real money for taking paid surveys. Simply sign up with your email \
        and start earning today.Right after signing up, you can start making money. \
        The average user withdraws their first cash on the same day! You can take surveys anywhere online from your phone or computer.'
    },

    {
      title: 'How can I make money with paid surveys?',
      content:
        'Nomadic Insights is a free website where you can earn \
        real money for taking paid surveys. Simply sign up with your email \
        and start earning today.Right after signing up, you can start making money. \
        The average user withdraws their first cash on the same day! You can take surveys anywhere online from your phone or computer.'
    },

    {
      title: 'How can I make money with paid surveys?',
      content:
        'Nomadic Insights is a free website where you can earn \
        real money for taking paid surveys. Simply sign up with your email \
        and start earning today.Right after signing up, you can start making money. \
        The average user withdraws their first cash on the same day! You can take surveys anywhere online from your phone or computer.'
    }
  ]
  return (
    <div id="faqs" className="2xl:px-72 xl:px-48 md:px-12 py-16 ">
      <div className="text-primary-900 text-center text-4xl font-bold">
        Frequently Asked Questions
      </div>
      <div className="pt-16 px-12 md:px-32">
        <Accordion items={data_faq} />
      </div>
    </div>
  )
}
