interface EventHighlightsProps {
  items: string[];
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function EventHighlights({ 
  items, 
  title = "Destaques", 
  className = "",
  icon 
}: EventHighlightsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const defaultIcon = (
    <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className={className}>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            {icon || defaultIcon}
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
