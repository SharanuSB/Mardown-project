const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    {Icon && (
      <div className="text-blue-600 mb-3">
        <Icon className="w-6 h-6" />
      </div>
    )}
    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{description}</p>
  </div>
);

export default FeatureCard; 