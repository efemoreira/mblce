"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/ui/HeroCarousel";
import EventCard from "@/components/ui/EventCard";
import DenunciaCard from "@/components/ui/DenunciaCard";
import PublicationList from "@/components/ui/PublicationList";
import LeadForm from "@/components/forms/LeadForm";
import ReelCard from "@/components/ui/ReelCard";
import { events, denuncias, reels, heroSlides } from "@/data";
import { useEffect, useState } from "react";
import { WPPost } from "@/types";

export default function Home() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  // Featured denuncias
  const featuredDenuncias = denuncias.filter(d => d.status === "resolvida").slice(0, 3);
  
  // Check if sections have content
  const hasEvents = events && events.length > 0;
  const hasPosts = posts && posts.length > 0;
  const hasDenuncias = featuredDenuncias && featuredDenuncias.length > 0;
  const hasReels = reels && reels.length > 0;

  useEffect(() => {
    fetch('https://missao.poraussuba.com.br/wp-json/wp/v2/posts?tags=74&per_page=6')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Erro ao buscar posts:', error));
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroCarousel slides={heroSlides} />

        {/* Latest Updates Section */}
        {hasPosts && (
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
                <Link href="/posts" className="inline-block bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-all duration-200 shadow-md">
                  Ver Todas as Publicações
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Events Section */}
        {hasEvents && (
          <section className="py-16 bg-cyan-50">
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
                <Link href="/eventos" className="inline-block bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary-dark hover:text-white transition-all duration-200 shadow-md">
                  Ver Todos os Eventos
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Denuncias Section */}
        {hasDenuncias && (
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
                  <DenunciaCard key={denuncia.id} denuncia={denuncia} index={index} />
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Link href="/denuncias" className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-md">
                  Ver Todas as Denúncias
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Instagram */}
        {hasReels && (
          <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Siga-nos no Instagram</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Acompanhe nossas ações e eventos em tempo real. Siga-nos no Instagram e fique por dentro de tudo que acontece no MBL Ceará.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reels.map((reel, index) => (
                  <ReelCard key={reel.id} reel={reel} index={index} />
                ))}
              </div>
              
              <div className="text-center mt-10">
                <a 
                  href="https://instagram.com/mblce" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-accent to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-accent transition-all duration-200 shadow-md"
                >
                  Seguir MBLCE no Instagram
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
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
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Eventos e mobilizações
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Materiais exclusivos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
