"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/ui/HeroCarousel";
import EventCard from "@/components/ui/EventCard";
import PublicationList from "@/components/ui/PublicationList";
import LeadForm from "@/components/forms/LeadForm";
import { events, posts, denuncias } from "@/data";

export default function Home() {
  // Hero carousel slides
  const heroSlides = [
    {
      id: "slide-1",
      title: "Junte-se ao MBL Ceará",
      subtitle: "Movimento Brasil Livre",
      description: "Faça parte do movimento que luta por liberdade, transparência e renovação política no Ceará.",
      imageUrl: "/images/banner-1.jpg",
      buttonText: "Saiba Mais",
      buttonLink: "/sobre"
    },
    {
      id: "slide-2",
      title: "MBL Day 2025",
      subtitle: "Evento Especial",
      description: "O maior evento de renovação política do estado. Participe e conheça as propostas do MBL para o futuro.",
      imageUrl: "/images/banner-2.jpg",
      buttonText: "Inscreva-se",
      buttonLink: "/eventos/mbl-day"
    },
    {
      id: "slide-3",
      title: "Denuncie Irregularidades",
      subtitle: "Transparência e Controle",
      description: "Contribua com a fiscalização de recursos públicos. Envie sua denúncia de forma segura e acompanhe o andamento.",
      imageUrl: "/images/banner-3.jpg",
      buttonText: "Fazer Denúncia",
      buttonLink: "/denuncias"
    }
  ];

  // Featured denuncias
  const featuredDenuncias = denuncias.filter(d => d.status === "resolvida").slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroCarousel slides={heroSlides} />

        {/* Latest Updates Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Últimas Atualizações</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Fique por dentro das novidades e atualizações do MBL Ceará, com informações sobre eventos, ações e conquistas do movimento.
              </p>
            </motion.div>

            <PublicationList posts={posts} maxPosts={3} />
            
            <div className="text-center mt-10">
              <Link href="/posts" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-md">
                Ver Todas as Publicações
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Próximos Eventos</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Participe dos eventos organizados pelo MBL Ceará e faça parte da renovação política no nosso estado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/eventos" className="inline-block bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-200 shadow-md">
                Ver Todos os Eventos
              </Link>
            </div>
          </div>
        </section>

        {/* Denuncias Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Denúncias Recentes</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Conheça as denúncias já realizadas pelo MBL Ceará e veja como contribuímos para a transparência na administração pública.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredDenuncias.map((denuncia, index) => (
                <motion.div
                  key={denuncia.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {denuncia.image ? (
                    <div className="relative h-48">
                      <Image
                        src={denuncia.image}
                        alt={denuncia.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-block bg-success-light text-success-dark border border-success text-xs font-semibold px-3 py-1 rounded-full">
                        Resolvida
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{denuncia.title}</h3>
                    <p className="text-gray-700 mb-4">{denuncia.description.substring(0, 100)}...</p>
                    {denuncia.location && (
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{denuncia.location}</span>
                      </div>
                    )}
                    <Link
                      href={`/denuncias/${denuncia.id}`}
                      className="inline-block text-yellow-600 font-semibold hover:text-yellow-500 hover:underline transition-colors duration-200"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/denuncias" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-md">
                Ver Todas as Denúncias
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/pattern.png')" }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Junte-se ao MBL Ceará</h2>
                  <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
                    Faça parte do movimento que está transformando a política no Ceará. Inscreva-se para receber informações sobre nossos eventos, ações e como você pode contribuir.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Eventos e mobilizações
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Materiais exclusivos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Oportunidades de participação
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 max-w-md">
                <LeadForm 
                  formTitle="Cadastre-se" 
                  buttonText="Quero fazer parte" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
