'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DenunciaForm from '@/components/forms/DenunciaForm';
import { denuncias } from '@/data';
import Image from 'next/image';
import { Denuncia } from '@/types';
import Tabs from '@/components/ui/Tabs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const DenunciasPage = () => {
  const [filteredStatus, setFilteredStatus] = useState<string | null>(null);

  // Filtrar denúncias públicas
  const publicDenuncias = denuncias.filter(denuncia => denuncia.isPublic);
  
  // Filtrar por status se o filtro estiver ativo
  const filteredDenuncias = filteredStatus 
    ? publicDenuncias.filter(denuncia => denuncia.status === filteredStatus) 
    : publicDenuncias;

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'resolvida':
        return 'bg-success-light text-success-dark border border-success';
      case 'em_analise':
        return 'bg-warning-light text-warning-dark border border-warning';
      case 'pendente':
        return 'bg-info-light text-info-dark border border-info';
      case 'arquivada':
        return 'bg-gray-100 text-gray-700 border border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'resolvida':
        return 'Resolvida';
      case 'em_analise':
        return 'Em análise';
      case 'pendente':
        return 'Pendente';
      case 'arquivada':
        return 'Arquivada';
      default:
        return status;
    }
  };

  const renderDenunciaCard = (denuncia: Denuncia) => (
    <motion.div
      key={denuncia.id}
      className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-6 hover:shadow-xl transition-shadow duration-300"
      variants={itemVariants}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{denuncia.title}</h3>
          <span className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ${getStatusBadgeClass(denuncia.status)}`}>
            {getStatusText(denuncia.status)}
          </span>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">{denuncia.description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {denuncia.location && (
            <span className="flex items-center bg-gray-50 px-3 py-1 rounded-md">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {denuncia.location}
            </span>
          )}
          <span className="flex items-center bg-gray-50 px-3 py-1 rounded-md">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path>
            </svg>
            {new Date(denuncia.date).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
      
      {denuncia.image && (
        <div className="relative w-full h-48 border-t border-gray-200">
          <Image 
            src={denuncia.image}
            alt={denuncia.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </motion.div>
  );

  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-20 text-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Denúncias</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-900">
              Faça sua denúncia e ajude a combater a corrupção e as irregularidades na gestão pública.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs
            tabs={[
              { 
                id: 'sobre', 
                label: 'Sobre as Denúncias',
                content: (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Sobre o Sistema de Denúncias</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                      <p className="mb-6 text-gray-700 leading-relaxed">
                        O MBL Ceará disponibiliza este canal de denúncias para que qualquer cidadão possa
                        reportar possíveis irregularidades na administração pública, casos de corrupção,
                        desvios de recursos públicos, e outras situações que mereçam investigação.
                      </p>
                      <p className="mb-6 text-gray-700 leading-relaxed">
                        Todas as denúncias são analisadas pela nossa equipe jurídica e, quando pertinentes,
                        encaminhadas aos órgãos competentes como Ministério Público, Tribunais de Contas,
                        e demais órgãos fiscalizadores.
                      </p>
                      <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Como funciona?</h3>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                        <li>Preencha o formulário com o máximo de detalhes possível sobre a situação denunciada</li>
                        <li>Você pode fazer a denúncia de forma anônima ou identificada</li>
                        <li>Anexe documentos, fotos ou vídeos que possam servir como evidência</li>
                        <li>Nossa equipe irá analisar a denúncia e verificar sua procedência</li>
                        <li>Se autorizado por você, a denúncia poderá ser tornada pública após a análise</li>
                        <li>Acompanhe o andamento da sua denúncia através do protocolo gerado</li>
                      </ol>
                    </div>
                    <div className="mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Compromisso com a Privacidade</h3>
                      <p className="mb-6 text-gray-700 leading-relaxed">
                        O MBL Ceará garante o sigilo dos dados do denunciante. Nenhuma informação pessoal
                        é divulgada sem a expressa autorização do interessado. Mesmo quando a denúncia é
                        tornada pública, preservamos os dados de quem a realizou.
                      </p>
                      <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Tipos de Denúncias</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Irregularidades em licitações e contratos públicos</li>
                        <li>Desvio de recursos públicos</li>
                        <li>Nepotismo e favorecimento ilícito</li>
                        <li>Uso indevido de bens públicos</li>
                        <li>Irregularidades em obras públicas</li>
                        <li>Má prestação de serviços públicos</li>
                      </ul>
                    </div>
                  </motion.div>
                )
              },
              { 
                id: 'publicadas', 
                label: 'Denúncias Publicadas',
                content: (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                      <h2 className="text-3xl font-bold text-gray-900">Denúncias Publicadas</h2>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setFilteredStatus(null)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            !filteredStatus 
                              ? 'bg-yellow-500 text-black shadow-md' 
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                          }`}
                        >
                          Todas
                        </button>
                        <button
                          onClick={() => setFilteredStatus('resolvida')}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            filteredStatus === 'resolvida' 
                              ? 'bg-yellow-500 text-black shadow-md' 
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                          }`}
                        >
                          Resolvidas
                        </button>
                        <button
                          onClick={() => setFilteredStatus('em_analise')}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            filteredStatus === 'em_analise' 
                              ? 'bg-yellow-500 text-black shadow-md' 
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                          }`}
                        >
                          Em Análise
                        </button>
                      </div>
                    </div>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {filteredDenuncias.length > 0 ? (
                        filteredDenuncias.map(renderDenunciaCard)
                      ) : (
                        <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-200 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhuma denúncia encontrada</h3>
                          <p className="text-gray-600">Não foram encontradas denúncias com os filtros selecionados.</p>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                )
              },
              { 
                id: 'nova', 
                label: 'Nova Denúncia',
                content: (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                  >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Envie sua Denúncia</h2>
                    <DenunciaForm />
                  </motion.div>
                )
              }
            ]}
          />
        </div>
      </section>

      {/* CTA para engajamento */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Junte-se ao MBL Ceará na luta contra a corrupção
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Acompanhe nossas redes sociais e participe de nossas ações para uma política mais transparente e eficiente.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://instagram.com/mblceara"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-100 hover:text-black transition-all duration-200 shadow-md"
              >
                Siga no Instagram
              </a>
              <a
                href="/camisa"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-200 shadow-md"
              >
                Adquira sua Camisa
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default DenunciasPage;
