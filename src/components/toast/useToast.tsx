import {generateID} from 'lib/generateId';
import React, {createContext, useContext, useState} from 'react';
import Toast from './toast';

type ToastType = {
  id?: string;
  message?: string;

  type?: 'error' | 'warning' | 'success' | 'info';
  position?: 'top' | 'bottom' | 'topRight' | 'topLeft';
  duration?: number;
};

type ToastOptions = {
  type?: 'error' | 'warning' | 'success' | 'info';
  position?: 'top' | 'bottom' | 'topRight' | 'topLeft';
  duration?: number;
  headline?: string;
  onClick?: () => void;
};

type ToastContextType = {
  toasts?: ToastType[];
  addToast?: (headline?: string, options?: ToastOptions) => void;
  removeToast?: (id: string) => void;
  children?: React.ReactNode;
};

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

export const ToastProvider: React.FC<ToastContextType> = ({children}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (
    message: string,
    options?: ToastOptions & {onClick?: () => void}
  ) => {
    const id = generateID();

    setToasts(prev => [...prev, {id, message, options}]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{toasts, addToast, removeToast}}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          //@ts-ignore
          type={toast?.options?.type}
          //@ts-ignore
          headline={toast?.options?.headline}
          //@ts-ignore
          duration={toast?.options?.duration}
          //@ts-ignore
          position={toast?.options?.position}
          //@ts-ignore
          onClick={toast?.options?.onClick}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
