import { Denuncia } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface DenunciaCardProps {
  denuncia: Denuncia;
  index?: number;
}

const DenunciaCard = ({ denuncia, index = 0 }: DenunciaCardProps) => {
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

  return (
    <motion.div
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
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadgeClass(denuncia.status)}`}>
            {getStatusText(denuncia.status)}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{denuncia.title}</h3>
        <p className="text-gray-700 mb-4">{denuncia.description.substring(0, 100)}...</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center bg-gray-50 px-3 py-1 rounded-md">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date(denuncia.date).toLocaleDateString('pt-BR')}
          </span>
          
          {denuncia.location && (
            <span className="flex items-center bg-gray-50 px-3 py-1 rounded-md">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {denuncia.location}
            </span>
          )}
        </div>
        
        <Link
          href={`/denuncias/${denuncia.id}`}
          className="inline-block text-yellow-600 font-semibold hover:text-yellow-500 hover:underline transition-colors duration-200"
        >
          Ver detalhes
        </Link>
      </div>
    </motion.div>
  );
};

export default DenunciaCard;
