import { Radar, Users, User } from 'lucide-react'

export default function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'radar', label: 'Radar', icon: Radar },
    { id: 'match', label: 'Match', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex-1 py-4 flex flex-col items-center justify-center transition-all duration-200 ${
            activeTab === id
              ? 'text-orange bg-orange/5'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Icon size={24} />
          <span className="text-xs mt-1 font-medium">{label}</span>
        </button>
      ))}
    </nav>
  )
}
