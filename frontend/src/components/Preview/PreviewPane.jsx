import PreviewContent from "./PreviewContent";
import PreviewTabs from "./PreviewTabs";

const PreviewPane = ({ html, loading, activeTab, onTabChange }) => (
  <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-4">
    <div className="flex items-center justify-between mb-4">
      <PreviewTabs activeTab={activeTab} onTabChange={onTabChange} />
      {loading && (
        <div className="flex items-center text-sm text-gray-500">
          <svg className="animate-spin h-4 w-4 text-blue-500 mr-2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
          </svg>
          Processing...
        </div>
      )}
    </div>
    <PreviewContent html={html} activeTab={activeTab} />
  </div>
);

export default PreviewPane;