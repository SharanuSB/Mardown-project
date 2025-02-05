import { memo } from 'react';
import FeatureCard from './FeatureCard';
import { 
  ClockIcon, 
  CodeBracketIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const featuresData = [
  {
    title: "Real-time Preview",
    description: "See your changes instantly as you type with our live preview feature",
    icon: ClockIcon
  },
  {
    title: "HTML Export",
    description: "View and copy the generated HTML code with a single click",
    icon: CodeBracketIcon
  },
  {
    title: "GitHub Flavored",
    description: "Supports tables, code blocks, and other GitHub Markdown features",
    icon: DocumentTextIcon
  }
];

const Features = () => (
  <section id="features" className="py-8 sm:py-12">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
      Features
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {featuresData.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  </section>
);

export default memo(Features); 