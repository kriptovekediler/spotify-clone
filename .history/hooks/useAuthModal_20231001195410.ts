import { create } from "zustand";

interface useAuthModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
