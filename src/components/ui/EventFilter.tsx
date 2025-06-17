import { Event } from "@/types";
import { useState } from "react";

interface EventFilterProps {
  events: Event[];
  onFilterChange: (filteredEvents: Event[]) => void;
  className?: string;
}

export default function EventFilter({ events, onFilterChange, className = "" }: EventFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Extrair todas as tags únicas dos eventos
  const allTags = Array.from(
    new Set(events.flatMap(event => event.tags || []))
  ).sort();

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    
    if (filter === "all") {
      onFilterChange(events);
    } else if (filter === "highlights") {
      onFilterChange(events.filter(event => event.isHighlight));
    } else {
      onFilterChange(events.filter(event => event.tags?.includes(filter)));
    }
  };

  const getEventCount = (filter: string): number => {
    if (filter === "all") return events.length;
    if (filter === "highlights") return events.filter(event => event.isHighlight).length;
    return events.filter(event => event.tags?.includes(filter)).length;
  };

  return (
    <div className={`mb-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-3 text-gray-900">Filtrar eventos</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "all"
              ? "bg-primary text-black"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Todos ({getEventCount("all")})
        </button>
        
        <button
          onClick={() => handleFilterChange("highlights")}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "highlights"
              ? "bg-primary text-black"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Destaques ({getEventCount("highlights")})
        </button>
        
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleFilterChange(tag)}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors capitalize ${
              selectedFilter === tag
                ? "bg-primary text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tag} ({getEventCount(tag)})
          </button>
        ))}
      </div>
    </div>
  );
}
