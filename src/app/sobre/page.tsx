"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PersonCard from "@/components/ui/PersonCard";
import { team } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Parallax */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -15, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 20,
                  ease: "easeInOut"
                } 
              }}
              className="absolute inset-0 h-[120%] bg-primary-dark"
            >
              <Image 
                src="/images/LOGO-MBLCE-PRETO.png" 
                alt="MBL Ceará" 
                fill 
                className="object-cover brightness-[0.4]"
                priority
              />
            </motion.div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sobre o MBL Ceará</h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-100 leading-relaxed">
                Somos um movimento suprapartidário que visa mobilizar cidadãos em favor de uma democracia mais transparente e de um Estado eficiente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
                <p className="text-gray-700 mb-4">
                  O Movimento Brasil Livre (MBL) Ceará é um braço regional do Movimento Nacional que tem como principal objetivo promover os valores da liberdade individual, do livre mercado e da democracia no estado do Ceará.
                </p>
                <p className="text-gray-700 mb-4">
                  Atuamos por meio de ações políticas, mobilizações públicas, debates e fiscalização dos órgãos públicos, sempre em defesa da transparência e contra a corrupção em todas as suas formas.
                </p>
                <p className="text-gray-700">
                  Nosso trabalho inclui a formação de lideranças políticas comprometidas com os ideais de liberdade e a promoção de políticas públicas que beneficiem a população cearense.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/sobre/encontro.jpeg"
                  alt="MBL em ação"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Orientamos nossas ações e decisões com base em princípios fundamentais que refletem nosso compromisso com um Brasil mais livre e próspero.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  ),
                  title: "Liberdade",
                  description: "Defendemos a liberdade individual, econômica e política como pilares fundamentais para o desenvolvimento de uma sociedade próspera."
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Transparência",
                  description: "Lutamos pela transparência na gestão pública, acreditando que o cidadão tem o direito de saber como os recursos públicos são utilizados."
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                  title: "Justiça",
                  description: "Trabalhamos por um sistema judicial imparcial e eficiente, que garanta direitos iguais a todos os cidadãos, independentemente de sua condição social."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Nossa Coordenação</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça as pessoas responsáveis por liderar o MBL Ceará e suas iniciativas em todo o estado.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((person, index) => (
                <PersonCard key={person.id} person={person} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* History Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A trajetória do MBL Ceará é marcada por conquistas e lutas em defesa da liberdade e transparência.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: "2014",
                  title: "Nascimento do MBL no Ceará",
                  description: "Início do movimento no estado, com as primeiras mobilizações em favor da transparência e contra a corrupção."
                },
                {
                  year: "2016",
                  title: "Manifestações pelo Impeachment",
                  description: "Participação ativa nas mobilizações que levaram ao impeachment da presidente Dilma Rousseff."
                },
                {
                  year: "2018",
                  title: "Eleições e Renovação Política",
                  description: "O MBL Ceará contribuiu para a renovação política no estado, apoiando candidatos alinhados com seus valores."
                },
                {
                  year: "2020",
                  title: "Atuação durante a Pandemia",
                  description: "Durante a crise sanitária, mantivemos nossa fiscalização e cobramos transparência na aplicação de recursos emergenciais."
                },
                {
                  year: "2025",
                  title: "Expansão e Consolidação",
                  description: "Consolidação do movimento em todo o estado, com núcleos em diversas cidades e uma atuação cada vez mais forte."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex mb-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-none w-24 md:w-32 text-right mr-4 md:mr-8">
                    <div className="bg-primary text-black font-bold py-2 px-4 rounded inline-block">
                      {item.year}
                    </div>
                  </div>
                  <div className="relative border-l-4 border-primary pl-6 pb-6">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-0"></div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
