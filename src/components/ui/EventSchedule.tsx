import { EventScheduleItem } from "@/types";

interface EventScheduleProps {
  schedule: EventScheduleItem[];
  title?: string;
  className?: string;
}

export default function EventSchedule({ schedule, title = "Programação", className = "" }: EventScheduleProps) {
  if (!schedule || schedule.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {schedule.map((item, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-start gap-1">
            <span className="font-medium min-w-[80px] text-primary-dark">{item.time}</span>
            <svg 
              className="w-4 h-4 text-primary-dark mt-1 flex-shrink-0 hidden sm:block" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <span className="font-medium">{item.activity}</span>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
              {item.speaker && (
                <p className="text-sm text-secondary font-medium mt-1">
                  Palestrante: {item.speaker}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
