import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { submitFormToGoogleScript } from '@/utils/helpers';
import { GOOGLE_SCRIPT_URL } from '@/utils/constants';

interface DenunciaFormData {
  name: string;
  email: string;
  title: string;
  description: string;
  location: string;
  isPublic: boolean;
}

interface DenunciaFormProps {
  onSuccess?: (data: DenunciaFormData) => void;
}

const DenunciaForm = ({ onSuccess }: DenunciaFormProps) => {
  const [formData, setFormData] = useState<DenunciaFormData>({
    name: '',
    email: '',
    title: '',
    description: '',
    location: '',
    isPublic: false,
  });
  
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);
    
    // Validate required fields
    if (!formData.title || !formData.description) {
      setSubmitError('Por favor, preencha todos os campos obrigatórios.');
      setLoading(false);
      return;
    }
    
    try {
      // Create FormData object for file uploads
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });
      
      // Add files if any
      attachments.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file);
      });
      
      const result = await submitFormToGoogleScript(GOOGLE_SCRIPT_URL.DENUNCIA_FORM, { ...formData });
      
      if (result.success) {
        setSuccess(true);
        
        if (onSuccess) {
          onSuccess(formData);
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          title: '',
          description: '',
          location: '',
          isPublic: false,
        });
        setAttachments([]);
      } else {
        setSubmitError(result.message);
      }
    } catch {
      setSubmitError('Ocorreu um erro ao enviar a denúncia. Tente novamente mais tarde.');
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
      <h3 className="text-2xl font-bold mb-2">Faça sua denúncia</h3>
      <p className="text-gray-600 mb-6">Preencha o formulário abaixo para enviar uma denúncia. Campos marcados com * são obrigatórios.</p>
      
      {success ? (
        <motion.div
          className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-medium">Denúncia enviada com sucesso!</p>
          <p>Agradecemos sua contribuição. Sua denúncia será analisada pela nossa equipe.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-4">
              <p className="font-medium">Erro ao enviar denúncia</p>
              <p>{submitError}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Nome (opcional)
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Seu nome (pode ser anônimo)"
              />
              <p className="text-xs text-gray-500 mt-1">Você pode deixar em branco para denúncia anônima</p>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email (opcional)
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Para retorno (opcional)"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium">
              Título da Denúncia*
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
              placeholder="Ex: Irregularidades em obra pública"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium">
              Descrição da Denúncia*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
              placeholder="Descreva detalhadamente o que aconteceu, quando, onde e quem são os envolvidos"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium">
              Local (opcional)
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Cidade/Bairro onde ocorreu"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">
              Anexos (opcional)
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="hidden"
                accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition-colors"
              >
                Selecionar Arquivos
              </button>
              <span className="text-sm text-gray-600">
                {attachments.length > 0 ? `${attachments.length} arquivo(s) selecionado(s)` : 'Nenhum arquivo selecionado'}
              </span>
            </div>
            
            {attachments.length > 0 && (
              <div className="mt-3 space-y-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded">
                    <span className="text-sm truncate" style={{ maxWidth: '80%' }}>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs text-gray-500 mt-1">Tamanho máximo: 10MB por arquivo. Formatos aceitos: imagens, PDF, Word, Excel.</p>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="isPublic"
                name="isPublic"
                type="checkbox"
                checked={formData.isPublic}
                onChange={handleChange}
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="isPublic" className="font-medium">
                Permitir que esta denúncia seja publicada
              </label>
              <p className="text-gray-500">
                Ao marcar esta opção, você permite que o MBL Ceará publique esta denúncia em seu site e redes sociais, sem divulgar seus dados pessoais.
              </p>
            </div>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary text-black py-3 font-bold rounded-md transition-colors ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark hover:text-white'
              }`}
            >
              {loading ? 'Enviando...' : 'Enviar Denúncia'}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default DenunciaForm;
