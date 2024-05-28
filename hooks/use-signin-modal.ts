import { create } from 'zustand';

interface useSigninModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// 原登录按钮处理
// export const useSigninModal = create<useSigninModalStore>((set) => ({
//   isOpen: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),
// }));

export const useSigninModal = create<useSigninModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    location.href = "https://platform.gpt.biz/"
  },
  onClose: () => set({ isOpen: false }),
}));