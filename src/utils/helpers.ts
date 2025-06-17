import { Event } from "@/types";

/**
 * Format date to Brazilian format (DD/MM/YYYY)
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

/**
 * Format date with time in Brazilian format (DD/MM/YYYY HH:MM)
 */
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' }) + ' ' + date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
};

/**
 * Truncate text to specific length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Validate email
 */
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validate phone number (Brazilian format)
 */
export const isValidPhone = (phone: string): boolean => {
  // Remove non-numeric characters
  const numericPhone = phone.replace(/\D/g, '');
  // Check if it's a valid Brazilian phone number
  return /^(?:\d{10}|\d{11})$/.test(numericPhone);
};

/**
 * Format phone number to (XX) XXXXX-XXXX or (XX) XXXX-XXXX
 */
export const formatPhone = (phone: string): string => {
  // Remove non-numeric characters
  const numericPhone = phone.replace(/\D/g, '');
  
  if (numericPhone.length === 11) {
    return `(${numericPhone.slice(0, 2)}) ${numericPhone.slice(2, 7)}-${numericPhone.slice(7)}`;
  } else if (numericPhone.length === 10) {
    return `(${numericPhone.slice(0, 2)}) ${numericPhone.slice(2, 6)}-${numericPhone.slice(6)}`;
  }
  
  return phone;
};

/**
 * Translates status to display string in Portuguese
 */
export const translateStatus = (status: 'pendente' | 'em_analise' | 'resolvida' | 'arquivada'): string => {
  const statusMap = {
    pendente: 'Pendente',
    em_analise: 'Em Análise',
    resolvida: 'Resolvida',
    arquivada: 'Arquivada'
  };
  
  return statusMap[status];
};

/**
 * Submit form to Google Script and handle response
 */
export const submitFormToGoogleScript = async (url: string, data: Record<string, unknown>): Promise<{ success: boolean, message: string }> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Falha ao enviar o formulário');
    }
    
    const result = await response.json();
    return { success: true, message: result.message || 'Formulário enviado com sucesso!' };
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Erro desconhecido ao enviar o formulário' };
  }
};

/**
 * Check if an event is currently active and should be displayed
 */
export const isEventActive = (event: Event): boolean => {
  // Se isActive está explicitamente definido como false, não mostrar
  if (event.isActive === false) return false;
  
  // Se não há data definida, considerar ativo por padrão
  if (!event.date) return event.isActive === true;
  
  // Verificar se o evento não passou ainda (considerando a data final se existir)
  const currentDate = new Date();
  const eventEndDate = event.endDate ? new Date(event.endDate) : new Date(event.date);
  
  // Adicionar um dia completo à data do evento para que eventos do dia atual ainda sejam considerados ativos
  eventEndDate.setDate(eventEndDate.getDate() + 1);
  
  return currentDate < eventEndDate;
};

/**
 * Get events that should be displayed (active and not past)
 */
export const getActiveEvents = (events: Event[]): Event[] => {
  return events.filter(isEventActive);
};

/**
 * Sort events by date (closest first)
 */
export const sortEventsByDate = (events: Event[]): Event[] => {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });
};

/**
 * Check if an event is happening soon (within next 7 days)
 */
export const isEventSoon = (event: Event): boolean => {
  if (!event.date) return false;
  
  const currentDate = new Date();
  const eventDate = new Date(event.date);
  const daysDifference = Math.ceil((eventDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
  
  return daysDifference >= 0 && daysDifference <= 7;
};
