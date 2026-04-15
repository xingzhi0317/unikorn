import { useState } from 'react'
import { Radar, Users, User } from 'lucide-react'
import Radar_Page from './pages/Radar'
import Match from './pages/Match'
import Profile from './pages/Profile'
import Navigation from './components/Navigation'

export default function App() {
  const [activeTab, setActiveTab] = useState('radar')

  const renderPage = () => {
    switch (activeTab) {
      case 'radar':
        return <Radar_Page />
      case 'match':
        return <Match />
      case 'profile':
        return <Profile />
      default:
        return <Radar_Page />
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col h-screen max-h-screen">
        <div className="flex-1 overflow-y-auto pb-24">
          {renderPage()}
        </div>

        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
