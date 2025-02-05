const PreviewTabs = ({ activeTab, onTabChange }) => (
    <div className="flex space-x-2">
      {['preview', 'html'].map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            activeTab === tab
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );

  export default PreviewTabs;
  