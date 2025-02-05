import { memo } from 'react';

const PreviewContent = ({ html, activeTab }) => (
    <div className="flex-grow bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-auto">
    {activeTab === 'preview' ? (
        <div
        className="prose prose-pre:bg-gray-800 prose-pre:text-gray-100 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
        />
    ) : (
        <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap">
        {html}
        </pre>
    )}
    </div>
);

export default memo(PreviewContent);
