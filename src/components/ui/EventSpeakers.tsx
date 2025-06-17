import { EventSpeaker } from "@/types";
import Image from "next/image";

interface EventSpeakersProps {
  speakers: EventSpeaker[];
  title?: string;
  className?: string;
}

export default function EventSpeakers({ speakers, title = "Palestrantes", className = "" }: EventSpeakersProps) {
  if (!speakers || speakers.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
              <Image
                src={speaker.image || '/images/placeholder-avatar.jpg'}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <h4 className="font-bold text-gray-900">{speaker.name}</h4>
              <p className="text-sm text-gray-600">{speaker.title}</p>
              {speaker.bio && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{speaker.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600 italic">
        * Mais palestrantes serão anunciados em breve.
      </p>
    </div>
  );
}
