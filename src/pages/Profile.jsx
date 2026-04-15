import { Activity, MapPin } from 'lucide-react'

export default function Profile() {
  return (
    <div className="p-6 pb-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Profile</h1>
      </div>

      <div className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl p-8 text-white text-center mb-8">
        <div className="text-7xl mb-4">👤</div>
        <h2 className="text-2xl font-bold mb-2">Alex Chen</h2>
        <p className="text-primary/80 text-sm">Always down for a game</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200">
          <div className="flex justify-center mb-3">
            <Activity className="text-orange" size={28} />
          </div>
          <p className="text-3xl font-bold text-primary mb-1">24</p>
          <p className="text-sm text-gray-600">Activities Joined</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200">
          <div className="flex justify-center mb-3">
            <MapPin className="text-orange" size={28} />
          </div>
          <p className="text-3xl font-bold text-primary mb-1">12</p>
          <p className="text-sm text-gray-600">Facilities Reported</p>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl font-medium hover:shadow-lg hover:from-primary/90 hover:to-primary/80 transition-all duration-200 active:scale-95">
          Edit Profile
        </button>
        <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 active:scale-95">
          Settings
        </button>
        <button className="w-full py-3 border border-red-300 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-all duration-200 active:scale-95">
          Logout
        </button>
      </div>
    </div>
  )
}
