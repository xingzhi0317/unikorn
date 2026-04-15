import { CircleAlert as AlertCircle } from 'lucide-react'
import FacilityCard from '../components/FacilityCard'

const FACILITIES = [
  { id: 1, name: 'North Basketball Court', icon: '🏀', crowdLevel: 45 },
  { id: 2, name: 'South Basketball Court', icon: '🏀', crowdLevel: 72 },
  { id: 3, name: 'Main Gym', icon: '🏋️', crowdLevel: 85 },
  { id: 4, name: 'Swimming Pool', icon: '🏊', crowdLevel: 55 },
  { id: 5, name: 'Tennis Courts', icon: '🎾', crowdLevel: 30 },
  { id: 6, name: 'Track & Field', icon: '🏃', crowdLevel: 65 },
]

export default function Radar() {
  return (
    <div className="p-6 pb-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Campus Facility Radar</h1>
        <p className="text-gray-500 text-sm">Check crowd levels in real-time</p>
      </div>

      <div className="space-y-4">
        {FACILITIES.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  )
}
