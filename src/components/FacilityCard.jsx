import { CircleAlert as AlertCircle } from 'lucide-react'

export default function FacilityCard({ facility }) {
  const getCrowdColor = (level) => {
    if (level > 80) return 'bg-red-500'
    if (level > 50) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const getCrowdLabel = (level) => {
    if (level > 80) return 'Very Crowded'
    if (level > 50) return 'Moderate'
    return 'Quiet'
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-orange/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{facility.icon}</span>
          <h3 className="font-semibold text-gray-900">{facility.name}</h3>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-600">Crowd Level</span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            facility.crowdLevel > 80 ? 'bg-red-100 text-red-700' :
            facility.crowdLevel > 50 ? 'bg-yellow-100 text-yellow-700' :
            'bg-green-100 text-green-700'
          }`}>
            {facility.crowdLevel}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${getCrowdColor(facility.crowdLevel)}`}
            style={{ width: `${facility.crowdLevel}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">{getCrowdLabel(facility.crowdLevel)}</p>
      </div>

      <button className="w-full py-2.5 bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg font-medium hover:shadow-lg hover:from-primary/90 hover:to-primary/80 transition-all duration-200 active:scale-95">
        Report Status
      </button>
    </div>
  )
}
