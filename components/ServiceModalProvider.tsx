'use client';

import { useServiceModal } from '@/hooks/useServiceModal';
import ServiceFormModal from './ServiceFormModal';

export default function ServiceModalProvider() {
  const { isOpen, title, closeModal } = useServiceModal();

  return (
    <ServiceFormModal 
      isOpen={isOpen} 
      onClose={closeModal} 
      title={title} 
    />
  );
}
