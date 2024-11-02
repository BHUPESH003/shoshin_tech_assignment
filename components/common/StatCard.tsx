// Reusable card component for displaying statistics
const StatCard = ({ title, count, subtitle, className = "" }: {
    title: string
    count: number
    subtitle: string
    className?: string
  }) => (
    <div className={`p-4 rounded-lg ${className}`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="mt-2">
        <p className="text-3xl font-semibold">{count}</p>
        <p className="mt-1 text-sm text-red-500">{subtitle}</p>
      </div>
    </div>
  )

  export default StatCard