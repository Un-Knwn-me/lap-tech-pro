import { create } from 'zustand';

interface ServiceModalState {
  isOpen: boolean;
  title: string;
  openModal: (title?: string) => void;
  closeModal: () => void;
}

export const useServiceModal = create<ServiceModalState>((set) => ({
  isOpen: false,
  title: 'Book Service Now',
  openModal: (title = 'Book Service Now') => set({ isOpen: true, title }),
  closeModal: () => set({ isOpen: false }),
}));
