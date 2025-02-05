import { memo } from 'react';

const MarkdownInput = ({ value, onChange }) => (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Markdown Editor</h1>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow p-4 font-mono text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Write your markdown here..."
        spellCheck="false"
      />
    </div>
  );

  export default memo(MarkdownInput);