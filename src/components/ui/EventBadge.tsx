import { Event } from "@/types";

interface EventBadgeProps {
  event: Event;
  className?: string;
}

export default function EventBadge({ event, className = "" }: EventBadgeProps) {
  const getEventStatus = (event: Event) => {
    const currentDate = new Date();
    const eventDate = new Date(event.date);
    const endDate = event.endDate ? new Date(event.endDate) : eventDate;
    
    // Normalizar datas para comparação apenas por dia
    const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const eventStart = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
    const eventEnd = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    
    const daysDifference = Math.ceil((eventStart.getTime() - today.getTime()) / (1000 * 3600 * 24));
    
    // Evento acontecendo hoje ou período multi-dia que inclui hoje
    if (today >= eventStart && today <= eventEnd) {
      return { text: "Acontecendo agora", color: "bg-green-500 text-white", pulse: true };
    }
    
    // Evento já passou
    if (today > eventEnd) {
      return { text: "Finalizado", color: "bg-gray-500 text-white", pulse: false };
    }
    
    // Evento é hoje (caso não tenha entrado no primeiro if)
    if (daysDifference === 0) {
      return { text: "Hoje", color: "bg-primary text-black", pulse: true };
    }
    
    // Evento é amanhã
    if (daysDifference === 1) {
      return { text: "Amanhã", color: "bg-orange-500 text-white", pulse: true };
    }
    
    // Evento em breve (próximos 7 dias)
    if (daysDifference > 0 && daysDifference <= 7) {
      return { text: `Em ${daysDifference} dias`, color: "bg-blue-500 text-white", pulse: false };
    }
    
    // Evento em breve (próximas 2 semanas)
    if (daysDifference > 7 && daysDifference <= 14) {
      return { text: "Em breve", color: "bg-indigo-500 text-white", pulse: false };
    }
    
    // Evento futuro
    return { text: "Próximo evento", color: "bg-gray-400 text-white", pulse: false };
  };

  const status = getEventStatus(event);

  if (!status) return null;

  return (
    <span 
      className={`inline-flex items-center px-2 py-1 text-xs font-bold uppercase rounded-full ${status.color} ${className} ${
        status.pulse ? 'animate-pulse' : ''
      }`}
    >
      {status.text}
    </span>
  );
}
