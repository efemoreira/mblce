import { motion } from 'framer-motion';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const Tabs = ({ tabs, defaultTab, className = '' }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-yellow-400 mb-6 bg-white/90">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`whitespace-nowrap px-5 py-3 font-medium text-sm border-b-4 transition-colors focus:outline-none ${
              activeTab === tab.id
                ? 'border-yellow-500 text-yellow-700 bg-yellow-50'
                : 'border-transparent text-gray-600 hover:text-yellow-700 hover:border-yellow-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-2">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              display: activeTab === tab.id ? 'block' : 'none',
            }}
            transition={{ duration: 0.15 }}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
