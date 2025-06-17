"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { submitFormToGoogleScript } from "@/utils/helpers";
import { GOOGLE_SCRIPT_URL } from "@/utils/constants";

export default function Camisa() {
  const sizes = ["P", "M", "G", "GG", "XG"];
  const [selectedSize, setSelectedSize] = useState("");
  const [activeView, setActiveView] = useState("frente"); // "frente" ou "costas"
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    address: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setFormData({ ...formData, size });
  };
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.size) {
      setError("Por favor, selecione um tamanho de camisa.");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fd.append(key, value);
      });
      const result = await submitFormToGoogleScript(GOOGLE_SCRIPT_URL.CAMISA_FORM, fd);
      
      if (result.success) {
        setSuccess(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          size: "",
          address: "",
          message: "",
        });
        setSelectedSize("");
      } else {
        setError(result.message);
      }
    } catch {
      setError("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Camisa Oficial MBL Ceará</h1>
              <p className="text-xl text-gray-300 mb-8">
                Demonstre seu apoio ao movimento adquirindo nossa camisa oficial. Qualidade premium e design exclusivo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Camisa Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Camisa Preview */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-gray-100 rounded-lg p-8 flex flex-col items-center border border-gray-200"
              >
                <div className="relative w-full max-w-md aspect-square mb-8">
                  <Image
                    src={`/images/camisa-${activeView}.jpg`}
                    alt={`Camisa MBL Ceará - vista ${activeView}`}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeView === "frente" ? "bg-yellow-500 text-black font-bold shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveView("frente")}
                  >
                    Vista Frontal
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeView === "costas" ? "bg-yellow-500 text-black font-bold shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveView("costas")}
                  >
                    Vista Traseira
                  </button>
                </div>
              </motion.div>
              
              {/* Order Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {success ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-lg">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-center mb-2">Solicitação Enviada com Sucesso!</h3>
                    <p className="text-center mb-6">
                      Agradecemos pelo seu pedido. Em breve entraremos em contato para confirmar os detalhes e informar sobre o pagamento e entrega.
                    </p>
                    <div className="text-center">
                      <button 
                        onClick={() => setSuccess(false)} 
                        className="bg-success-dark text-white px-6 py-2 rounded-lg hover:bg-success transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Fazer outro pedido
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 text-gray-900">Solicitar Camisa Oficial</h2>
                      <p className="text-gray-700 mb-6">
                        Preencha o formulário abaixo para solicitar sua camisa oficial do MBL Ceará. Nossa equipe entrará em contato para confirmar o pedido e informar os métodos de pagamento disponíveis.
                      </p>
                    </div>
                    
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-4">
                        <p className="font-medium">Erro ao enviar formulário</p>
                        <p>{error}</p>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Nome completo*
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                          Email*
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                          Telefone*
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Tamanho*
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {sizes.map(size => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleSizeSelect(size)}
                            className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                              selectedSize === size 
                                ? 'bg-yellow-500 text-black border-yellow-600 font-bold shadow-md' 
                                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block mb-2 text-sm font-medium">
                        Endereço para entrega*
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Observações (opcional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-gray-900 text-white py-3 font-bold rounded-lg transition-all duration-300 ${
                          loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {loading ? 'Enviando...' : 'Solicitar Camisa'}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specification Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Especificações</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Nossa camisa é produzida com materiais de alta qualidade para garantir conforto e durabilidade.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Material",
                  description: "100% algodão penteado, garantindo conforto e durabilidade",
                  icon: (
                    <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                },
                {
                  title: "Impressão",
                  description: "Estampa em serigrafia de alta qualidade e durabilidade",
                  icon: (
                    <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: "Tamanhos",
                  description: "Disponível nos tamanhos P, M, G, GG e XG",
                  icon: (
                    <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Perguntas Frequentes</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Tire suas dúvidas sobre a camisa oficial do MBL Ceará.
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "Como faço para adquirir a camisa?",
                    answer: "Preencha o formulário nesta página com seus dados e tamanho desejado. Nossa equipe entrará em contato para confirmar o pedido e informar sobre os métodos de pagamento e opções de entrega."
                  },
                  {
                    question: "Qual o valor da camisa?",
                    answer: "A camisa oficial do MBL Ceará custa R$ 55,00. Os recursos são utilizados para financiar as atividades do movimento em nosso estado."
                  },
                  {
                    question: "Quais as formas de pagamento?",
                    answer: "Aceitamos pagamentos via PIX, transferência bancária e cartão de crédito (através do link que será enviado após a confirmação do pedido)."
                  },
                  {
                    question: "Como funciona a entrega?",
                    answer: "Oferecemos duas opções: retirada em um dos nossos pontos de encontro em Fortaleza ou entrega pelos Correios (com frete calculado conforme o CEP de destino)."
                  },
                  {
                    question: "Quanto tempo demora para receber?",
                    answer: "Para retiradas em Fortaleza, o prazo é de até 7 dias úteis após a confirmação do pagamento. Para entregas pelos Correios, o prazo varia de 5 a 15 dias úteis, dependendo da região."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">{item.question}</h3>
                      <motion.div
                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeAccordion === index ? "auto" : 0,
                        opacity: activeAccordion === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
