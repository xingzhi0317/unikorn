import { Plus } from 'lucide-react'
import RequestCard from '../components/RequestCard'

const REQUESTS = [
  {
    id: 1,
    username: 'Alex Chen',
    avatar: '👨‍🦱',
    activity: '🏀 Basketball 3v3',
    time: 'Tonight 8:00 PM',
    location: 'North Court',
    description: 'Need 2 more players, casual game. All levels welcome!',
  },
  {
    id: 2,
    username: 'Sarah Johnson',
    avatar: '👩‍🦰',
    activity: '🏋️ Gym/Arm day',
    time: 'Tomorrow 6:30 AM',
    location: 'Main Gym',
    description: 'Looking for a workout buddy. Beginner-friendly!',
  },
  {
    id: 3,
    username: 'Marcus Lee',
    avatar: '👨‍🎓',
    activity: '🏃 Night Run',
    time: 'Tonight 7:00 PM',
    location: 'Campus Track',
    description: '5K casual run. Join us for some evening exercise!',
  },
  {
    id: 4,
    username: 'Emma Wilson',
    avatar: '👩‍🎓',
    activity: '🎾 Tennis Doubles',
    time: 'Saturday 4:00 PM',
    location: 'Tennis Courts',
    description: 'Need 2 players for friendly doubles match.',
  },
  {
    id: 5,
    username: 'Jake Rodriguez',
    avatar: '👨‍🦳',
    activity: '⚽ Soccer Pickup',
    time: 'Tomorrow 5:30 PM',
    location: 'South Field',
    description: '5v5 game, all skill levels welcome. Bring water!',
  },
]

export default function Match() {
  return (
    <div className="pb-8">
      <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-100">
        <h1 className="text-3xl font-bold text-primary mb-2">Find Partners</h1>
        <p className="text-gray-500 text-sm">Join activities or post your own</p>
      </div>

      <button className="sticky top-20 left-6 right-6 mx-6 mt-4 mb-4 py-3 bg-gradient-to-r from-orange to-orange/90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:from-orange/90 hover:to-orange/80 transition-all duration-200 active:scale-95 z-10">
        <Plus size={20} />
        Post Request
      </button>

      <div className="px-6 space-y-4">
        {REQUESTS.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  )
}
