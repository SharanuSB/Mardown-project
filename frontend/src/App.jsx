import React, { useState } from 'react';
import MarkdownInput from './components/Editor/MarkdownInput';
import PreviewPane from './components/Preview/PreviewPane';
import useMarkdownConversion from './hooks/useMarkdownConversion';

const App = () => {
  const { markdown, setMarkdown, html, loading } = useMarkdownConversion();
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-blue-600">MD Editor</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">Features</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-4">
            Markdown to HTML Converter
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Transform your Markdown into clean HTML instantly. Real-time preview helps you see changes as you type.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 min-h-[500px]">
          <MarkdownInput value={markdown} onChange={setMarkdown} />
          <PreviewPane 
            html={html}
            loading={loading}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <section id="features" className="py-8 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard 
              title="Real-time Preview"
              description="See your changes instantly as you type with our live preview feature"
            />
            <FeatureCard 
              title="HTML Export"
              description="View and copy the generated HTML code with a single click"
            />
            <FeatureCard 
              title="GitHub Flavored"
              description="Supports tables, code blocks, and other GitHub Markdown features"
            />
          </div>
        </section>
      </main>

      <footer className="bg-white mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <p className="text-center text-sm sm:text-base text-gray-500">
            Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{description}</p>
  </div>
);

export default App;