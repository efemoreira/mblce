import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitFormToGoogleScript } from '@/utils/helpers';
import { GOOGLE_SCRIPT_URL } from '@/utils/constants';
import { FormData } from '@/types';

interface LeadFormProps {
  formTitle?: string;
  buttonText?: string;
  showPhone?: boolean;
  showMessage?: boolean;
  redirectUrl?: string;
  onSuccess?: (data: FormData) => void;
}

const LeadForm = ({
  formTitle = 'Entre em contato',
  buttonText = 'Enviar',
  showPhone = true,
  showMessage = true,
  redirectUrl,
  onSuccess
}: LeadFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const result = await submitFormToGoogleScript(GOOGLE_SCRIPT_URL.LEAD_FORM, formData);
      
      if (result.success) {
        setSuccess(true);
        
        if (onSuccess) {
          onSuccess(formData);
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        
        // Redirect if URL provided
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      } else {
        setError(result.message);
      }
    } catch {
      setError('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-black">{formTitle}</h3>
      
      {success ? (
        <motion.div
          className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-medium">Formulário enviado com sucesso!</p>
          <p>Agradecemos seu contato. Retornaremos em breve.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-4">
              <p className="font-medium">Erro ao enviar formulário</p>
              <p>{error}</p>
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-500">
              Nome*
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">
              Email*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          
          {showPhone && (
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-500">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          )}
          
          {showMessage && (
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-black py-3 font-bold rounded-md transition-colors ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-500'
            }`}
          >
            {loading ? 'Enviando...' : buttonText}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default LeadForm;
