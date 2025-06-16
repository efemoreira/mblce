"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tabs from "@/components/ui/Tabs";
import { events } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatDate } from "@/utils/helpers";

export default function Eventos() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]?.id || '');

  const eventDetails = events.find(event => event.id === selectedEvent);

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
                
                <div className="space-y-4">
                  {events.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-lg cursor-pointer transition-colors ${
                        selectedEvent === event.id
                          ? 'bg-yellow-500 text-black border border-yellow-600'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedEvent(event.id)}
                    >
                      <h3 className="font-bold mb-1">{event.title}</h3>
                      <p className="text-sm">
                        {formatDate(event.date)} | {event.location.split(',')[0]}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Event Details */}
              <motion.div 
                className="md:col-span-8 lg:col-span-9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={selectedEvent} // Re-animate when event changes
              >
                {eventDetails && (
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
                        {eventDetails.isHighlight && (
                          <span className="bg-yellow-500 text-black font-bold px-3 py-1 text-sm uppercase rounded border border-yellow-600">
                            Destaque
                          </span>
                        )}
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
                        
                        {/* Example event content - this would normally come from the database */}
                        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">O que esperar</h3>
                        <p className="text-gray-700">
                          Este evento reunirá membros, simpatizantes e lideranças do MBL para discutir temas relevantes para o futuro político do Ceará e do Brasil. 
                          Os participantes terão a oportunidade de interagir com palestrantes renomados, participar de workshops e expandir sua rede de contatos.
                        </p>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Programação</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">09:00</span>
                            <span>Credenciamento e café da manhã</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">10:00</span>
                            <span>Abertura oficial com coordenadores</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">11:00</span>
                            <span>Palestra principal</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">12:30</span>
                            <span>Almoço</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">14:00</span>
                            <span>Workshops temáticos</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">16:00</span>
                            <span>Coffee break</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">16:30</span>
                            <span>Painel de discussão</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium min-w-[80px]">18:00</span>
                            <span>Encerramento</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Link 
                        href={`/eventos/${eventDetails.id}`}
                        className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Inscreva-se
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* MBL Day Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">MBL Day 2025</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                O maior evento de renovação política do Ceará. Um dia inteiro de palestras, debates e networking com as principais lideranças do movimento.
              </p>
            </motion.div>
            
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">O que é o MBL Day?</h3>
                  <p className="text-gray-700 mb-4">
                    O MBL Day é um evento anual que reúne membros, simpatizantes e lideranças do MBL para discutir temas relevantes para o futuro político do país. É uma oportunidade única de conhecer as principais propostas e projetos do movimento.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Em 2025, o evento contará com palestras de renomados palestrantes nacionais, workshops temáticos, lançamentos de livros e momentos de interação com os participantes.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-2">Destaques:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Palestras com grandes nomes da política nacional</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Workshops sobre comunicação política e mobilização</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sessão de autógrafos com lançamentos de livros</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Networking com lideranças e membros de todo o Brasil</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/eventos/mbl-day"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Saiba mais sobre o MBL Day
                  </Link>
                </div>
                
                <div className="relative">
                  <Image
                    src="/images/mbl-day.jpg"
                    alt="MBL Day"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-white text-4xl font-bold mb-2">MBL DAY</div>
                      <div className="text-primary font-bold text-2xl mb-4">15 de julho de 2025</div>
                      <Link
                        href="/eventos/mbl-day"
                        className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
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

        {/* Congress Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Congresso Nacional MBL 2025</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                O Congresso Nacional do MBL reúne anualmente coordenadores e membros de todo o Brasil para discutir os rumos do movimento e as estratégias para o futuro.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Tabs 
                  tabs={[
                    {
                      id: 'objetivos',
                      label: 'Objetivos',
                      content: (
                        <div className="py-4">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Objetivos do Congresso</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Fortalecer a integração entre os núcleos regionais do MBL</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Definir as diretrizes políticas para o próximo ano</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Capacitar lideranças regionais em temas estratégicos</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Promover o intercâmbio de experiências entre as regionais</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Avaliar os resultados das ações realizadas no último ano</span>
                            </li>
                          </ul>
                        </div>
                      )
                    },
                    {
                      id: 'programacao',
                      label: 'Programação',
                      content: (
                        <div className="py-4">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Programação do Congresso</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-lg">Dia 1 - 20 de setembro</h4>
                              <ul className="space-y-2 mt-2">
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">08:30</span>
                                  <span>Credenciamento</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">09:30</span>
                                  <span>Cerimônia de abertura</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">10:30</span>
                                  <span>Palestra magna: "O futuro da direita no Brasil"</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">12:00</span>
                                  <span>Almoço</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">14:00</span>
                                  <span>Grupos de trabalho temáticos</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">17:00</span>
                                  <span>Encerramento do dia</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg">Dia 2 - 21 de setembro</h4>
                              <ul className="space-y-2 mt-2">
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">09:00</span>
                                  <span>Apresentação das deliberações dos grupos</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">10:30</span>
                                  <span>Debate sobre as propostas</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">12:00</span>
                                  <span>Almoço</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">14:00</span>
                                  <span>Votação das diretrizes</span>
                                </li>
                                <li className="flex">
                                  <span className="font-medium min-w-[80px]">16:00</span>
                                  <span>Cerimônia de encerramento</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    },
                    {
                      id: 'palestrantes',
                      label: 'Palestrantes',
                      content: (
                        <div className="py-4">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Palestrantes Confirmados</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((index) => (
                              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
                                  <Image
                                    src={`/images/palestrante-${index}.jpg`}
                                    alt="Palestrante"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="ml-4">
                                  <h4 className="font-bold">Palestrante {index}</h4>
                                  <p className="text-sm text-gray-600">Especialista em Política</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="mt-4 text-gray-700">
                            * Mais nomes serão anunciados em breve.
                          </p>
                        </div>
                      )
                    }
                  ]}
                />
                
                <div className="mt-8">
                  <Link
                    href="/eventos/congresso"
                    className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
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
                  src="/images/congresso-mbl.jpg"
                  alt="Congresso MBL"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold">Congresso Nacional MBL</h3>
                    <p className="text-gray-200">20 e 21 de setembro de 2025 • Brasília, DF</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
