"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tabs from "@/components/ui/Tabs";
import EventSchedule from "@/components/ui/EventSchedule";
import EventSpeakers from "@/components/ui/EventSpeakers";
import EventHighlights from "@/components/ui/EventHighlights";
import EventBadge from "@/components/ui/EventBadge";
import EventFilter from "@/components/ui/EventFilter";
import { events } from "@/data";
import { Event } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { formatDate, getActiveEvents, sortEventsByDate } from "@/utils/helpers";

export default function Eventos() {
  // Memorizar eventos ativos ordenados
  const activeEvents = useMemo(() => sortEventsByDate(getActiveEvents(events)), []);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState('');

  // Inicializar estados quando os eventos ativos estiverem disponíveis
  useEffect(() => {
    setFilteredEvents(activeEvents);
    setSelectedEvent(activeEvents[0]?.id || '');
  }, [activeEvents]);

  const eventDetails = filteredEvents.find(event => event.id === selectedEvent) || activeEvents.find(event => event.id === selectedEvent);

  // Encontrar eventos específicos para as seções especiais
  const mblDayEvent = activeEvents.find(event => event.id === 'mbl-day-2025');
  const congressEvent = activeEvents.find(event => event.id === 'congresso-mbl-2025');

  // Quando os eventos filtrados mudam, ajustar a seleção se necessário
  const handleFilterChange = (newFilteredEvents: Event[]) => {
    setFilteredEvents(newFilteredEvents);
    
    // Se o evento selecionado não está mais na lista filtrada, selecionar o primeiro disponível
    if (!newFilteredEvents.find(event => event.id === selectedEvent)) {
      setSelectedEvent(newFilteredEvents[0]?.id || '');
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Eventos MBL Ceará</h1>
              <p className="text-xl text-gray-300 mb-8">
                Participe dos nossos eventos e faça parte da comunidade que está transformando o Ceará.
                Confira nossa agenda e não perca nenhuma oportunidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Event Selection */}
              <div className="md:col-span-4 lg:col-span-3">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Próximos Eventos</h2>
                <div className="space-y-4 mb-8">
                  {filteredEvents.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Nenhum evento encontrado com os filtros selecionados.</p>
                    </div>
                  ) : (
                    filteredEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`p-4 rounded-lg cursor-pointer transition-colors ${
                          selectedEvent === event.id
                            ? 'bg-primary text-black border border-primary-dark'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                        }`}
                        onClick={() => setSelectedEvent(event.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">{event.title}</h3>
                        </div>
                        <p className="text-sm">
                          {formatDate(event.date)} | {event.location.split(',')[0]}
                        </p>
                      </motion.div>
                    ))
                  )}
                </div>

                <EventFilter 
                  events={activeEvents}
                  onFilterChange={handleFilterChange}
                />
              </div>
              
              {/* Event Details */}
              <motion.div 
                className="md:col-span-8 lg:col-span-9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={selectedEvent} // Re-animate when event changes
              >
                {eventDetails ? (
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={eventDetails.image || '/images/placeholder.jpg'}
                        alt={eventDetails.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-3xl font-bold">{eventDetails.title}</h2>
                        <div className="flex gap-2 flex-wrap">
                          <EventBadge event={eventDetails} />
                          {eventDetails.isHighlight && (
                            <span className="bg-primary text-black font-bold px-3 py-1 text-sm uppercase rounded border border-primary-dark">
                              Destaque
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{formatDate(eventDetails.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{eventDetails.location}</span>
                        </div>
                      </div>
                      
                      <div className="prose max-w-none mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Descrição</h3>
                        <p className="text-gray-700">{eventDetails.description}</p>
                        
                        {eventDetails.details?.whatToExpect && (
                          <>
                            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">O que esperar</h3>
                            <p className="text-gray-700">{eventDetails.details.whatToExpect}</p>
                          </>
                        )}
                        
                        {eventDetails.details?.schedule && (
                          <EventSchedule 
                            schedule={eventDetails.details.schedule}
                            className="mt-6"
                          />
                        )}
                        
                        {eventDetails.details?.highlights && (
                          <EventHighlights 
                            items={eventDetails.details.highlights}
                            className="mt-6"
                          />
                        )}
                      </div>
                      
                      <Link 
                        href={eventDetails.registrationUrl || eventDetails.link || `/eventos/${eventDetails.id}`}
                        className="inline-block bg-secondary text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Inscreva-se
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-500 text-lg">Selecione um evento para ver os detalhes.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* MBL Day Section */}
        {mblDayEvent && (
          <section className="py-16 bg-yellow-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{mblDayEvent.title}</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  {mblDayEvent.description}
                </p>
              </motion.div>
              
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">O que é o MBL Day?</h3>
                    {mblDayEvent.details?.whatToExpect && (
                      <p className="text-gray-700 mb-4">{mblDayEvent.details.whatToExpect}</p>
                    )}
                    <p className="text-gray-700 mb-6">
                      Em 2025, o evento contará com palestras de renomados palestrantes nacionais, workshops temáticos, lançamentos de livros e momentos de interação com os participantes.
                    </p>
                    
                    {mblDayEvent.details?.highlights && (
                      <EventHighlights 
                        items={mblDayEvent.details.highlights}
                        title="Destaques:"
                        className="mb-6"
                      />
                    )}
                    
                    <Link
                      href={mblDayEvent.link || `/eventos/${mblDayEvent.id}`}
                      className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Saiba mais sobre o MBL Day
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <Image
                      src={mblDayEvent.image}
                      alt={mblDayEvent.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-white text-4xl font-bold mb-2">MBL DAY</div>
                        <div className="text-primary font-bold text-2xl mb-4">{formatDate(mblDayEvent.date)}</div>
                        <Link
                          href={mblDayEvent.registrationUrl || mblDayEvent.link || `/eventos/${mblDayEvent.id}`}
                          className="inline-block bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Garanta sua vaga
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Congress Section */}
        {congressEvent && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{congressEvent.title}</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  {congressEvent.details?.whatToExpect || congressEvent.description}
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <Tabs 
                    tabs={[
                      ...(congressEvent.details?.objectives ? [{
                        id: 'objetivos',
                        label: 'Objetivos',
                        content: (
                          <EventHighlights 
                            items={congressEvent.details.objectives}
                            title="Objetivos do Congresso"
                            className="py-4"
                          />
                        )
                      }] : []),
                      ...(congressEvent.details?.multiDay ? [{
                        id: 'programacao',
                        label: 'Programação',
                        content: (
                          <div className="py-4">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Programação do Congresso</h3>
                            <div className="space-y-6">
                              {Object.entries(congressEvent.details.multiDay).map(([key, day]) => (
                                <EventSchedule
                                  key={key}
                                  schedule={day.schedule}
                                  title={day.title}
                                  className="bg-gray-50 p-4 rounded-lg"
                                />
                              ))}
                            </div>
                          </div>
                        )
                      }] : []),
                      ...(congressEvent.details?.speakers ? [{
                        id: 'palestrantes',
                        label: 'Palestrantes',
                        content: (
                          <EventSpeakers 
                            speakers={congressEvent.details.speakers}
                            title="Palestrantes Confirmados"
                            className="py-4"
                          />
                        )
                      }] : [])
                    ]}
                  />
                  
                  <div className="mt-8">
                    <Link
                      href={congressEvent.registrationUrl || congressEvent.link || `/eventos/${congressEvent.id}`}
                      className="inline-block bg-secondary text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Inscreva-se no Congresso
                    </Link>
                  </div>
                </div>
                
                <motion.div
                  className="order-1 lg:order-2 relative h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={congressEvent.image}
                    alt={congressEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-2xl font-bold">{congressEvent.title}</h3>
                      <p className="text-gray-200">
                        {formatDate(congressEvent.date)}
                        {congressEvent.endDate && ` e ${formatDate(congressEvent.endDate)}`} • {congressEvent.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}