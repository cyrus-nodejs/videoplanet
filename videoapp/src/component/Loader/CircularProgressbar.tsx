

function CircularProgressBar({ sqSize = 180, strokeWidth = 8, percentage = 0 }) {
  const radius = (sqSize - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <svg width={sqSize} height={sqSize}>
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={sqSize / 2}
        cy={sqSize / 2}
      />
      <circle
        className="transition-all duration-500 ease-out"
        stroke="#3b82f6"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={radius}
        cx={sqSize / 2}
        cy={sqSize / 2}
      />
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="text-xl font-semibold fill-current text-gray-700"
      >
        {percentage}%
      </text>
    </svg>
  )
}

export default CircularProgressBar
