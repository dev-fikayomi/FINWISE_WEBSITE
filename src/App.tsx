import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import { useAOSInit } from '@/lib/useAOS'

import Home from '@/pages/Home'
import BFIEngine from '@/pages/BFIEngine'
import SavingsGoal from '@/pages/SavingsGoal'
import FamilyChildAccount from '@/pages/FamilyChildAccount'
import AllowanceTasks from '@/pages/AllowanceTasks'
import Individuals from '@/pages/Individuals'
import Families from '@/pages/Families'
import SecurityTrust from '@/pages/SecurityTrust'
import About from '@/pages/About'
import PressNewsroom from '@/pages/PressNewsroom'
import CustomerStories from '@/pages/CustomerStories'
import Partners from '@/pages/Partners'
import Contact from '@/pages/Contact'
import Legal from '@/pages/Legal'
import BankLinking from '@/pages/BankLinking'
import Resources from '@/pages/Resources'
import ResourceDetail from '@/pages/ResourceDetail'
import Pricing from '@/pages/Pricing'
import CreditRisk from '@/pages/CreditRisk'
import Career from '@/pages/Career'
import NotFound from '@/pages/NotFound'

export default function App() {
  useAOSInit()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bfi" element={<BFIEngine />} />
        <Route path="/savings-goal" element={<SavingsGoal />} />
        <Route path="/family-child-account" element={<FamilyChildAccount />} />
        <Route path="/allowance-tasks" element={<AllowanceTasks />} />
        <Route path="/solution/individuals" element={<Individuals />} />
        <Route path="/solution/families" element={<Families />} />
        <Route path="/security-trust" element={<SecurityTrust />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/credit-risk" element={<CreditRisk />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/press" element={<PressNewsroom />} />
        <Route path="/customer-stories" element={<CustomerStories />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/bank-linking" element={<BankLinking />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:slug" element={<ResourceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
