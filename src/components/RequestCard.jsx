import { MapPin, Clock } from 'lucide-react'

export default function RequestCard({ request }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-orange/30 transition-all duration-200">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{request.avatar}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{request.username}</h3>
          <p className="text-sm text-gray-600 mt-0.5">{request.activity}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={16} className="text-orange" />
          <span>{request.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-orange" />
          <span>{request.location}</span>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">{request.description}</p>

      <button className="w-full py-2.5 bg-gradient-to-r from-orange to-orange/90 text-white rounded-lg font-medium hover:shadow-lg hover:from-orange/90 hover:to-orange/80 transition-all duration-200 active:scale-95">
        Join
      </button>
    </div>
  )
}
