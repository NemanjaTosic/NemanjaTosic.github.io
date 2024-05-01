import React from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageTitle from 'components/PageTitle'
import Landing from './pages/landing'
import Navbar from 'pages/surveys/Navbar'
import SectionWallet from 'pages/surveys/SectionWallet'
import SectionProfile from 'pages/surveys/SectionProfile'
import CardActivity from 'pages/surveys/CardActivity'
import EmailPreference from 'pages/surveys/EmailPreference'
import SurveyActivities from 'pages/surveys/SurveyActivities'
import SurveyPage from 'pages/surveys/SurveyPage'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <PageTitle title="Nomadic Surveys" />
              <Landing />
            </>
          }
        />
        <Route
          path="/Surveys"
          index
          element={
            <>
              <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SurveyPage />
            </>
          }
        />
        <Route
          path="/Wallet"
          index
          element={
            <>
              <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Navbar />
              <SectionWallet />
            </>
          }
        />
        <Route
          path="/Account"
          index
          element={
            <>
              <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Navbar />
              <SectionProfile />
            </>
          }
        />
        <Route
          path="/Activity"
          index
          element={
            <>
              <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Navbar />
              <SurveyActivities />
            </>
          }
        />
        <Route
          path="/Preference"
          index
          element={
            <>
              <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Navbar />
              <EmailPreference />
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
)
